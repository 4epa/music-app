import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artist: null,
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtist: (state, action) => {
      state.artist = action.payload;
    },
  },
});

export const { setArtist } = artistSlice.actions;

export default artistSlice.reducer;
