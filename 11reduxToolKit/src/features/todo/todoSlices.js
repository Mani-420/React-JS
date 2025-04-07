import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state from where it will start
const initialState = {
  todos: [{ id: 1, text: 'Learn Redux' }]
};

// Create a slice of the store
// A slice is a reducer and its actions
// Reducers are functions that take the current state and an action and return a new state and includes properties and functions

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generates a unique id
        text: action.payload.text
      };
      state.todos.push(todo); // Push the new todo to the todos array
    },
    removeTodo: (state, action) => {
      const id = action.payload.id; // Get the id from the action payload
      state.todos = state.todos.filter((todo) => todo.id !== id); // Filter out the todo with the given id
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload; // Get the id and text from the action payload
      const todo = state.todos.find((todo) => todo.id === id); // Find the todo with the given id
      if (todo) {
        todo.text = text; // Update the text of the todo
      }
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // Export the actions

export default todoSlice.reducer; // Export the reducer
// The reducer will be used in the store configuration
// The actions will be used in the components to dispatch actions to the store
