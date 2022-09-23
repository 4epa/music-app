import style from "./PlaylistBox.module.css";
import { NavLink } from "react-router-dom";

const PlaylistBox = ({ playlistCover, playlistId, playlistTitle, artist }) => {
  return (
    <NavLink to={`/playlist/${playlistId}`} >
      <div className={style.playlist_card}>
        <div className={style.card_img}>
          <img src={playlistCover} alt="#" />
        </div>
        <div className={style.card_title}>
          {playlistTitle}
        </div>
      </div>
    </NavLink>
  );
};

export default PlaylistBox;
