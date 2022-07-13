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
    toogleFalse:(state)=>{
      state.menuActive = false;
    }
  },
});

export const { toggleMenu,toogleFalse } = toggleSlice.actions;

export default toggleSlice.reducer;
