import { createRoute } from "@/shared/lib/router";
import { TrainingsPage } from "../ui/trainings";

export const trainingsRoute = createRoute("/trainings", TrainingsPage, {
  navLinkTitle: "Тренировки",
  authCheck: true,
});
