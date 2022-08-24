import { useDispatch, useSelector } from "react-redux/es/exports";
import SongBox from "./SongBox/SongBox";
import style from "./Playlist.module.css";
import { NavLink } from "react-router-dom";
import { setPlaylist } from "../../redux/playListReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getTracklist,
  getPlaylist,
} from "../../redux/selectors/playlistSelectors";
import { getPlaylists } from "../../redux/selectors/playlistsSelectors";
import { getFilterTracklist } from "../../redux/playListReducer";

const Playlist = ({ playlist }) => {
  const dispatch = useDispatch();

  const tracklist = useSelector((state) => getTracklist(state))
  const audioIsPlay = useSelector((state) => state.audio.audioIsPlay);
  const currentAudio = useSelector((state) => state.audio.currentAudio);

  useEffect(() => {
    dispatch(getFilterTracklist(playlist.same, playlist.mood, playlist.artist));
  }, [playlist.same])

  const songs = tracklist.map((song) => (
    <SongBox
      key={song.songId}
      audioIsPlay={audioIsPlay}
      currentAudio={currentAudio}
      song={song}
      songs={tracklist}
    />
  ));

  return (
    <div className={style.playlist_container}>
      <div className={style.playlist_header}>
        <div className={style.playlist_cover}>
          <img src={playlist.playlistCover} alt="#" />
        </div>
        <div className={style.playlist_description}>
          <h2 className={style.playlist_title}>{playlist.playlistTitle}</h2>
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

  const playlists = useSelector((state) => getPlaylists(state));
  const playlist = useSelector((state) => getPlaylist(state));
  const playlistParams = useParams();

  useEffect(() => {
    dispatch(
      setPlaylist(
        playlists.find((item) => item.playlistId === +playlistParams.id)
      )
    );
  }, [playlist]);

  return (
    <div>
      {playlist === null ? (
        <div>Loading</div>
      ) : (
        <Playlist playlist={playlist} />
      )}
    </div>
  );
};

export default PlaylistContainer;
