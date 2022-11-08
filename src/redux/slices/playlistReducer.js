import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: null,
  tracklist: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setTrackList: (state, action) => {
      state.tracklist = action.payload;
    },
  },
});

export const { setPlaylist, setTrackList } = playlistSlice.actions;

export default playlistSlice.reducer;
