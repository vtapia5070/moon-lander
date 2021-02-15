import { useContext } from 'react';
// import Grid from '@material-ui/core/Grid';
// import { Actions, QueryFunctions } from '../../shared/types';

import { StoreContext } from '../../shared/context';
// import { fetchConversionRate } from '../../shared/api';

import './styles.scss';

export const ConversionRate = () => {
  const { state, dispatch } = useContext(StoreContext);

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
