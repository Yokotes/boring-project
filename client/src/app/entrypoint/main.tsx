import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterRenderer } from "../router";
import { queryClient } from "@/shared/api";
import "../styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterRenderer />
    </QueryClientProvider>
  </StrictMode>,
);
