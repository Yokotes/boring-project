import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import api from "./api";

export const store = configureStore({
  reducer: {
    userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
