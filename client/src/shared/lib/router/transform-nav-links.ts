import type { Route } from "./create-route";

export const transformNavLinks = (
  routesMap: Record<string, Route>,
  currentRoute: Route,
) => {
  return Object.values(routesMap)
    .filter((route) => !!route.options?.navLinkTitle)
    .map((route) => ({
      url: route.url,
      title: route.options?.navLinkTitle || route.url,
      isActive: route.url === currentRoute.url,
    }));
};
