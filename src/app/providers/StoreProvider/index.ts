import { StoreProvider } from './ui/StoreProvider';
import {
  createReduxStore,
  useAppDispatch,
  useAppSelector,
} from './config/store';
import type { AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager } from './config/StateSchema';
import { ThunkConfig } from './config/stateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfig,
  useAppDispatch,
  useAppSelector,
};
