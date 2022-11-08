const getPlaylist = (state) => {
  return state.playlist.playlist;
};

const getTrackList = (state) => {
  return state.playlist.tracklist;
};

export { getPlaylist, getTrackList };
