import { audioFiles } from "../assets/localDataBase/localDataBase";

const filterAudioSame = (value, audios) => {
  if (value) return audios.filter((audio) => audio.same === value)
  return audios
}

const filterAudioMood = (value, audios) => {
  if (value) return audios.filter((audio) => audio.mood === value)
  return audios
}

const filterAudioAuthor = (value, audios) => {
  if (value) return audios.filter((audio) => audio.author === value)
  return audios
}


export const audioApi = {
  getAudioFiles: (audioSame, audioMood, audioArtist) => {
    const filtersAudioSame = filterAudioSame(audioSame, audioFiles)
    const filtersAudioMood = filterAudioMood(audioMood, filtersAudioSame)
    const filtersAudioAuthor = filterAudioAuthor(audioArtist, filtersAudioMood)
    return filtersAudioAuthor;
  },
};
