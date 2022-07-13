import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  menuActive: boolean;
}

const initialState = {
  menuActive: false,
  modal: false,
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
    },
    toogleModal:(state)=>{
      state.modal = !state.modal;
    }
  },
});

export const { toggleMenu,toogleFalse ,toogleModal} = toggleSlice.actions;

export default toggleSlice.reducer;
