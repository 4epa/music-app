import * as React from 'react';
import { useSelector } from 'react-redux';
import AudioControl from './AudioControl';
import { getCurrentAudio } from '../../redux/selectors/audioSelectors';

const AudioControlContainer = (props) => {

  const currentAudio = useSelector(state => getCurrentAudio(state));

  return ( 
    <div style={{height: "100%"}}>
      {
        currentAudio !== null
        ? <AudioControl currentAudio={currentAudio} />
        : <span></span>
      }
    </div>
  )
}

export default AudioControlContainer;

// audio.duration NAN 
