import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OneSeparateProduct } from "../interfaces/products";

export interface BasketItem extends OneSeparateProduct {
  amount: number;
}

interface BasketState {
  items: BasketItem[];
}

const loadBasketItems = (): BasketItem[] => {
  try {
    const serializedState = localStorage.getItem("basketItems");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const initialState: BasketState = {
  items: loadBasketItems(),
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<OneSeparateProduct>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...product, amount: 1 });
      }

      localStorage.setItem("basketItems", JSON.stringify(state.items));
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("basketItems", JSON.stringify(state.items));
    },
    updateAmount: (
      state,
      action: PayloadAction<{ id: string; delta: number }>
    ) => {
      const { id, delta } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount = Math.max(1, item.amount + delta);
        localStorage.setItem("basketItems", JSON.stringify(state.items));
      }
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.removeItem("basketItems");
    },
  },
});

export const { addToBasket, removeFromBasket, updateAmount, clearBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
