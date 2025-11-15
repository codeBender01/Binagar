import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Brand } from "../interfaces/brands.interface";

export const brandsClientAPi = createApi({
  reducerPath: "brandsClientAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllBrands: builder.query<Brand[], void>({
      query: () => "/brand",
    }),
  }),
});

export const { useGetAllBrandsQuery } = brandsClientAPi;
