import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { logger } from 'shared/lib/logger';
import { getArticlesPageLimit } from '../selectors/articles';

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (params, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const { page = 1 } = params;
  const limit = getArticlesPageLimit(getState());

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
      },
    });

    return response.data;
  } catch (e) {
    logger(e);
    return rejectWithValue('error');
  }
});
