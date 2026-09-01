import { createRoute } from "@/shared/lib/router";
import { NotFoundPage } from "../ui/not-found";

export const notFoundRoute = createRoute("/404", NotFoundPage, {
  withoutLayout: true,
});
