import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
}

const initialState: UserState = {
  username: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    clearUser: (state) => {
      state.username = null;
    },
  },
});

export default userSlice.reducer;
export const { clearUser, setUser } = userSlice.actions;
