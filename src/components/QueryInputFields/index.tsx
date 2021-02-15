import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Actions, QueryFunctions } from '../../shared/types';

import { StoreContext } from '../../shared/context';
import { fetchConversionRate } from '../../shared/api';

import './styles.scss';

export const QueryInputFields = () => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <div className="queryInputFields">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            value={state.baseCurrency}
            onChange={(evt) =>
              dispatch({ type: Actions.UPDATE_BASE_CURRENCY, payload: evt.target.value })
            }
            label="Base Currency"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={state.targetCurrency}
            onChange={(evt) =>
              dispatch({ type: Actions.UPDATE_TARGET_CURRENCY, payload: evt.target.value })
            }
            label="Target Currency"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={state.amount}
            onChange={(evt) => dispatch({ type: Actions.UPDATE_AMOUNT, payload: evt.target.value })}
            type="number"
            label="Amount"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            className="button"
            variant="contained"
            color="primary"
            disabled={
              !state.baseCurrency.length || !state.targetCurrency.length || !state.amount.length
            }
            onClick={() => {
              dispatch({
                type: Actions.FETCH_EXCHANGE_RATE,
                payload: {
                  status: 'Pending',
                  rate: '',
                },
              });

              fetchConversionRate(
                `function=${QueryFunctions.CURRENCY_EXCHANGE_RATE}&from_currency=${state.baseCurrency}&to_currency=${state.targetCurrency}`
              ).then((res) => {
                const rate = res['Realtime Currency Exchange Rate']['5. Exchange Rate'];
                dispatch({
                  type: Actions.FETCH_EXCHANGE_RATE,
                  payload: {
                    rate,
                    status: 'Complete',
                  },
                });
              });
            }}
          >
            Get Conversions
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
