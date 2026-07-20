import type { Page } from "@/app/types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface RouterContextValue {
  page: Page;
  setPage: (newPage: Page) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export const RouterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState(document.location.pathname as Page);

  const handlePopState = useCallback((event: Event) => {
    alert(event);
  }, []);

  const handleSetPage = useCallback((newPage: Page) => {
    history.pushState(null, "", newPage);
    setPage(newPage);
  }, []);

  useEffect(() => {
    window.addEventListener("popevent", handlePopState);

    return () => {
      window.removeEventListener("popevent", handlePopState);
    };
  }, [handlePopState]);

  return (
    <RouterContext.Provider value={{ page, setPage: handleSetPage }}>
      {children}
    </RouterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRouter = () => {
  const context = useContext(RouterContext);

  if (!context) throw Error("Cannot get context outside of RouterProvider!");

  return context;
};
