import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PhoneLogin,
  EmailLogin,
  Verification,
} from "../interfaces/auth.interface";
import { ApiResponse } from "../interfaces/apiResponse.interface";

export const clientAuthApi = createApi({
  reducerPath: "clientAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    clientLogin: builder.mutation<ApiResponse<string>, PhoneLogin | EmailLogin>(
      {
        query: (obj) => ({
          url: "/auth/login",
          body: obj,
          method: "POST",
        }),
      }
    ),
    clientVerify: builder.mutation<ApiResponse<any>, Verification>({
      query: (obj) => ({
        url: "/auth/verify",
        body: obj,
        method: "POST",
      }),
    }),
  }),
});

export const { useClientLoginMutation, useClientVerifyMutation } =
  clientAuthApi;
