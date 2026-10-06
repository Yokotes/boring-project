import { Service } from "./service";
import type { DBCLient } from "../dbClients";
import type { SetService } from "./setService";
import type { ExerciseService } from "./exerciseService";
import type { DetailedTraining, Exercise, Training } from "../model";
import type { TrainingRequestBody } from "../types";

export class TrainingService extends Service {
  private setService: SetService;
  private exerciseService: ExerciseService;

  constructor(
    dbClient: DBCLient,
    setService: SetService,
    exerciseService: ExerciseService,
  ) {
    super(dbClient);

    this.setService = setService;
    this.exerciseService = exerciseService;
  }

  create({ title, sets }: TrainingRequestBody) {
    const dataToCreate: Omit<Training, "id"> = {
      title,
      sets: sets.map(({ exercises }) => ({
        exercises: exercises.map(({ reps, id }) => ({
          reps: Number(reps),
          exerciseId: id,
        })),
      })),
    };

    return this.dbClient.createTraining(dataToCreate);
  }

  async getAll() {
    return this.dbClient.findManyTrainings();
  }

  getById(id: number) {
    return this.dbClient.findUniqueTraining({
      where: { id },
    });
  }

  async getDetailedById(id: number) {
    const training = await this.getById(id);

    if (!training) return null;

    const sets = (
      await Promise.all(
        training.sets.map((set) => this.setService.getById(set.id!)),
      )
    ).filter((set) => !!set);

    const exerciseIds = new Set<number>();

    sets.forEach((set) => {
      if (!set) return;

      set.exercises?.forEach((exercise) => {
        exerciseIds.add(exercise.exerciseId!);
      });
    });

    const test = await Promise.all(
      [...exerciseIds].map((id) => this.exerciseService.getById(id)),
    );

    const exercisesMap = test.reduce(
      (acc, exercise) => {
        acc[exercise!.id] = exercise!;

        return acc;
      },
      {} as Record<number, Exercise>,
    );

    return {
      id: training.id,
      title: training.title,
      sets: sets.map((set) => ({
        id: set.id,
        exercises: set.exercises!.map((exercise) => ({
          reps: exercise.reps,
          ...exercisesMap[exercise.id!],
        })),
      })),
    } as DetailedTraining;
  }
}
