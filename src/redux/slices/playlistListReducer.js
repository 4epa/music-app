import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlistList: null,
};

const playlistListSlice = createSlice({
  name: "playlistsList",
  initialState,
  reducers: {
    setPlaylistList: (state, action) => {
      state.playlistList = action.payload;
    },
  },
});

export const { setPlaylistList } = playlistListSlice.actions;

export default playlistListSlice.reducer;
