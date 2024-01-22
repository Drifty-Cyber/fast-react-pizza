import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cart: [],

  cart: [
    {
      pizzaId: 22,
      name: 'Vegetable Pizza',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});

export const {} = cartSlice.actions;

export default cartSlice;
