import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDevice: null,
  showMobileAudioControler: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserDevice: (state, action) => {
      state.userDevice = action.payload;
    },
    setShowMobileAudioControler: (state, action) => {
      state.showMobileAudioControler = action.payload;
    },
  },
});

export const { setUserDevice, setShowMobileAudioControler } = appSlice.actions;

export default appSlice.reducer;
