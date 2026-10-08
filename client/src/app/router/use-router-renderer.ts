import { useCallback, useEffect, useMemo, useState } from "react";
import { homeRoute } from "@/pages/home";
import { exercisesRoute } from "@/pages/exercises";
import { trainingsRoute } from "@/pages/trainings";
import { loginRoute } from "@/pages/login";
import { notFoundRoute } from "@/pages/not-found";
import { trainingDetailsRoute } from "@/pages/training-details";
import { transformNavLinks, type Route } from "@/shared/lib/router";
import { useCheckAuth } from "./use-check-auth";

type NavLink = {
  url: string;
  title: string;
  isActive?: boolean;
};

type RouteWithParams = Route & { params?: Record<string, string> };

const ROUTES_MAP = {
  [notFoundRoute.url]: notFoundRoute,
  [loginRoute.url]: loginRoute,
  [homeRoute.url]: homeRoute,
  [exercisesRoute.url]: exercisesRoute,
  [trainingsRoute.url]: trainingsRoute,
  [trainingDetailsRoute.url]: trainingDetailsRoute,
};

const getRoute = (url: string): RouteWithParams => {
  // TODO: Подумать над другим решением. Что-то слишком громоздко получилось...
  if (/\/\d+/.test(url)) {
    const urlParts = url.split("/");
    const indexesWithNumbers = urlParts.reduce((acc, item, index) => {
      if (/\d+/.test(item)) acc.push(index);

      return acc;
    }, [] as number[]);

    if (indexesWithNumbers.length < 1) return ROUTES_MAP["/404"];

    const found = Object.keys(ROUTES_MAP).find((path) => {
      const pathArr = path.split("/");

      // NOTE: Оператор ? при извлечении элемента по индексу нужен, чтобы проверить не выходит ли индекс за массив.
      return (
        indexesWithNumbers
          .map((index) => pathArr[index]?.startsWith(":"))
          .filter((res) => !res).length < 1
      );
    });

    if (!found) return ROUTES_MAP["/404"];

    const foundParts = found.split("/");

    const params = indexesWithNumbers.reduce(
      (acc, index) => {
        // NOTE: slice удаляет : перед параметром.
        acc[foundParts[index].slice(1)] = urlParts[index];

        return acc;
      },
      {} as Record<string, string>,
    );

    return {
      ...ROUTES_MAP[found],
      params,
    };
  }

  return url in ROUTES_MAP ? ROUTES_MAP[url] : ROUTES_MAP["/404"];
};

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
    params: currentRoute.params,
  };
};
