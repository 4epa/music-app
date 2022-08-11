import { useDispatch, useSelector } from "react-redux/es/exports";
import SongBox from "./SongBox/SongBox";
import style from "./Playlist.module.css";
import { NavLink } from "react-router-dom";
import { setPlaylist } from "../../redux/playListReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Playlist = ({playlist}) => {

  const audioIsPlay = useSelector(state => state.audio.audioIsPlay)
  const currentAudio = useSelector(state => state.audio.currentAudio)

  const songs = playlist.songs.map((song) => (
    <SongBox
      key={song.songId}
      audioIsPlay={audioIsPlay}
      currentAudio={currentAudio}
      song={song}
      songs={playlist.songs}
    />
  ));

  return (
    <div className={style.playlist_container}>
      <div className={style.playlist_header}>
        <div className={style.playlist_cover}>
          <img src={playlist.playlistCover} alt="#" />
        </div>
        <div className={style.playlist_description}>
          <h2 className={style.playlist_title}>
            {playlist.playlistTitle}
          </h2>
          <NavLink to="/artist" className={style.playlist_author}>
            {playlist.artist}
          </NavLink>
        </div>
        <img
          className={style.playlist_bg}
          src={playlist.playlistCover}
          alt="#"
        />
      </div>
      {songs}
    </div>
  );
};

const PlaylistContainer = () => {

  const dispatch = useDispatch();

  const playlists = useSelector(state => state.playlists);
  const playlist = useSelector(state => state.playlist.playlist);
  const playlistParams = useParams();

  useEffect(() => {
    dispatch(setPlaylist(
      playlists.find((item) => item.playlistId === +playlistParams.id)
    ));
  }, [playlist]);

  return (
    <div>
      {playlist === null ? <div>Loading</div> : <Playlist playlist={playlist} />}
    </div>
  );
};

export default PlaylistContainer;
