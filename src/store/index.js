import { createStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShown: false,
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      let existingItem = state.items.filter(
        (item) => item.id === action.payload.id
      );
      if (existingItem.length > 0) {
        cartSlice.caseReducers.addQuantity(state, action);
        return;
      }
      state.totalQuantity++;
      state.items.push({
        id: action.payload.id,
        title: action.payload.title,
        price: Number(action.payload.price),
        totalPrice: Number(action.payload.price),
        quantity: 1,
      });
    },
    toggleCart(state) {
      state.isShown = !state.isShown;
    },
    addQuantity(state, action) {
      state.totalQuantity++;
      let item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.totalPrice = Number(item.price * item.quantity);
      }
    },
    subtractQuantity(state, action) {
      state.totalQuantity--;
      let item = state.items.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        return;
      }
      if (item) {
        item.quantity--;
        item.totalPrice = Number(item.price * item.quantity);
      }
    },
  },
});

const store = createStore(cartSlice.reducer);

export const cartActions = cartSlice.actions;

export default store;
