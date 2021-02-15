import { BASE_ENDPOINT, API_KEY } from '../constants';
// import { QueryFunction } from '../types'; // TODO: dynamically add function and type check

export const generateEndpoint = (params: string): string =>
  `${BASE_ENDPOINT}?${params}&apikey=${API_KEY}`;
