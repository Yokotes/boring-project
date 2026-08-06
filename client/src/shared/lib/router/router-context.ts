import { createContext, useContext } from "react";

interface RouterContextValue {
  goToPage: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export const RouterProvider = RouterContext.Provider;

export const useRouter = () => {
  const context = useContext(RouterContext);

  if (context === null)
    throw new Error("Cannot use hook useRouter outside of RouterContext!");

  return context;
};
