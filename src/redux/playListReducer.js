const SET_PLAYLIST = "SET_PLAYLIST";

export const setPlaylist = (playlist) => {
  return {
    type: SET_PLAYLIST,
    playlist
  }
}

const initialState = {
  playlist: null
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist
      }
    default:
      return state;
  }
};

export default playlistReducer;
