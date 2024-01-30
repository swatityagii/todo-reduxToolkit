import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      // localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const { id, textEdit } = action.payload;
      const todoEdit = state.todos.find((todo) => todo.id === id);
      if (todoEdit) {
        todoEdit.text = textEdit;
        // localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    markTodoComplete: (state, action) => {
      const { id } = action.payload;
      const todoToMarkComplete = state.todos.find((todo) => todo.id === id);
      if (todoToMarkComplete) {
        if (todoToMarkComplete.completed) {
          todoToMarkComplete.completed = false;
        } else {
          todoToMarkComplete.completed = true;
        }
        // localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});
export const { addTodo, removeTodo, editTodo, markTodoComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
