import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => 
          item.id === action.payload.id && 
          item.size === action.payload.size && 
          item.color === action.payload.color
      );
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; size: string; color: string; quantity: number }>) => {
      const { id, size, color, quantity } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.size === size && item.color === color
      );
      
      if (item) {
        item.quantity = quantity;
      }
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string; size: string; color: string }>) => {
      const { id, size, color } = action.payload;
      state.items = state.items.filter(
        item => !(item.id === id && item.size === size && item.color === color)
      );
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
