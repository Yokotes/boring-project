import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  baseQuery: fetchBaseQuery({
    // TODO: Move to .env
    baseUrl: import.meta.env.VITE_SERVER_URL,
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
  }),
});

export default authApi;

export const { useAuthMutation } = authApi;
