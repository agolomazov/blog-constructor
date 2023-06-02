import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true if state isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
        username: '123',
        password: 'asd',
        error: 'ERROR',
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBeTruthy();
  });

  test('should return false if state isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
        username: '123',
        password: 'asd',
        error: 'ERROR',
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
  });
});
