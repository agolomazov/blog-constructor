import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
      state.validateErrors = undefined;
    },
    cancelEdit: (state) => {
      state.form = state.data;
      state.readonly = true;
      state.validateErrors = undefined;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.readonly = true;
        state.error = undefined;
        state.validateErrors = undefined;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        }
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.form = state.data;
        state.validateErrors = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
