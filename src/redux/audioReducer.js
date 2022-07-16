import song1 from '../assets/musics/clonex_type_beat.mp3';
import song2 from '../assets/musics/glich_core.mp3';
import song3 from '../assets/musics/hyperpop_guitar.mp3';

const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
const SET_NEXT_SONG = 'SET_NEXT_SONG';
const SET_PREV_SONG = 'SET_PREV_SONG';
const SET_VOLUME = 'SET_VOLUME';

export const setVolume = (volume) => {
  return {
    type: SET_VOLUME,
    volume
  }
}

export const setCurrentSong = (song) => {
  return {
    type: SET_CURRENT_SONG,
    song
  }
}

export const setNextSong = (songId) => {
  return {
    type: SET_NEXT_SONG,
    songId
  }
}

export const setPrevSong = (songId) => {
  return {
    type: SET_PREV_SONG,
    songId
  }
}

const currentPlaylist = [
  {
    songId: 1,
    title: 'Порядок',
    author: '4epaaa',
    audioFile: song1,
    cover: 'https://i1.sndcdn.com/artworks-syynnzzv6bzYveme-2fPSGw-t500x500.jpg'
  },
  {
    songId: 2,
    title: 'Нормік',
    author: '4epaaa',
    audioFile: song2,
    cover: 'https://stringfixer.com/files/271008910.jpg'
  },
  {
    songId: 3,
    title: 'Хайпова',
    author: '4epaaa',
    audioFile: song3,
    cover: 'https://i.pinimg.com/736x/8e/a6/ff/8ea6ff2946c1c54245626d2a5032c067.jpg'
  },
]

const initialState = {
  songId: 0,
  currentSong: currentPlaylist[0],
  volume: 0.4,
}



const audioReducer = (state = initialState, action) => {
  let id = action.songId
  switch (action.type) {
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
    case SET_NEXT_SONG:
      ++id
      return {
        ...state,
        songId: id,
        currentSong: currentPlaylist[id]
      }
    case SET_PREV_SONG:
      --id
      return {
        ...state,
        songId: id,
        currentSong: currentPlaylist[id]
      }
    default: 
      return state
  }
}

export default audioReducer;




