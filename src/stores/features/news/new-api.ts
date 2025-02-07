import { API_URL } from "@/configs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  IPostDetailResponse, IPostsResponse, Post, PostResponse } from "./type";

export const NewsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),
  endpoints: (build) => ({
    // GET LIST
    getListNews: build.query<PostResponse, {
        page?: number;
        limit?: number;
    }>({
      query: (payload) => {
        return {
          url: `/ghost`,
          method: "GET",
          params: payload,
        };
      },
      transformResponse: (response: IPostsResponse) => response.data.data,
    }),
    // GET BY ID
    getNewsBySlug: build.query<Post, { slug: string }>({
      query: ({ slug }) => ({
        url: `/ghost/${slug}`,
        method: "GET",
      }),
      transformResponse: (response: IPostDetailResponse) => response.data.data,
    }),
  }),
});

export const {
  endpoints,
  useGetNewsBySlugQuery,
  useGetListNewsQuery,
  useLazyGetNewsBySlugQuery,
  useLazyGetListNewsQuery,
} = NewsAPI;
