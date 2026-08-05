import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Exercise } from "./types";
import type { ExerciseFields } from "@/components/ExerciseForm";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SERVER_URL,
  credentials: "include",
});

const authApi = createApi({
  baseQuery,
  tagTypes: ["Exercise"],
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
    getAllExercises: build.query<Exercise[], void>({
      query: () => ({
        url: "/exercise",
      }),
      transformResponse: (response: { data: Exercise[] }) => response.data,
      providesTags: ["Exercise"],
    }),
    createExercise: build.mutation<Exercise, ExerciseFields>({
      query: (data) => ({
        url: "/exercise",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: { data: Exercise }) => response.data,
      invalidatesTags: ["Exercise"],
    }),
    updateExercise: build.mutation<Exercise, ExerciseFields & { id: number }>({
      query: (data) => ({
        url: `/exercise/${data.id}`,
        method: "PUT",
        body: data,
      }),
      transformResponse: (response: { data: Exercise }) => response.data,
      invalidatesTags: ["Exercise"],
    }),
  }),
});

export default authApi;

export const {
  useAuthMutation,
  useLazyCheckAuthQuery,
  useLazyGetAllExercisesQuery,
  useCreateExerciseMutation,
  useUpdateExerciseMutation,
} = authApi;
