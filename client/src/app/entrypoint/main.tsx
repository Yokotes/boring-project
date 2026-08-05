import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { store } from "@/app/store.ts";
// import { RouterProvider } from "@/pages/Router";
// import App from "../../old/App.tsx";
import "../styles/main.scss";
import { RouterRenderer } from "../router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterRenderer />
  </StrictMode>,
);
