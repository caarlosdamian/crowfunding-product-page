import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  menuActive: boolean;
}

const initialState = {
  menuActive: false,
  modal: false,
  modalSucces: false,
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
    },
    toogleModalSuccess:(state)=>{
      state.modalSucces=!state.modalSucces;
    }
  },
});

export const { toggleMenu,toogleFalse ,toogleModal,toogleModalSuccess} = toggleSlice.actions;

export default toggleSlice.reducer;
