import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = todoSlice.actions;

export default todoSlice.reducer;
