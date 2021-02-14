import { BASE_ENDPOINT, API_KEY } from '../constants';
import { QueryFunction } from '../types';

export const generateEndpoint = (queryFunction: QueryFunction, params: string): string => {
  return `${BASE_ENDPOINT}?function=${queryFunction}${params}?apikey=${API_KEY}`;
};
