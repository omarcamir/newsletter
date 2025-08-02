// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

// export const newsApi = createApi({
//   reducerPath: "newsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://newsapi.org/v2/",
//   }),
//   endpoints: (builder) => ({
//     searchNews: builder.query({
//       query: ({ q='', category, page = 1, pageSize = 10 }) =>
//         `everything?q=${q}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`,
//     }),
//     topHeadlines: builder.query({
//       query: (country = "us") =>
//         `top-headlines?country=${country}&apiKey=${API_KEY}`,
//     }),
//   }),
// });

// export const { useSearchNewsQuery, useTopHeadlinesQuery } = newsApi;

// rtkQuery/services/newsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    topHeadlines: builder.query({
      query: ({ country = "us", page = 1, pageSize = 7 }) => {
        const params = new URLSearchParams({
          type: "top-headlines",
          country,
          page: String(page),
          pageSize: String(pageSize),
        });
        return `news?${params.toString()}`;
      },
    }),
  }),
});

export const { useTopHeadlinesQuery } = newsApi;


