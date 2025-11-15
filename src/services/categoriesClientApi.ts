import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Category } from "../interfaces/categories.interface";
import {
  CategoryProductResp,
  ProductFilters,
} from "../interfaces/product.interface";

export const categoriesClientApi = createApi({
  reducerPath: "categoriesClientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => "/category",
    }),
    getAllCategoryProdutcs: builder.query<
      CategoryProductResp,
      ProductFilters | void
    >({
      query: (filters) => {
        let queryStr = "/category/market/products";
        if (filters) {
          const params = new URLSearchParams();
          if (filters.page) params.append("page", filters.page.toString());
          if (filters.limit) params.append("limit", filters.limit.toString());
          if (filters.type) params.append("type", filters.type.toString());
          if (params.toString()) queryStr += `?${params.toString()}`;
        }
        return queryStr;
      },
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetAllCategoryProdutcsQuery } =
  categoriesClientApi;
