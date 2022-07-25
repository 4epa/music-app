const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST';
const SET_NEXT_SONG = 'SET_NEXT_SONG';
const SET_PREV_SONG = 'SET_PREV_SONG';
const SET_VOLUME = 'SET_VOLUME';
const SET_AUDIO_NUMBER = 'SET_AUDIO_NUMBER';

export const setVolume = (volume) => {
  return {
    type: SET_VOLUME,
    volume
  }
}

export const setAudioNumber = (number) => {
  return {
    type: SET_AUDIO_NUMBER,
    number
  }
}

export const setCurrentSong = (song) => {
  return {
    type: SET_CURRENT_SONG,
    song
  }
}

export const setCurrentPlaylist = (playlist) => {
  debugger
  return {
    type: SET_CURRENT_PLAYLIST,
    playlist
  }
}

export const setNextSong = (audioNumber) => {
  return {
    type: SET_NEXT_SONG,
    audioNumber
  }
}

export const setPrevSong = (audioNumber) => {
  return {
    type: SET_PREV_SONG,
    audioNumber
  }
}

const initialState = {
  currentPlaylist: null,
  audioNumber: null,
  currentSong: null,
  volume: 0.4,
}

const audioReducer = (state = initialState, action) => {
  let id = action.audioNumber
  switch (action.type) {
    case SET_AUDIO_NUMBER:
      return {
        ...state,
        audioNumber: action.number
      }
    case SET_VOLUME:
      return {
        ...state,
        volume: action.volume
      }
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.song
      }
    case SET_CURRENT_PLAYLIST:
      debugger
      return {
        ...state,
        currentPlaylist: action.playlist
      }
    case SET_NEXT_SONG:
      debugger
      ++id
      return {
        ...state,
        audioNumber: id,
        currentSong: state.currentPlaylist[id]
      }
    case SET_PREV_SONG:
      --id
      return {
        ...state,
        audioNumber: id,
        currentSong: state.currentPlaylist[id]
      }
    default: 
      return state
  }
}

export default audioReducer;

