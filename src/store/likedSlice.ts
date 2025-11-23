import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OneSeparateProduct } from "../interfaces/products";

interface LikedState {
  items: OneSeparateProduct[];
}

const loadLikedItems = (): OneSeparateProduct[] => {
  try {
    const serializedState = localStorage.getItem("likedProducts");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const initialState: LikedState = {
  items: loadLikedItems(),
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<OneSeparateProduct>) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex((item) => item.id === product.id);

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(product);
      }

      localStorage.setItem("likedProducts", JSON.stringify(state.items));
    },
  },
});

export const { toggleLike } = likedSlice.actions;
export default likedSlice.reducer;
