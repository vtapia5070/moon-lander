import { generateEndpoint } from '../helpers/index';

export const fetchConversionRate = (params: string) => {
  return fetch(generateEndpoint(params))
    .then((res) => res.json())
    .catch((err) => {
      if (err) {
        console.error('err fetching conversion rate', err);
      }
    });
};

export const fetchHistoricalConversions = (params: string) => {
  return fetch(generateEndpoint(params))
    .then((res) => res.json())
    .catch((err) => {
      if (err) {
        console.error('err fetching historical conversions', err);
      }
    });
};
