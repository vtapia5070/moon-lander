import { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';

import { StoreContext } from '../../shared/context';
import { fetchHistoricalConversions } from '../../shared/api';
import { QueryFunctions } from '../../shared/types';

export const HistoricalConversions = () => {
  const { state } = useContext(StoreContext);
  const [dataChart, setDataChart] = useState({});

  useEffect(() => {
    if (!state.baseCurrency || !state.targetCurrency || !state.exchangeRate.rate) {
      return;
    }
    fetchHistoricalConversions(
      `function=${QueryFunctions.FX_DAILY}&from_symbol=${state.baseCurrency}&to_symbol=${state.targetCurrency}`
    ).then((res) => {
      if (!res['Time Series FX (Daily)']) {
        return;
      }
      const exchangeRates = [];
      const timestamps = [];
      for (const key in res['Time Series FX (Daily)']) {
        exchangeRates.push(
          Number(res['Time Series FX (Daily)'][key]['4. close']) * Number(state.amount)
        );
        timestamps.push(key);
      }

      setDataChart({
        labels: timestamps,
        datasets: [
          {
            label: 'Forex Daily Prices (closed)',
            data: exchangeRates,
          },
        ],
      });
    });
  }, [state.baseCurrency, state.targetCurrency, state.exchangeRate, state.amount]);

  return (
    <div>
      {state.baseCurrency && state.targetCurrency ? (
        <>
          <h3>Historical Exchange Rates over the past 30 days</h3>
          <div className="container">
            <Line data={dataChart} />
          </div>
        </>
      ) : (
        <h3>Enter currencies to view historical data.</h3>
      )}
    </div>
  );
};
