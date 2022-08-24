import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAudio: null,
  audioIsPlay: false,
  audioIsEnd: false,
  rewindTime: null,
  volume: 0.2,
  audioNumberInPlaylist: null,
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
    setRewindTime: (state, action) => {
      state.rewindTime = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setAudioNumber: (state, action) => {
      state.audioNumberInPlaylist = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentAudio.currentTime = action.payload;
    },
  },
});

export const {
  setCurrentAudio,
  setIsPlay,
  setAudioIsEnd,
  setRewindTime,
  setVolume,
  setAudioNumber,
  setCurrentTime,
} = audioSlice.actions;

export default audioSlice.reducer;
