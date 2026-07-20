import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLazyCheckAuthQuery } from "@/app/apis";
import { setUser } from "@/app/slices";
import type { Page } from "@/app/types";
import { CurrentPage, useRouter } from "@/pages/Router";

const App = () => {
  const { setPage } = useRouter();
  const [checkAuth] = useLazyCheckAuthQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: Causes extra rerender, fix
    checkAuth()
      .unwrap()
      .then(({ user }) => {
        setPage(document.location.pathname as Page);
        dispatch(setUser(user));
      })
      // TODO: Change later
      .catch((err) => console.log(err.data));
  }, [checkAuth, dispatch, setPage]);

  // TODO: Maybe add fancy loader
  return <CurrentPage />;
};

export default App;
