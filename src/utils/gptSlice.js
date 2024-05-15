import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    TogglesearchChange: false,
  },
  reducers: {
    addToggleSearchange: (state) => {
      state.TogglesearchChange = !state.TogglesearchChange;
    },
  },
});
export const { addToggleSearchange } = gptSlice.actions;
export default gptSlice.reducer;
