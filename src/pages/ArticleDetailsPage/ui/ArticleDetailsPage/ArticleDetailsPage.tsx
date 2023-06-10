import { ArticleDetails } from 'entities/Article';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleId';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

interface Props {
  className?: string;
}

const ArticleDetailsPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Страница не найдена')}
      </div>
    );
  }

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        {commentsIsLoading && (
          <Skeleton width="100%" height="40px" className={cls.commentsHeader} />
        )}
        {!commentsIsLoading && (
          <Text
            title={`${t('Комментарии')} (${comments.length})`}
            className={cls.commentsHeader}
          />
        )}
        <CommentList
          className={cls.comments}
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </div>
    </DynamicComponentLoader>
  );
};
export default memo(ArticleDetailsPage);
