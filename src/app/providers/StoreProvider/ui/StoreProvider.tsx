import { FC, ReactNode } from 'react';

import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/stateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
