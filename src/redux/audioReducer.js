import { display } from '@mui/system';
import { type } from '@testing-library/user-event/dist/type';
import song1 from '../assets/musics/clonex_type_beat.mp3';

const SET_CURRENT_AUDIO = 'SET_CURRENT_AUDIO';
const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST';
const SET_NEXT_SONG = 'SET_NEXT_SONG';
const SET_PREV_SONG = 'SET_PREV_SONG';
const SET_VOLUME = 'SET_VOLUME';
const SET_AUDIO_NUMBER = 'SET_AUDIO_NUMBER';
const SET_AUDIO = 'SET_AUDIO';
const SET_IS_PLAY = 'SET_IS_PLAY';
const SET_CURRENT_TIME = 'SET_CURRENT_TIME';

export const setVolume = (value) => {
  return {
    type: SET_VOLUME,
    value
  }
}

export const setCurrentTime = (time) => {
  return {
    type: SET_CURRENT_TIME,
    time
  }
}

export const setIsPlay = (status) => {
  return {
    type: SET_IS_PLAY,
    status
  }
}

export const setCurrentAudio = (audio) => {
  return {
    type: SET_CURRENT_AUDIO,
    audio
  }
}

const initialState = {
  currentAudio: null,
  audioIsPlay: false,
  volume: 0.2,
}

console.log(initialState.audioFile)

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VOLUME:
      return {
        ...state,
        volume: action.value
      }
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentAudio: {
          ...state.currentAudio,
          currentTime: action.time
        }
      }
    case SET_IS_PLAY:
      return {
        ...state,
        audioIsPlay: action.status,
      }
    case SET_CURRENT_AUDIO:
      return {
        ...state,
        currentAudio: action.audio
      }
    default: 
      return state
  }
}

export default audioReducer;




