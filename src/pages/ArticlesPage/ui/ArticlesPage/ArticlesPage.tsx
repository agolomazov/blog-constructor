import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import {
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articles';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { FC, memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface Props {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(getArticlesPageIsLoading);
  const view = useAppSelector(getArticlesPageView);

  const handleChangeView = useCallback(
    (newValue: ArticleView) => {
      dispatch(articlesPageActions.setView(newValue));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList());
  }, [dispatch]);

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articlesPage, {}, [className || ''])}>
        <ArticleViewSelector
          view={view || 'small'}
          onViewClick={handleChangeView}
        />
        <ArticleList articles={articles} isLoading={isLoading} view={view!} />
      </div>
    </DynamicComponentLoader>
  );
};

export default memo(ArticlesPage);
