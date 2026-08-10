import { useCallback, useEffect, useMemo, useState } from "react";
import { homeRoute } from "@/pages/home";
import { exercisesRoute } from "@/pages/exercises";
import { loginRoute } from "@/pages/login";
import { notFoundRoute } from "@/pages/not-found";
import { transformNavLinks } from "@/shared/lib/router";
import { useCheckAuth } from "./use-check-auth";

type NavLink = {
  url: string;
  title: string;
  isActive?: boolean;
};

const ROUTES_MAP = {
  [notFoundRoute.url]: notFoundRoute,
  [loginRoute.url]: loginRoute,
  [homeRoute.url]: homeRoute,
  [exercisesRoute.url]: exercisesRoute,
};

const getRoute = (url: string) =>
  url in ROUTES_MAP ? ROUTES_MAP[url] : ROUTES_MAP["/404"];

export const useRouterRenderer = () => {
  // TODO: Come up what to do if user authorized and go to login page
  const [url, setUrl] = useState(document.location.pathname);
  const { checkAuth, isLoading, user } = useCheckAuth();
  const currentRoute = useMemo(() => getRoute(url), [url]);
  const navLinks: NavLink[] = useMemo(
    () => transformNavLinks(ROUTES_MAP, currentRoute),
    [currentRoute],
  );

  const goToPage = useCallback((to: string) => {
    history.pushState(null, "", to);
    setUrl(to);
  }, []);

  useEffect(() => {
    if (!currentRoute.options?.authCheck) return;

    checkAuth().catch(() => {
      goToPage("/login");
    });
  }, [checkAuth, currentRoute, goToPage]);

  return {
    navLinks,
    withoutLayout: !!currentRoute.options?.withoutLayout,
    user,
    isLoading,
    Component: currentRoute.Component,
    goToPage,
  };
};
