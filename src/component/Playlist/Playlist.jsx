import { connect } from "react-redux/es/exports";
import SongBox from "./SongBox/SongBox";
import { setCurrentAudio, setAudioNumber, setIsPlay } from "../../redux/audioReducer";
import { setCurrentPlaylist } from "../../redux/currentPlaylistReducer";


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

  return <div>{songs}</div>
}

const mapStateToProps = (state) => {
  return {
    audioIsPlay: state.audio.audioIsPlay,
    playlist: state.playlist,
    currentAudio: state.audio.currentAudio,
  }
}

const PlaylistContainer = connect( mapStateToProps, { setCurrentAudio, setIsPlay, setAudioNumber, setCurrentPlaylist } ) (Playlist)

export default PlaylistContainer;