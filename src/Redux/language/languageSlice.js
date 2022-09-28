const { createSlice } = require("@reduxjs/toolkit");


// import { loginData } from "";
// import { SidebarData } from "";
// import {othersData  } from "";

const data = {
    uz: {
    //   loginData: loginData.uz,
    //   sidebar: SidebarData.uz,
    //   others: othersData.uz,
    },
    ru: {
    //   loginData: loginData.ru,
    //   sidebar: SidebarData.ru,
    //   others: othersData.ru,
    },
    en: {
    //   loginData: loginData.en,
    //   sidebar: SidebarData.en,
    },
  };


const initialState = {
  name: "language",
  languageData: data.uz,
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.languageData = data[action.payload];
    },
  },
});

export default languageSlice.reducer;

export const { setLanguage } = languageSlice.actions;

