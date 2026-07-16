import { useDispatch, useSelector } from "react-redux";
import { useEffect, type JSX } from "react";
import type { Page } from "@/app/types";
import { currentPageSelector } from "@/app/selectors";
import { useLazyCheckAuthQuery } from "@/app/apis";
import { setPage, setUser } from "@/app/slices";
import { LoginPage } from "@/pages/LoginPage";
import { HomePage } from "@/pages/HomePage";
import { ExercisesPage } from "@/pages/ExercisesPage";
import { SchedulesPage } from "@/pages/SchedulesPage";

const PAGES: Record<Page, JSX.Element> = {
  login: <LoginPage />,
  home: <HomePage />,
  exercises: <ExercisesPage />,
  schedules: <SchedulesPage />,
};

const App = () => {
  const currentPage = useSelector(currentPageSelector);
  const [checkAuth] = useLazyCheckAuthQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth()
      .unwrap()
      .then(({ user }) => {
        dispatch(setPage("home"));
        dispatch(setUser(user));
      })
      // TODO: Change later
      .catch((err) => console.log(err.data));
  }, [checkAuth, dispatch]);

  const pageComponent = PAGES[currentPage];

  // TODO: Maybe add fancy loader
  return <>{pageComponent}</>;
};

export default App;
