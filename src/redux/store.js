import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import audioReducer from './audioReducer';
import playlistsReducer from './playListsReducer';
import thunkMiddleware from 'redux-thunk'
import currentPlaylistReducer from './currentPlaylistReducer';
import playListReducer from './playListReducer';

let reducers = combineReducers({
  audio: audioReducer,
  playlists: playlistsReducer,
  playlist: playListReducer,
  currentPlaylist: currentPlaylistReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;