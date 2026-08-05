import { homeRoute } from "@/pages/home";
import { exercisesRoute } from "@/pages/exercises";
import { loginRoute } from "@/pages/login";
import { notFoundRoute } from "@/pages/not-found";

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

export const useRouter = () => {
  const url = document.location.pathname;
  const currentRoute = url in ROUTES_MAP ? ROUTES_MAP[url] : ROUTES_MAP["/404"];
  const navLinks: NavLink[] = Object.values(ROUTES_MAP)
    .filter((route) => !!route.options?.navLinkTitle)
    .map((route) => ({
      url: route.url,
      title: route.options?.navLinkTitle || route.url,
      isActive: route.url === currentRoute.url,
    }));

  // TODO: Add check-auth logic

  return {
    Component: currentRoute.Component,
    navLinks,
    withoutLayout: currentRoute.options?.withoutLayout || false,
  };
};
