export const checkAuthQueryFn = () =>
  fetch(`${import.meta.env.VITE_SERVER_URL}/check-auth`, {
    credentials: "include",
    method: "GET",
  }).then((res) => res.json()) as Promise<{ user: string }>;

export const authMutationFn = (user: string, password: string) =>
  fetch(`${import.meta.env.VITE_SERVER_URL}/auth`, {
    method: "POST",
    body: JSON.stringify({ user, password }),
  }).then((res) => res.json()) as Promise<{ user: string }>;
