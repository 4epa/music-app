import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import audioReducer from './audioReducer';
import playlistReducer from './playListReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  audio: audioReducer,
  playlist: playlistReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;