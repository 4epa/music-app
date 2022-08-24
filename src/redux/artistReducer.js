import { createSlice } from "@reduxjs/toolkit";
import ava from "../assets/img/artist_ava/fdf.jpg";
import bg from "../assets/img/artist_ava/artist_bg.png";

const initialState = {
  artist: {
    name: "4epaaa",
    artistId: 1,
    ava: ava,
    bg: bg,
    info: "Hello my name 4epaaa<3",
  },
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
