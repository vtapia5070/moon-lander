export enum QueryFunctions {
  SYMBOL_SEARCH = 'SYMBOL_SEARCH',
  CURRENCY_EXCHANGE_RATE = 'CURRENCY_EXCHANGE_RATE',
  FX_DAILY = 'FX_DAILY',
}

export type QueryFunction =
  | QueryFunctions.SYMBOL_SEARCH
  | QueryFunctions.CURRENCY_EXCHANGE_RATE
  | QueryFunctions.FX_DAILY;

export enum Actions {
  UPDATE_BASE_CURRENCY = 'UPDATE_BASE_CURRENCY',
  UPDATE_TARGET_CURRENCY = 'UPDATE_TARGET_CURRENCY',
  UPDATE_AMOUNT = 'UPDATE_AMOUNT',
  FETCH_EXCHANGE_RATE = 'FETCH_EXCHANGE_RATE',
}

export type Action =
  | Actions.UPDATE_BASE_CURRENCY
  | Actions.UPDATE_TARGET_CURRENCY
  | Actions.UPDATE_AMOUNT
  | Actions.FETCH_EXCHANGE_RATE;

interface BaseCurrency {
  type: Actions.UPDATE_BASE_CURRENCY;
  payload: string;
}

interface TargetCurrency {
  type: Actions.UPDATE_TARGET_CURRENCY;
  payload: string;
}

interface Amount {
  type: Actions.UPDATE_AMOUNT;
  payload: string;
}

export type FetchStatus = 'Idle' | 'Pending' | 'Complete' | 'Failure';

interface ExchangeRate {
  type: Actions.FETCH_EXCHANGE_RATE;
  payload: {
    status: FetchStatus;
    rate: string;
  };
}

export type QueryActionTypes = BaseCurrency | TargetCurrency | Amount | ExchangeRate;

export interface Store {
  baseCurrency: string;
  targetCurrency: string;
  amount: string;
  exchangeRate: {
    rate: string;
    status: FetchStatus;
  };
}
