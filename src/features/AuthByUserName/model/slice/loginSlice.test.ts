import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('setUsername', () => {
    const state: LoginSchema = {
      username: '',
      password: '',
      isLoading: false,
    };

    expect(loginReducer(state, loginActions.setUsername('admin'))).toEqual({
      ...state,
      username: 'admin',
    });
  });

  test('setPassword', () => {
    const state: LoginSchema = {
      username: '',
      password: '',
      isLoading: false,
    };

    expect(loginReducer(state, loginActions.setPassword('123'))).toEqual({
      ...state,
      password: '123',
    });
  });
});
