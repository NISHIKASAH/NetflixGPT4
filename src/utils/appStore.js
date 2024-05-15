import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSliceReducer from "./gptSlice";
import multiLangSliceReducer from "./multiLangSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
    gpt: gptSliceReducer,
    lang: multiLangSliceReducer,
  },
});

export default appStore;
