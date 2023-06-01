import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true if state isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBeTruthy();
  });

  test('should return false if state isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
  });

  test('should return false if not field isLoading into state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
  });
});
