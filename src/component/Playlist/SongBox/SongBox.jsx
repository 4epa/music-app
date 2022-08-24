import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import style from "../Playlist.module.css";
import { useEffect, useState } from "react";
import {
  setCurrentAudio,
  setAudioNumber,
  setIsPlay,
} from "../../../redux/audioReducer";
import { useDispatch } from "react-redux";
import { setCurrentPlaylist } from "../../../redux/currentPlaylistReducer";
import { NavLink } from "react-router-dom";

const SongBox = ({ song, songs, currentAudio, audioIsPlay }) => {
  const [selectAudio, setSelectAudio] = useState({});

  const dispatch = useDispatch()

  useEffect(() => {
    setSelectAudio(currentAudio);
  }, [currentAudio]);

  const selected = () => {
    if (selectAudio === null) return false;
    else if (selectAudio.songId === song.songId) return true;
    return false;
  };

  const checkCurentAudioNumber = () => {
    return songs.findIndex((element, index) => {
      if (element.songId === song.songId) return true;
    });
  };

  const audioNumber = checkCurentAudioNumber();

  function formatDuration(value) {
    const time = Math.ceil(value);
    const minute = Math.floor(time / 60);
    const secondLeft = time - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const setAudio = () => {
    dispatch(setCurrentPlaylist(songs));
    dispatch(setAudioNumber(audioNumber));
    dispatch(setCurrentAudio(song));
    dispatch(setIsPlay(true));
  };

  const controlButtons = () => {
    return audioIsPlay ? (
      <PauseIcon
        onClick={() => dispatch(setIsPlay(false))}
        sx={{ zIndex: 10, fontSize: "25px", cursor: "pointer" }}
      />
    ) : (
      <PlayArrowIcon
        onClick={() => dispatch(setIsPlay(true))}
        sx={{ zIndex: 10, fontSize: "25px", cursor: "pointer" }}
      />
    );
  };

  return (
    <div
      className={
        selected() ? style.song_container_selected : style.song_container
      }
    >
      <div onClick={setAudio} className={style.bg_songBox}></div>
      {selected() ? (
        controlButtons()
      ) : (
        <span className={style.song_number}>{audioNumber + 1}</span>
      )}
      <div className={style.cover}>
        <img src={song.cover} alt="" />
      </div>
      <h3 className={style.song_title}>{song.title}</h3>
      <span className={style.song_author}>
        <NavLink className={style.author_link} to="/artist/1">{song.author}</NavLink></span>
      <span className={style.song_time}>{formatDuration(song.duration)}</span>
    </div>
  );
};

export default SongBox;
