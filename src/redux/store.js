import audioReducer from "./audioReducer";
import playlistsReducer from "./playListsReducer";
import currentPlaylistReducer from "./currentPlaylistReducer";
import playListReducer from "./playListReducer";
import artistReducer from "./artistReducer";
import appReducer from "./appReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    audio: audioReducer,
    artist: artistReducer,
    playlists: playlistsReducer,
    playlist: playListReducer,
    currentPlaylist: currentPlaylistReducer,
    appOptions: appReducer
  },
});

export default store;
