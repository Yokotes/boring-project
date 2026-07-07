import { createSelector } from "@reduxjs/toolkit";
import type { AppState } from "../store";

export const currentPageSelector = createSelector(
  (state: AppState) => state,
  (state) => state.routerReducer.currentPage,
);
