import { connect } from "react-redux/es/exports";
import SongBox from "./SongBox/SongBox";
import {
  setCurrentAudio,
  setCurrentAudioFile,
  setAudioNumber,
  setIsPlay,
} from "../../redux/audioReducer";
import { setCurrentPlaylist } from "../../redux/currentPlaylistReducer";
import style from "./Playlist.module.css";
import { NavLink } from "react-router-dom";
import { setPlaylist } from "../../redux/playListReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Playlist = (props) => {
  
  const songs = props.playlist.songs.map((song) => (
    <SongBox
      setAudioNumber={props.setAudioNumber}
      key={song.songId}
      audioIsPlay={props.audioIsPlay}
      currentAudio={props.currentAudio}
      setIsPlay={props.setIsPlay}
      setCurrentAudio={props.setCurrentAudio}
      song={song}
      songs={props.playlist.songs}
      setCurrentPlaylist={props.setCurrentPlaylist}
    />
  ));

  return (
    <div className={style.playlist_container}>
      <div className={style.playlist_header}>
        <div className={style.playlist_cover}>
          <img src={props.playlist.playlistCover} alt="#" />
        </div>
        <div className={style.playlist_description}>
          <h2 className={style.playlist_title}>
            {props.playlist.playlistTitle}
          </h2>
          <NavLink to="/artist" className={style.playlist_author}>
            {props.playlist.artist}
          </NavLink>
        </div>
        <img
          className={style.playlist_bg}
          src={props.playlist.playlistCover}
          alt="#"
        />
      </div>
      {songs}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
    audioIsPlay: state.audio.audioIsPlay,
    playlist: state.playlist.playlist,
    currentAudio: state.audio.currentAudio,
  };
};

const PlaylistContainer = (props) => {

  const playlistParams = useParams();

  useEffect(() => {
    props.setPlaylist(
      props.playlists.find((item) => item.playlistId === +playlistParams.id)
    );
  }, [props.playlist]);

  return (
    <div>
      {props.playlist === null ? <div>Loading</div> : <Playlist {...props} />}
    </div>
  );
};

export default connect(mapStateToProps, {
  setPlaylist,
  setCurrentAudio,
  setIsPlay,
  setAudioNumber,
  setCurrentPlaylist,
})(PlaylistContainer);
