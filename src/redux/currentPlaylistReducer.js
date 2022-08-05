const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST';

export const setCurrentPlaylist = (playlist) => {
  return {
    type: SET_CURRENT_PLAYLIST,
    playlist
  }
}

const initialState = {
  currentPlaylist: null,
}

const currentPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PLAYLIST:
      return {
        ...state,
        currentPlaylist: action.playlist
      }
    default: 
      return state
  }
}

export default currentPlaylistReducer;