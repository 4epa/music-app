import song1 from '../assets/musics/clonex_type_beat.mp3';
import song2 from '../assets/musics/glich_core.mp3';
import song3 from '../assets/musics/hyperpop_guitar.mp3';

const initialState = {
  playlistCover: "https://i.pinimg.com/736x/14/a1/d6/14a1d63d4c378bea6d32addaceb04765.jpg",
  playlistId: 1,
  playlistTitle: 'Hyperpop <3',
  artist: '4epaaa.mp3',
  songs: [
    {
      songId: 1,
      title: 'Порядок',
      author: '4epaaa',
      src: song1,
      cover: 'https://i1.sndcdn.com/artworks-syynnzzv6bzYveme-2fPSGw-t500x500.jpg',
      duration: 109,
      currentTime: 0,
    },
    {
      songId: 2,
      title: 'Нормік',
      author: '4epaaa',
      src: song2,
      cover: 'https://stringfixer.com/files/271008910.jpg',
      duration: 113,
      currentTime: 0,
    },
    {
      songId: 3,
      title: 'Хайпова',
      author: '4epaaa',
      src: song3,
      cover: 'https://i.pinimg.com/736x/8e/a6/ff/8ea6ff2946c1c54245626d2a5032c067.jpg',
      duration: 120,
      currentTime: 0,
    },
  ]
}
  


const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}

export default playlistReducer;

