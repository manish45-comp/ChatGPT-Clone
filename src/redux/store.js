import { configureStore } from "@reduxjs/toolkit";
import aiSlice from "./features/generativeAi/aiSlice";

export const store = configureStore({
  reducer: {
    ai: aiSlice,
  },
});
