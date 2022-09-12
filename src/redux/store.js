import { configureStore } from "@reduxjs/toolkit";
import cardslice from "./todoSlice";

export const store = configureStore({
  reducer: {
    counter: cardslice,
  },
});