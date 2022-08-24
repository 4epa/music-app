import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    playlistCover:
      "https://i.pinimg.com/736x/14/a1/d6/14a1d63d4c378bea6d32addaceb04765.jpg",
    playlistId: 1,
    playlistTitle: "Hyperpop <3",
    artist: "4epaaa",
    same:"hyperpop",
    mood: null,
  },
  {
    playlistCover:
      "https://s.abcnews.com/images/US/Hip-hop-protest-story_hpMain_16x9_992.jpg",
    playlistId: 2,
    playlistTitle: "Hip Hop",
    artist: "4epaaa",
    same:"hip hop",
    mood: null,
  },
  {
    playlistCover:
      "https://kartinkin.net/uploads/posts/2021-07/1625796069_26-kartinkin-com-p-krasivie-atmosfernie-oboi-krasivie-28.jpg",
    playlistId: 3,
    playlistTitle: "Atmosphere",
    artist: "4epaaa",
    same: null,
    mood: "atmosphere",
  },
];

const playlistsSlice = createSlice({
  name: "playlists",
  initialState
})

export default playlistsSlice.reducer
