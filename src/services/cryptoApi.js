
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
'X-RapidAPI-Key': '2ef6841613mshca3058d48a8a8d7p142ec1jsnb391be698d0d',
'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl='https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/coin/Qwsogvtv82FCd/markets`),
    }),

  }),
});

export const {
  useGetCryptosQuery,
  useGetExchangesQuery,
  
} = cryptoApi;

