import song1 from "../assets/musics/clonex_type_beat.mp3";
import song2 from "../assets/musics/glich_core.mp3";
import song3 from "../assets/musics/hyperpop_guitar.mp3";
import song4 from "../assets/musics/memphis tipo.wav";
import song5 from "../assets/musics/bandana2.mp3";
import song6 from "../assets/musics/pluggg.mp3";
import song7 from "../assets/musics/bones.mp3";
import song8 from "../assets/musics/grimerives.mp3";
import song9 from "../assets/musics/phonk.mp3";

const initialState = [
  {
    playlistCover:
      "https://i.pinimg.com/736x/14/a1/d6/14a1d63d4c378bea6d32addaceb04765.jpg",
    playlistId: 1,
    playlistTitle: "Hyperpop <3",
    artist: "4epaaa.mp3",
    songs: [
      {
        songId: 1,
        title: "Порядок",
        author: "4epaaa",
        src: song1,
        cover:
          "https://i1.sndcdn.com/artworks-syynnzzv6bzYveme-2fPSGw-t500x500.jpg",
        duration: 109,
        currentTime: 0,
      },
      {
        songId: 2,
        title: "Нормік",
        author: "4epaaa",
        src: song2,
        cover: "https://stringfixer.com/files/271008910.jpg",
        duration: 113,
        currentTime: 0,
      },
      {
        songId: 3,
        title: "Хайпова",
        author: "4epaaa",
        src: song3,
        cover:
          "https://i.pinimg.com/736x/8e/a6/ff/8ea6ff2946c1c54245626d2a5032c067.jpg",
        duration: 120,
        currentTime: 0,
      },
    ],
  },
  {
    playlistCover:
      "https://s.abcnews.com/images/US/Hip-hop-protest-story_hpMain_16x9_992.jpg",
    playlistId: 2,
    playlistTitle: "Hip Hop",
    artist: "4epaaa.mp3",
    songs: [
      {
        songId: 21,
        title: "Норм лупе",
        author: "4epaaa",
        src: song4,
        cover:
          "https://e.snmc.io/i/300/s/37fad48013af8f2ba3fbefc462bd8427/6661612",
        duration: 147,
        currentTime: 0,
      },
      {
        songId: 22,
        title: "Бандана",
        author: "4epaaa",
        src: song5,
        cover: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8f/Bandana_I.jpg/274px-Bandana_I.jpg",
        duration: 77,
        currentTime: 0,
      },
      {
        songId: 23,
        title: "Плуг",
        author: "4epaaa",
        src: song6,
        cover:
          "https://i1.sndcdn.com/artworks-sMyaDCDpYFfVtZD3-VQwysQ-t500x500.jpg",
        duration: 142,
        currentTime: 0,
      },
    ],
  },
  {
    playlistCover:
      "https://ih1.redbubble.net/image.1981437477.2302/st,small,507x507-pad,600x600,f8f8f8.jpg",
    playlistId: 3,
    playlistTitle: "Atmosphere",
    artist: "4epaaa.mp3",
    songs: [
      {
        songId: 31,
        title: "Шеш",
        author: "4epaaa",
        src: song7,
        cover:
          "https://sing-song.ru/images/singers/singer-card/b/bones/bones.jpg",
        duration: 140,
        currentTime: 0,
      },
      {
        songId: 32,
        title: "Луна",
        author: "4epaaa",
        src: song8,
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jeff_Fennell_-_Early_Morning_Moon_%28by%29.jpg/640px-Jeff_Fennell_-_Early_Morning_Moon_%28by%29.jpg",
        duration: 119,
        currentTime: 0,
      },
      {
        songId: 33,
        title: "Агресія",
        author: "4epaaa",
        src: song9,
        cover:
          "https://i1.sndcdn.com/artworks-PoW6aMCxzHrzGUoE-NEryVw-t500x500.jpg",
        duration: 53,
        currentTime: 0,
      },
      
    ],
  },
];

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playlistReducer;
