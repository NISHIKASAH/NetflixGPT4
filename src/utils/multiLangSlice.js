import { createSlice } from "@reduxjs/toolkit";

const multiLangSlice = createSlice({
  name: "lang",
  initialState: {
    changingLang: "en",
  },
  reducers: {
    addChangeLang: (state, action) => {
      state.changingLang = action.payload;
    },
  },
});

export const { addChangeLang } = multiLangSlice.actions;
export default multiLangSlice.reducer;
