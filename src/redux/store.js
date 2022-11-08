import audioReducer from "./slices/audioReducer";
import playlistListReducer from "./slices/playlistListReducer";
import currentPlaylistReducer from "./slices/currentPlaylistReducer";
import playListReducer from "./slices/playlistReducer";
import artistReducer from "./slices/artistReducer";
import appReducer from "./slices/appReducer";
import authorizationReducer from "./slices/authorizationReducer";
import artistListReducer from "./slices/artistListReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    audio: audioReducer,
    artistList: artistListReducer,
    artist: artistReducer,
    playlistList: playlistListReducer,
    playlist: playListReducer,
    currentPlaylist: currentPlaylistReducer,
    appOptions: appReducer,
    authorization: authorizationReducer
  },
});

export default store;
