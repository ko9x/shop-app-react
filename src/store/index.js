import { createStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShown: false,
  items: [],
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
      state.items.push({
        id: Math.random(),
        title: action.payload.title,
        price: Number(action.payload.price),
        quantity: 1,
        total: Number(action.payload.price),
      });
    },
    toggleCart(state) {
      state.isShown = !state.isShown;
    },
    addQuantity(state, action) {
      let newItems = state.items;
      let item = newItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.total = Number(item.price * item.quantity);
      }
      state.items = newItems;
    },
    subtractQuantity(state, action) {
      let newItems = state.items;
      let item = newItems.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        let updatedItems = newItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = updatedItems;
        return;
      }
      if (item) {
        item.quantity--;
        item.total = Number(item.price * item.quantity);
      }
      state.items = newItems;
    },
  },
});

const store = createStore(cartSlice.reducer);

export const cartActions = cartSlice.actions;

export default store;
