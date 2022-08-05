import style from "../Playlists.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { NavLink } from "react-router-dom";

const PlaylistBox = ({playlistCover, playlistId, playlistTitle, artist}) => {
  return (
    <div className={style.playlist_card}>
      <div className={style.card_img}>
        <img src={playlistCover} alt="#" />
      </div>
      <NavLink
        to={`/playlist/${playlistId}`}
        className={style.card_title}
      >
        {playlistTitle}
      </NavLink>
      <h5 className={style.card_artists}>{artist}</h5>
      {/* <button className={style.button_play}>
        <PlayArrowIcon sx={{ color: "#222", fontSize: "40px" }} />
      </button> */}
    </div>
  );
};

export default PlaylistBox;
