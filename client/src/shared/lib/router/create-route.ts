import type { JSX } from "react";

type ComponentType = (props?: unknown) => JSX.Element;

interface RouteOptions {
  authCheck?: boolean;
  navLinkTitle?: string;
  withoutLayout?: boolean;
}

interface Route {
  url: string;
  Component: ComponentType;
  options?: RouteOptions;
}

export const createRoute = (
  url: string,
  Component: ComponentType,
  options?: RouteOptions,
): Route => {
  return { url, Component, options };
};
