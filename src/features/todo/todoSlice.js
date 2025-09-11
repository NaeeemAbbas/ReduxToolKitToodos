import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Check 1" }],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
});
