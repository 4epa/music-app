const getAudioIsPlay = (state) => {
  return state.audio.audioIsPlay
}

const getAudioIsEnd = (state) => {
  return state.audio.audioIsEnd
}

const getCurrentAudioNumber = (state) => {
  return state.audio.audioNumberInPlaylist
}

const getVolume = (state) => {
  return state.audio.volume
}

const getCurrentPlaylist = (state) => {
  return state.currentPlaylist.currentPlaylist
}

const getRewindTime = (state) => {
  return state.audio.rewindTime
}

const getCurrentAudio = (state) => {
  return state.audio.currentAudio
}

export { getAudioIsPlay, getAudioIsEnd, getCurrentAudioNumber, getVolume, getCurrentPlaylist, getRewindTime, getCurrentAudio };