import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang") || null,
};

const langReducer = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setArLang: (state) => {
      state.lang = "ar";
      localStorage.setItem("lang", "ar");
    },
    setEnLang: (state) => {
      state.lang = "en";
      localStorage.setItem("lang", "en");
    },
  },
});

export const { setArLang, setEnLang } = langReducer.actions;

export default langReducer.reducer;
