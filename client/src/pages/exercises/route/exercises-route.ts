import { createRoute } from "@/shared/lib/router";
import { ExercisesPage } from "../ui/exercises";

export const exercisesRoute = createRoute("/exercises", ExercisesPage, {
  navLinkTitle: "Упражнения",
  authCheck: true,
});
