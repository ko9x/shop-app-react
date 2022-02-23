import { createStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShown: false,
  items: [{ title: "Test Item", price: 6.00, quantity: 3, total: 18 },{ title: "Test Item", price: 6.00, quantity: 3, total: 18 }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.item);
    },
    toggleCart(state) {
       state.isShown = !state.isShown
    }
  },
});


const store = createStore(cartSlice.reducer);

export const cartActions = cartSlice.actions;

export default store
