import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlices";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
