import type { QueryFunction } from "@tanstack/react-query";
import type { Training } from "../model";

export const getTrainingsQueryFn: QueryFunction<Training[]> = () =>
  fetch("/api/training", {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data);
