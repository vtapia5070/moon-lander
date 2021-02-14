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
  UPDATE_EXCHANGE_RATE = 'UPDATE_EXCHANGE_RATE',
}

export type Action =
  | Actions.UPDATE_BASE_CURRENCY
  | Actions.UPDATE_TARGET_CURRENCY
  | Actions.UPDATE_AMOUNT
  | Actions.UPDATE_EXCHANGE_RATE;

interface ActionInterface {
  type: string;
}

interface BaseCurrency extends ActionInterface {
  type: Actions.UPDATE_BASE_CURRENCY;
  payload: string;
}

interface TargetCurrency extends ActionInterface {
  type: Actions.UPDATE_TARGET_CURRENCY;
  payload: string;
}

interface Amount extends ActionInterface {
  type: Actions.UPDATE_AMOUNT;
  payload: number;
}

interface ExchangeRate extends ActionInterface {
  type: Actions.UPDATE_EXCHANGE_RATE;
  payload: string;
}

export type QueryActionTypes = BaseCurrency | TargetCurrency | Amount | ExchangeRate;

export interface Store {
  baseCurrency: string;
  targetCurrency: string;
  amount: number;
  exchangeRate: string;
}
