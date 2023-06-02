import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error state',
        username: 'some username',
        password: 'some password',
        isLoading: false,
      },
    };

    expect(getLoginError(state as StateSchema)).toBe('error state');
  });

  test('should return null if not error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'some username',
        password: 'some password',
        isLoading: false,
      },
    };

    expect(getLoginError(state as StateSchema)).toBeNull();
  });
});
