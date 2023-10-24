import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

const setupStore = () => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: loadFromLocalStorage(),
  });

  store.subscribe(() => saveToLocalStorage(store.getState()));

  return store;
};

export { setupStore };
