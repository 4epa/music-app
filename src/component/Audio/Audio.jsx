import * as React from "react";
import { useEffect, useState } from "react";
import {
  setIsPlay,
  setCurrentTime,
  setAudioIsEnd
} from "../../redux/audioReducer";
import { useDispatch } from "react-redux";


const Audio = ({currentAudio, volume, audioIsPlay, rewindTime}) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);

  const audio = React.createRef();

  const audioStop = (audio) => {
    audio.pause();
    setTimer(clearInterval(timer));
  };

  const audioPlay = (audio) => {
    audio.play();
    setTimer(
      setInterval(() => checkTime(audio), 1000)
    );
  };

  const checkTime = (audio) => {
    if (audio.ended) {
      dispatch(setIsPlay(false));
      dispatch(setAudioIsEnd(audio.ended));
      return dispatch(setCurrentTime(0));
    }
    return dispatch(setCurrentTime(audio.currentTime));
  };

  useEffect(() => {
    (audioIsPlay) 
    ? audioPlay(audio.current)
    : audioStop(audio.current)
  }, [audioIsPlay]);

  useEffect(() => {
    audio.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audio.current.currentTime = rewindTime;
  }, [rewindTime])

  return <audio autoPlay={true} ref={audio} src={currentAudio.src}></audio>
}

export default Audio;