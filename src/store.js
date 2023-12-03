import { configureStore } from "@reduxjs/toolkit";
import slice from "./slices/slice";

export const store = configureStore({
  reducer: {
   slice: slice,
  },
});
