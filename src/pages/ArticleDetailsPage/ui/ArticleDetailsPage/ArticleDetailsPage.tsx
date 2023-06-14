import { ArticleDetails } from 'entities/Article';
import { FC, memo, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { AddCommentForm, getAddCommentFormText } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
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
  const navigate = useNavigate();
  const comments = useAppSelector(getArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading);
  const commentText = useAppSelector(getAddCommentFormText);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  const handleAddComment = useCallback(() => {
    if (commentText) {
      dispatch(addCommentForArticle(commentText));
    }
  }, [dispatch, commentText]);

  const handleBackToListArticles = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Страница не найдена')}
      </div>
    );
  }

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToListArticles}>
          {t('Назад к списку')}
        </Button>
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
        <AddCommentForm
          className={cls.addCommentForm}
          onSendComment={handleAddComment}
        />
        <CommentList
          className={cls.comments}
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </Page>
    </DynamicComponentLoader>
  );
};
export default memo(ArticleDetailsPage);
