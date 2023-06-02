import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username data', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '',
        isLoading: false,
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });
});
