import { createRoute } from "@/shared/lib/router";
import { LoginPage } from "../ui/login";

export const loginRoute = createRoute("/login", LoginPage, {
  withoutLayout: true,
});
