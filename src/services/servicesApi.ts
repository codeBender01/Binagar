import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ServiceType } from "../interfaces/service.interface";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllServices: builder.query<ServiceType[], void>({
      query: () => "/category/service",
    }),
  }),
});

export const { useGetAllServicesQuery } = servicesApi;
