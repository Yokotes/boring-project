import type { MutationFunction } from "@tanstack/react-query";

export const checkAuthQueryFn = () =>
  fetch("/api/check-auth", {
    credentials: "include",
    method: "GET",
  }).then((res) => res.json()) as Promise<{ user: string }>;

export const authMutationFn: MutationFunction<
  { user: string },
  { login: string; password: string }
> = ({ login, password }) =>
  fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
