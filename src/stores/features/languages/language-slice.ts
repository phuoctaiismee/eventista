import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  lang: "VN",
};

export const LanguagesSlice = createSlice({
  name: "languagesSlice",
  initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {setLanguages} = LanguagesSlice.actions;

export default LanguagesSlice.reducer;
