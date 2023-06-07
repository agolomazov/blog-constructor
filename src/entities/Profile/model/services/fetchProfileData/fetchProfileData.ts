import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { logger } from 'shared/lib/logger';
import { Profile, ValidateProfileError } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Profile>('/profile');

    return response.data;
  } catch (e) {
    logger(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
