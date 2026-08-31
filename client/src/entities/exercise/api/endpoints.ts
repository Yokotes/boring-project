import type { MutationFunction, QueryFunction } from "@tanstack/react-query";
import type { Exercise, ExerciseFields } from "../model";

export const getExercisesQueryFn: QueryFunction<Exercise[]> = () =>
  fetch("/api/exercise", {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data);

export const createExerciseMutationFn: MutationFunction<
  Exercise,
  ExerciseFields
> = (exercise) =>
  fetch("/api/exercise", {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(exercise),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
