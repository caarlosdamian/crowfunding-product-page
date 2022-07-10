import { createSlice } from "@reduxjs/toolkit";
import { ISubscription } from "../../interfaces";

const initialState: ISubscription[] = [
  {
    id: 1,
    pledge: 25,
    title: "Pledge with no reward",
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    quantity: 101,
    disable: false,
    buttonLabel: "Select Reward",
    principal: false,
  },
  {
    id: 2,
    pledge: 25,
    title: "Bamboo Stand",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    quantity: 101,
    disable: false,
    buttonLabel: "Select Reward",
    principal: true,
  },
  {
    id: 3,
    pledge: 75,
    title: "Black Edition Stand",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quantity: 64,
    disable: false,
    buttonLabel: "Select Reward",
    principal: true,
  },
  {
    id: 4,
    pledge: 200,
    title: "Mahogany Special Edition",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.",
    quantity: 0,
    disable: true,
    buttonLabel: "Select Reward",
    principal: true,
  },
];

const subcriptionSlice = createSlice({
  name: "subcription",
  initialState,
  reducers: {
    decrease(state, action) {
      const { id } = action.payload;
      const subcription = state.find((subcription) => subcription.id === id);
      if (subcription) {
        subcription.quantity -= 1;
      }
    },
  },
});

export const { decrease } = subcriptionSlice.actions;
export default subcriptionSlice.reducer;
