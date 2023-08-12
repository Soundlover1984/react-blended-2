import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.value = [...state.value, payload];
    },
    deleteTodo: (state, { payload }) => {
      state.value = state.value.filter(({ id }) => id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
