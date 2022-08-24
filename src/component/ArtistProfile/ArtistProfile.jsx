import style from "./ArtistProfile.module.css";
import SongBox from "../Playlist/SongBox/SongBox";
import { getTracklist } from "../../redux/selectors/playlistSelectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getAudioIsPlay,
  getCurrentAudio,
} from "../../redux/selectors/audioSelectors";
import { useEffect } from "react";
import { getFilterTracklist } from "../../redux/playListReducer";

const ArtistProfile = ({ tracklist, artist }) => {
  const audioIsPlay = useSelector((state) => getAudioIsPlay(state));
  const currentAudio = useSelector((state) => getCurrentAudio(state));

  const artistTracklist = tracklist.map((song) => (
    <SongBox
      key={song.songId}
      audioIsPlay={audioIsPlay}
      currentAudio={currentAudio}
      song={song}
      songs={tracklist}
    />
  ));

  return (
    <div className={style.container}>
      <div className={style.artist_info}>
        <div className={style.ava}>
          <img src={artist.ava} alt="#" />
        </div>
        <div className={style.description}>
          <h2 className={style.name}>{artist.name}</h2>
          <p className={style.p}>{artist.info}</p>
        </div>
      </div>
      <div className={style.trackList}>
        <h3 className={style.trackList_title}>{`All ${artist.name} tracks:`}</h3>
        {artistTracklist}
      </div>
    </div>
  );
};

const ArtistProfileContainer = () => {
  const artist = useSelector((state) => state.artist.artist);
  const tracklist = useSelector((state) => getTracklist(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterTracklist(null, null, artist.name));
  }, [artist]);

  return <ArtistProfile artist={artist} tracklist={tracklist} />;
};

export default ArtistProfileContainer;
