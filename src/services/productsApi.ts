import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../interfaces/apiResponse.interface";
import { OneSeparateProduct } from "../interfaces/products";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProductById: builder.query<ApiResponse<OneSeparateProduct>, string>({
      query: (id) => `/product/${id}`,
    }),
    getProducts: builder.query<
      ApiResponse<OneSeparateProduct[]>,
      { categoryId?: string; priceOrder?: "asc" | "desc" }
    >({
      query: (params) => ({
        url: "/product",
        params,
      }),
    }),
    getSimilarProducts: builder.query<
      ApiResponse<OneSeparateProduct[]>,
      string
    >({
      query: (id) => `/product/similar/${id}`,
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductsQuery,
  useGetSimilarProductsQuery,
} = productsApi;
