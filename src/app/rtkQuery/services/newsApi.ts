import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",
  }),
  endpoints: (builder) => ({
    searchNews: builder.query({
      query: ({ q='', category, page = 1, pageSize = 10 }) =>
        `everything?q=${q}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`,
    }),
    topHeadlines: builder.query({
      query: (country = "us") =>
        `top-headlines?country=${country}&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useSearchNewsQuery, useTopHeadlinesQuery } = newsApi;
