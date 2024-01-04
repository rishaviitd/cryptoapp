import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '2ef6841613mshca3058d48a8a8d7p142ec1jsnb391be698d0d',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};
const baseUrl='https://cryptocurrency-news2.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/v1/coindesk'),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;