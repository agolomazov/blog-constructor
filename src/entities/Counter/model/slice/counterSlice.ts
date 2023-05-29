import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      return state;
    },
    decrement: (state) => {
      state.value -= 1;
      return state;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
