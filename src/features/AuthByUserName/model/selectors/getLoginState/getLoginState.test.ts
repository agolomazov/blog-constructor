import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login auth data', () => {
    const initData: LoginSchema = {
      username: 'test',
      password: '123',
      isLoading: false,
    };

    const state: DeepPartial<StateSchema> = {
      loginForm: initData,
    };
    expect(getLoginState(state as StateSchema)).toEqual(initData);
  });

  test('should return login auth data with error', () => {
    const initData: LoginSchema = {
      username: 'test',
      password: '123',
      isLoading: false,
      error: 'some error',
    };

    const state: DeepPartial<StateSchema> = {
      loginForm: initData,
    };
    expect(getLoginState(state as StateSchema)).toEqual(initData);
  });
});
