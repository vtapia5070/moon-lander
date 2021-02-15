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
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      if (err) {
        console.error('err fetching conversion rate', err);
      }
    });
};
