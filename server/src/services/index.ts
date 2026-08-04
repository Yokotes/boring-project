import { AuthService } from "./authService";
import { ExerciseService } from "./exerciseService";
import { PrismaDBClient } from "../dbClients/prismaDBClient";
import { SetService } from "./setService";
import { TrainingService } from "./trainingService";

// TODO: Maybe move dbClient init to main.ts?
const prismaDbClient = new PrismaDBClient();

export const authService = new AuthService(prismaDbClient);
export const setService = new SetService(prismaDbClient);
export const exerciseService = new ExerciseService(prismaDbClient);
export const trainingService = new TrainingService(prismaDbClient);
