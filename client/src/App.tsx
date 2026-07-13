import { useDispatch, useSelector } from "react-redux";
import { useEffect, type JSX } from "react";
import { LoginPage } from "@/pages/LoginPage";
import { AppPage } from "@/pages/AppPage";
import type { Page } from "@/app/types";
import { currentPageSelector } from "@/app/selectors";
import { useLazyCheckAuthQuery } from "@/app/apis";
import { setPage, setUser } from "@/app/slices";

const PAGES: Record<Page, JSX.Element> = {
  login: <LoginPage />,
  app: <AppPage />,
};

const App = () => {
  const currentPage = useSelector(currentPageSelector);
  const [checkAuth, { isLoading }] = useLazyCheckAuthQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth()
      .unwrap()
      .then(({ user }) => {
        dispatch(setPage("app"));
        dispatch(setUser(user));
      })
      // TODO: Change later
      .catch((err) => console.log(err.data));
  }, [checkAuth, dispatch]);

  const pageComponent = PAGES[currentPage];

  // TODO: Add fancy loader
  return <>{isLoading ? "Loading..." : pageComponent}</>;
};

export default App;
