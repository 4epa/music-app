import * as React from "react";
import { useEffect, useState } from "react";
import { setIsPlay, setAudioIsEnd } from "../../redux/slices/audioReducer";
import { useDispatch } from "react-redux";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../api/firebase-api";

const Audio = ({
  currentAudio,
  volume,
  audioIsPlay,
  rewindTime,
  setCurrentTime,
}) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  const audio = React.createRef();

  const audioStop = (audio) => {
    audio.pause();
    setTimer(clearInterval(timer));
  };

  const audioPlay = (audio) => {
    audio.play();
    setTimer(setInterval(() => checkTime(audio), 1000));
  };

  const checkTime = (audio) => {
    if (audio.ended) {
      setAudioURL(null);
      dispatch(setIsPlay(false));
      dispatch(setAudioIsEnd(audio.ended));
    } else if (audioIsPlay) {
      setCurrentTime(audio.currentTime);
    }
  };

  useEffect(() => {
    getDownloadURL(ref(storage, currentAudio.audioFile)).then((url) => {
      setAudioURL(url);
      setCurrentTime(0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAudio]);

  useEffect(() => {
    audioIsPlay ? audioPlay(audio.current) : audioStop(audio.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioIsPlay]);

  useEffect(() => {
    audio.current.volume = volume;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  useEffect(() => {
    audio.current.currentTime = rewindTime;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rewindTime]);

  return <audio autoPlay={true} ref={audio} src={audioURL}></audio>;
};

export default Audio;
