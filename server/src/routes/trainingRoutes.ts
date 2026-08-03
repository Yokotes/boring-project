import { Router } from "express";
import { authMiddleware } from "../middlewares";
import {
  getAllTrainings,
  getExerciseById,
  getSetById,
  getTrainingById,
} from "../services";
import type {
  Exercise,
  Set,
  SetExercise,
  Training,
} from "../../generated/prisma/client";

const trainingRouter = Router();

trainingRouter.use(authMiddleware);

trainingRouter.get("/trainings", async (_, res) => {
  const data = await getAllTrainings();

  res.status(200).send(data);
});

trainingRouter.get("/trainings/:id", async (req, res) => {
  const id = Number(req.params.id);

  // Getting training by id
  const training = await getTrainingById(id);

  if (!training) return res.sendStatus(404);

  // Getting training sets
  const sets = await Promise.all(
    training.sets.map((set) => getSetById(set.id)),
  );

  // Getting sets exercises
  const exerciseIds = new Set<number>();

  sets.forEach((set) => {
    if (!set) return;

    set.exercises.forEach((exercise) => {
      exerciseIds.add(exercise.id);
    });
  });

  // Create exercise map
  const exercisesMap = (
    await Promise.all([...exerciseIds].map((id) => getExerciseById(id)))
  ).reduce(
    (acc, exercise) => {
      acc[exercise!.id] = exercise!;

      return acc;
    },
    {} as Record<number, Exercise>,
  );

  // Form response body

  // TODO: Do something easy to understand, now it's the pizdec
  type ResponseData = Training & {
    sets: (Omit<Set, "trainingId"> & {
      exercises: (Exercise & Omit<SetExercise, "exerciseId" | "setId">)[];
    })[];
  };

  const data: ResponseData = {
    id: training.id,
    title: training.title,
    sets: sets.map((set) => ({
      id: set!.id,
      exercises: set!.exercises.map((exercise) => ({
        reps: exercise.reps,
        ...exercisesMap[exercise.id],
      })),
    })),
  };

  res.status(200).send(data);
});
