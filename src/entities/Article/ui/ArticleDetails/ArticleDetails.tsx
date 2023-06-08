import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme } from 'shared/ui/Text';
import {
  // getArticleDetailsData,
  getArticleDetailsError,
  // getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface Props {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const isLoading = true;
  // const data = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          width={200}
          height={200}
          border="50%"
          className={cls.avatar}
        />
        <Skeleton width={300} height={24} className={cls.title} />
        <Skeleton width={600} height={24} className={cls.skeleton} />
        <Skeleton width={200} height={200} className={cls.skeleton} />
        <Skeleton width="100%" height={200} className={cls.skeleton} />
        <Skeleton width="100%" height={200} className={cls.skeleton} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке страницы')}
        align="center"
      />
    );
  } else {
    content = <div>content</div>;
  }

  return (
    <DynamicComponentLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicComponentLoader>
  );
});
