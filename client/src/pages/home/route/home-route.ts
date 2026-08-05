import { createRoute } from "@/shared/lib/router";
import { HomePage } from "../ui/home";

export const homeRoute = createRoute("/", HomePage, {
  navLinkTitle: "Главная",
  authCheck: true,
});
