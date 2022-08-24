import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlaylist: null,
};

const currentPlaylistSlice = createSlice({
  name: "currentPlaylist",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload;
    },
  },
});

export const { setCurrentPlaylist } = currentPlaylistSlice.actions;

export default currentPlaylistSlice.reducer;
