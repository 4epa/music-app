const selectAudioIsPlay = (state) => {
  return state.audio.audioIsPlay
}

const selectAudioIsEnd = (state) => {
  return state.audio.audioIsEnd
}

const selectVolume = (state) => {
  return state.audio.volume
}

const selectCurrentPlaylist = (state) => {
  return state.currentPlaylist.currentPlaylist
}

const selectCurrentAudio = (state) => {
  return state.audio.currentAudio
}

export { selectAudioIsPlay, selectAudioIsEnd, selectVolume, selectCurrentPlaylist, selectCurrentAudio };