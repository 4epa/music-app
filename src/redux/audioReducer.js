const SET_CURRENT_AUDIO = 'SET_CURRENT_AUDIO';
const SET_VOLUME = 'SET_VOLUME';
const SET_AUDIO_NUMBER = 'SET_AUDIO_NUMBER';
const SET_IS_PLAY = 'SET_IS_PLAY';
const SET_CURRENT_TIME = 'SET_CURRENT_TIME';

export const setAudioNumber = (number) => {
  return {
    type: SET_AUDIO_NUMBER,
    number
  }
}

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
  audioNumberInPlaylist: null,
}

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VOLUME:
      return {
        ...state,
        volume: action.value
      }
    case SET_AUDIO_NUMBER:
      return {
        ...state,
        audioNumberInPlaylist: action.number
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




