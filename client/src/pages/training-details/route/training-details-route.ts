import { createRoute } from "@/shared/lib/router";
import { TrainingDetails } from "../ui";

export const trainingDetailsRoute = createRoute(
  "/trainings/:id",
  TrainingDetails,
  {
    authCheck: true,
  },
);
