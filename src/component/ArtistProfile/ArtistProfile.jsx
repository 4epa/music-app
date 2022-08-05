import style from "./ArtistProfile.module.css";
import SongBox from "../Playlist/SongBox/SongBox";

const ArtistProfile = (props) => {

  const artistTracklist = {}

  return (
    <div className={style.container}>
      <div className={style.artist_info}>
        <div className={style.ava}>
          <img src="#" alt="#" />
        </div>
        <h2 className={style.name}></h2>
        <div className={style.bg}>
          <img src="#" alt="#" />
        </div>
      </div>
      <div className={style.trackList}>

      </div>
    </div>
  );
};
