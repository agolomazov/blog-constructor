import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsArticleId } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from './fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkAPI;

  const userData = getUserAuthData(getState());
  const articleId = getArticleDetailsArticleId(getState());

  if (!text || !userData || !articleId) {
    return rejectWithValue('error');
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      text,
      articleId,
      userId: userData.id,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchCommentsByArticleId(articleId));

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
