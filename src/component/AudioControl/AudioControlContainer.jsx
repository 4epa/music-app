import * as React from 'react';
import { connect } from 'react-redux/es/exports';
import { setAudioNumber, setCurrentAudio, setVolume, setIsPlay, setCurrentTime } from '../../redux/audioReducer';
import AudioControl from './AudioControl';

const AudioContainer = (props) => {
  return ( 
    <div>
      {
        props.currentAudio !== null
        ? <AudioControl {...props} />
        : <span></span>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    audioIsPlay: state.audio.audioIsPlay,
    currentAudio: state.audio.currentAudio,
    volume: state.audio.volume,
    currentAudioNumber: state.audio.audioNumberInPlaylist,
    currentPlaylist: state.currentPlaylist.currentPlaylist,
  }
}

const AudioControlContainer = connect(mapStateToProps, { setAudioNumber, setIsPlay, setCurrentTime, setVolume, setCurrentAudio }) (AudioContainer)

export default AudioControlContainer;

// audio.duration NAN 
