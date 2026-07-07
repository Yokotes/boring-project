import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Page } from "../types";

interface RouterState {
  currentPage: Page;
}

const initialState: RouterState = {
  currentPage: "login",
};

const routerSlice = createSlice({
  name: "routerSlice",
  initialState,
  reducers: {
    setPage(state, { payload }: PayloadAction<Page>) {
      state.currentPage = payload;
    },
  },
});

export default routerSlice.reducer;

export const { setPage } = routerSlice.actions;
