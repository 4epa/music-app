const getPlaylist = (state) => {
  return state.playlist.playlist;
};

const getTracklist = (state) => {
  return state.playlist.tracklist;
};

export { getPlaylist, getTracklist };
