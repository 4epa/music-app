import { connect } from "react-redux/es/exports";
import SongBox from "./SongBox/SongBox";
import { setCurrentAudio, setCurrentPlaylist, setAudioNumber, setIsPlay } from "../../redux/audioReducer";


const Playlist = (props) => {
  const songs = props.playlist.map(song => <SongBox key={song.songId} audioIsPlay={props.audioIsPlay} currentAudio={props.currentAudio} setIsPlay={props.setIsPlay} setCurrentAudio={props.setCurrentAudio} song={song} playlist={props.playlist}/>)

  return <div>{songs}</div>
}

const mapStateToProps = (state) => {
  return {
    audioIsPlay: state.audio.audioIsPlay,
    playlist: state.playlist,
    currentAudio: state.audio.currentAudio,
  }
}

const PlaylistContainer = connect( mapStateToProps, { setCurrentAudio, setIsPlay } ) (Playlist)

export default PlaylistContainer;