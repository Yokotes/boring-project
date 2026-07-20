import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authApi from "./apis/authApi";

export const store = configureStore({
  reducer: {
    userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
