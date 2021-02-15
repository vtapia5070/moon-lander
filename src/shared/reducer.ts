import { QueryActionTypes, Actions, Store } from './types';

export const reducer = (state: Store, action: QueryActionTypes): Store => {
  switch (action.type) {
    case Actions.UPDATE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload,
      };
    case Actions.UPDATE_TARGET_CURRENCY:
      return {
        ...state,
        targetCurrency: action.payload,
      };
    case Actions.UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case Actions.FETCH_EXCHANGE_RATE:
      return {
        ...state,
        exchangeRate: {
          ...action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
