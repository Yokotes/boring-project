import { createSelector } from "@reduxjs/toolkit";
import type { AppState } from "../store";

export const userSelector = createSelector(
  (state: AppState) => state,
  (state) => state.userReducer.username,
);
