import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    credentials: "include",
  }),
  endpoints: (build) => ({
    auth: build.mutation<{ user: string }, { login: string; password: string }>(
      {
        query: (data) => ({
          url: "/auth",
          method: "POST",
          body: data,
        }),
      },
    ),
    checkAuth: build.query<{ user: string }, void>({
      query: () => ({
        url: "/check-auth",
      }),
    }),
  }),
});

export default authApi;

export const { useAuthMutation, useLazyCheckAuthQuery } = authApi;
