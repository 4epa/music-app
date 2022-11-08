import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAudio: null,
  audioIsPlay: false,
  audioIsEnd: false,
  volume: 0.75,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setCurrentAudio: (state, action) => {
      state.currentAudio = action.payload;
    },
    setIsPlay: (state, action) => {
      state.audioIsPlay = action.payload;
    },
    setAudioIsEnd: (state, action) => {
      state.audioIsEnd = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const {
  setCurrentAudio,
  setIsPlay,
  setAudioIsEnd,
  setVolume,
} = audioSlice.actions;

export default audioSlice.reducer;
