import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articles';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage';
import { FC, memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';
import { Page } from 'shared/ui/Page';
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

  const handleOnLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }, [dispatch]);

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <Page
        className={classNames(cls.articlesPage, {}, [className || ''])}
        onScrollEnd={handleOnLoadNextPage}
      >
        <ArticleViewSelector
          view={view || 'small'}
          onViewClick={handleChangeView}
        />
        <ArticleList articles={articles} isLoading={isLoading} view={view!} />
      </Page>
    </DynamicComponentLoader>
  );
};

export default memo(ArticlesPage);
