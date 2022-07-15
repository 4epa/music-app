import { combineReducers, legacy_createStore as createStore } from "redux";
import audioReducer from './audioReducer'

let reducers = combineReducers({
  audio: audioReducer
})

const store = createStore(reducers)

export default store;