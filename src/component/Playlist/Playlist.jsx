import { connect } from "react-redux/es/exports";
import SongBox from "./SongBox/SongBox";
import { setCurrentAudio, setAudioNumber, setIsPlay } from "../../redux/audioReducer";
import { setCurrentPlaylist } from "../../redux/currentPlaylistReducer";
import style from "./Playlist.module.css";
import { NavLink } from "react-router-dom";



const Playlist = (props) => {

  const songs = props.playlist
    .map(song => <SongBox  
      setAudioNumber={props.setAudioNumber} 
      key={song.songId} 
      audioIsPlay={props.audioIsPlay} 
      currentAudio={props.currentAudio} 
      setIsPlay={props.setIsPlay} 
      setCurrentAudio={props.setCurrentAudio} 
      song={song} 
      playlist={props.playlist}
      setCurrentPlaylist={props.setCurrentPlaylist}
    />)

  return (
    <div>
      <div className={style.playlist_header}>
        <div className={style.playlist_cover}>
          <img src={props.playlistCover} alt="#" />
        </div>
        <div className={style.playlist_description}>
          <h2 className={style.playlist_title}>{props.playlistTitle}</h2>
          <NavLink to='/artist' className={style.playlist_author}>{props.artist}</NavLink>
        </div>
        <img className={style.playlist_bg} src={props.playlistCover} alt="#" />
      </div>
      {songs}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playlistCover: state.playlist.playlistCover,
    playlistTitle: state.playlist.playlistTitle,
    artist: state.playlist.artist,
    audioIsPlay: state.audio.audioIsPlay,
    playlist: state.playlist.songs,
    currentAudio: state.audio.currentAudio,
  }
}

const PlaylistContainer = connect( mapStateToProps, { setCurrentAudio, setIsPlay, setAudioNumber, setCurrentPlaylist } ) (Playlist)

export default PlaylistContainer;