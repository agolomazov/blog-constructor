import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
        username: 'admin',
        isLoading: false,
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
});
