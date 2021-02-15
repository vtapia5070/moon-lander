import React, { FC, createContext, useReducer, ReactNode, Dispatch } from 'react';
import { Store, QueryActionTypes } from './types';
import { reducer } from './reducer';

interface StoreContextType {
  state: Store;
  dispatch: Dispatch<QueryActionTypes>;
}

const initialState: Store = {
  baseCurrency: '',
  targetCurrency: '',
  amount: '1',
  exchangeRate: {
    rate: '',
    status: 'Idle',
  },
};

const StoreContext = createContext<StoreContextType>({
  state: initialState,
  dispatch: () => null,
});
const { Provider } = StoreContext;

interface Props {
  children: ReactNode;
}

const StateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StoreContext, StateProvider };
