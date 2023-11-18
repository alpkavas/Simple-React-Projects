import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const initialState = {
  cartItems: data,
  Quantity: 1,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cartItems = [];
      state.Quantity = 0;
    },
    removeItem: (state, action) => {
      const arrId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== arrId);
    },
    increase: (state, action) => {
      const cardItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quentity++;
    },
    decrease: (state, action) => {
      const cardItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quentity > 1 ? cardItem.quentity-- : (cardItem.quentity = 0);
    },
    calculate: (state) => {
      let total = 0;
      let sumBasket = 0;
      state.cartItems.forEach((item) => {
        total += item.quentity * item.price;
        sumBasket += item.quentity;
      });
      state.Quantity = sumBasket;
      state.total = total;
    },
  },
});
export const { clearCard, removeItem, increase, decrease, calculate } =
  cardSlice.actions;

export default cardSlice.reducer;
