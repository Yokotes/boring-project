import { memo, type FC, type JSX } from "react";
import type { Page } from "@/app/types";
import { LoginPage } from "../LoginPage";
import { HomePage } from "../HomePage";
import { ExercisesPage } from "../ExercisesPage";
import { SchedulesPage } from "../SchedulesPage";
import { useRouter } from "./RouterContext";
import { NotFoundPage } from "../NotFoundPage";

const PAGES: Record<Page, JSX.Element> = {
  "/login": <LoginPage />,
  "/home": <HomePage />,
  "/exercises": <ExercisesPage />,
  "/schedules": <SchedulesPage />,
};

export const CurrentPage: FC = memo(() => {
  const { page } = useRouter();

  return <>{PAGES[page] || <NotFoundPage />}</>;
});
