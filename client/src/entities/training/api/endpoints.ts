import type { MutationFunction, QueryFunction } from "@tanstack/react-query";
import type { TrainingDTO, TrainingFields } from "../model";

export const getTrainingsQueryFn: QueryFunction<TrainingDTO[]> = () =>
  fetch("/api/training", {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data);

export const createTrainingMutationFn: MutationFunction<
  TrainingDTO,
  TrainingFields
> = (training) =>
  fetch("/api/training", {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(training),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
