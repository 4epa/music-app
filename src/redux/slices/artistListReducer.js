import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artistList: null,
};

const artistListSlice = createSlice({
  name: "artistList",
  initialState,
  reducers: {
    setArtistList: (state, action) => {
      state.artistList = action.payload;
    },
  },
});

export const { setArtistList } = artistListSlice.actions;

export default artistListSlice.reducer;