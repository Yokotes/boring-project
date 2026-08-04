import type { DBCLient } from "../dbClients";
import type { ExerciseRequestBody } from "../types";
import { Service } from "./service";

export class ExerciseService extends Service {
  constructor(dbClient: DBCLient) {
    super(dbClient);
  }

  getAll() {
    return this.dbClient.findManyExercises();
  }

  getById(id: number) {
    return this.dbClient.findUniqueExercise({ where: { id } });
  }

  create(exercise: ExerciseRequestBody) {
    return this.dbClient.createExercise(exercise);
  }

  update(id: number, exercise: ExerciseRequestBody) {
    return this.dbClient.updateExerciseById(id, exercise);
  }
}
