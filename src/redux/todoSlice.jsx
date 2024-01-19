import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, textEdit } = action.payload;
      const todoEdit = state.todos.find((todo) => todo.id === id);
      if (todoEdit) {
        todoEdit.text = textEdit;
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
        
      }
      
    },
  },
});
export const { addTodo, removeTodo, editTodo, markTodoComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
