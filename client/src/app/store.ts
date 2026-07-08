import { configureStore } from "@reduxjs/toolkit";
import routerReducer from "./slices/routerSlice";
import userReducer from "./slices/userSlice";
import authApi from "./apis/authApi";

export const store = configureStore({
  reducer: {
    routerReducer,
    userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
