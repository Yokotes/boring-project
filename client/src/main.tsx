import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";
import { RouterProvider } from "@/pages/Router";
import App from "./App.tsx";
import "./main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </StrictMode>,
);
