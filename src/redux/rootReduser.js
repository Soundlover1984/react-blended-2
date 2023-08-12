import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "./todoSlice";

export default configureStore({
  reducer: {
    todo: todosReduser,
  },
});
