import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDevice: null,
  showMobileAudioController: false,
  initializeApp: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserDevice: (state, action) => {
      state.userDevice = action.payload;
    },
    setShowMobileAudioController: (state, action) => {
      state.showMobileAudioController = action.payload;
    },
    setInitializeApp: (state, action) => {
      state.initializeApp = action.payload;
    }
  },
});

export const { setUserDevice, setShowMobileAudioController, setInitializeApp } = appSlice.actions;

export default appSlice.reducer;
