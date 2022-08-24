import style from "./ArtistBox.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { getArtist } from "../../../redux/selectors/artistSelector";

const ArtistBox = (props) => {
  const artist = useSelector((state) => getArtist(state));
  return (
    <div className={style.artist}>
      <NavLink to={`artist/${artist.artistId}`}>
        <div className={style.artist_container}>
          <div className={style.artist_ava}>
            <img src={artist.ava} alt="" />
          </div>
          <div className={style.artist_description}>
            <h2 className={style.title}>Recommendation</h2>
            <h3 className={style.artist_name}>{artist.name}</h3>
            <p className={style.artist_info}>{artist.info}</p>
            <p className={style.artist_info}>Listening my new track!</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ArtistBox;
