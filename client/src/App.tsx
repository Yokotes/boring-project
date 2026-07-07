import { LoginPage } from "@/pages/LoginPage";
import type { Page } from "@/app/types";
import { currentPageSelector } from "@/app/selectors";
import { useSelector } from "react-redux";
import type { JSX } from "react";

const PAGES: Record<Page, JSX.Element> = {
  login: <LoginPage />,
  app: <>App page</>,
};

const App = () => {
  const currentPage = useSelector(currentPageSelector);

  const pageComponent = PAGES[currentPage];

  return <>{pageComponent}</>;
};

export default App;
