import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  menuActive: boolean;
}

const initialState = {
  menuActive: false,
};
export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuActive = !state.menuActive;
    },
  },
});

export const { toggleMenu } = toggleSlice.actions;

export default toggleSlice.reducer;
