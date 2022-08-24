import { createSlice } from "@reduxjs/toolkit";
import { audioApi } from "../api/api";

const initialState = {
  playlist: null,
  tracklist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setTracklist: (state, action) => {
      state.tracklist = action.payload;
    },
  },
});

export const { setPlaylist, setTracklist } = playlistSlice.actions;

export const getFilterTracklist = (audioSame, audioMood, audioArtist) => {
  return async (dispatch) => {
    const tracklist = await audioApi.getAudioFiles(audioSame, audioMood, audioArtist);
    dispatch(setTracklist(tracklist));
  };
}

export default playlistSlice.reducer;
