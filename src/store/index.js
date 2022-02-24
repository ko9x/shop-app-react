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
    },
    addQuantity(state, action) {
      let newItems = state.items;
      let item = newItems.find(item => item.title === action.payload);
      if(item) {
        item.quantity++;
        item.total = Number(item.price * item.quantity);
      };
      state.items = newItems;
    },
    subtractQuantity(state, action) {
      let newItems = state.items;
      let item = newItems.find(item => item.title === action.payload);
      if(item) {
        item.quantity--
        item.total = Number(item.price * item.quantity);
      };
      state.items = newItems;
    },
  },
});


const store = createStore(cartSlice.reducer);

export const cartActions = cartSlice.actions;

export default store
