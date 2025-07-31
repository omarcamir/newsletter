import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.NEXT_PUBLIC_GUARDIAN_KEY;

export const guardianApi = createApi({
  reducerPath: "guardianApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://content.guardianapis.com/",
  }),
  endpoints: (builder) => ({
    searchArticles: builder.query({
      query: ({ q='', page = 1, pageSize = 10 }) =>
        `search?q=${q}&page=${page}&page-size=${pageSize}&show-fields=thumbnail,body,byline&api-key=${API_KEY}`,
    }),
    getArticleById: builder.query({
      query: (id) =>
        `${id}?show-fields=thumbnail,body,byline&api-key=${API_KEY}`,
    }),
  }),
});

export const { useSearchArticlesQuery, useGetArticleByIdQuery } = guardianApi;
