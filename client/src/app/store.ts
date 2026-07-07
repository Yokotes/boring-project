import { configureStore } from "@reduxjs/toolkit";
import routerReducer from "./slices/routerSlice";

export const store = configureStore({
  reducer: {
    routerReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
