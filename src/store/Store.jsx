import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});
