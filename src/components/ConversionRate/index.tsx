import { useContext } from 'react';

import { StoreContext } from '../../shared/context';

import './styles.scss';

export const ConversionRate = () => {
  const { state } = useContext(StoreContext);

  return (
    <div className="conversionRate">
      <div className="container">
        <div className="header">Base Curremcy:</div>
        <span>
          {state.baseCurrency && state.amount}
          {state.baseCurrency}
        </span>
      </div>
      <div className="container">
        <div className="header">Target Currency:</div>
        <span>
          {state.targetCurrency && state.amount}
          {state.targetCurrency}
        </span>
      </div>
      <div className="container">
        <div className="header">Conversion Rate:</div>
        <span>
          {state.exchangeRate.rate && Number(state.amount) * Number(state.exchangeRate.rate)}
        </span>
      </div>
    </div>
  );
};
