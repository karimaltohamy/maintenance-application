import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./reducers/langReducer";

const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});

export default store;
