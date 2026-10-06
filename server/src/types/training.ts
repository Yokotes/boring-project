export interface TrainingRequestBody {
  title: string;
  sets: {
    exercises: {
      id: number;
      title: string;
      reps: number;
    }[];
  }[];
}
