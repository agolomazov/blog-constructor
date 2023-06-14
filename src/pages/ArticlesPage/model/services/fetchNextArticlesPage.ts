import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { logger } from 'shared/lib/logger';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from '../selectors/articles';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const hasMore = getArticlesPageHasMore(getState());
  const page = getArticlesPageNumber(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    logger('come on new part articles');
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(
      fetchArticlesList({
        page,
      })
    );
  }
});
