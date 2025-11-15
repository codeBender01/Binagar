import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = localStorage.getItem("token");

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_APP_BASE_URL_DERNEW,
    headers: { Authorization: `Bearer ${TOKEN}` },
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Article", "Bent", "Bap", "Yuz"],
  endpoints: () => ({}),
});

export const {} = articlesApi;
