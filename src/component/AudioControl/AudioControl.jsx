import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import style from "./AudioContol.module.css";
import AudioInfo from "./AudioInfo/AudioInfo";
import CurrentPlaylist from "./CurrentPlaylist/CurrentPlaylist";
import VolumeControl from "./VolumeControl/VolumeControl";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setAudioNumber, setCurrentAudio, setVolume, setIsPlay, setCurrentTime } from '../../redux/audioReducer';

const TinyText = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  opacity: 0.6,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const AudioControl = ({currentAudio}) => {
  const audioIsPlay = useSelector(state => state.audio.audioIsPlay);
  const currentAudioNumber = useSelector(state => state.audio.audioNumberInPlaylist);
  const volume = useSelector(state => state.audio.volume);
  const currentPlaylist = useSelector(state => state.currentPlaylist.currentPlaylist);

  const dispatch = useDispatch()


  const [timer, setTimer] = useState(null);
  const [audioIsEnded, setAudioIsEndet] = useState(false)

  const audio = React.createRef();

  const checkTime = (audio) => {
    if (audio.ended) {
      dispatch(setIsPlay(false));
      setAudioIsEndet(audio.ended)
      return dispatch(setCurrentTime(0));
    }
    return dispatch(setCurrentTime(audio.currentTime));
  };

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

  useEffect(() => {
    (audioIsPlay) 
    ? audioPlay(audio.current)
    : audioStop(audio.current)
  }, [audioIsPlay]);

  useEffect(() => {
    audio.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioIsEnded) nextOrPrevAudio(currentPlaylist, currentAudioNumber, "next")
  }, [audioIsEnded])

  const nextOrPrevAudio = (currentPlaylit, currentAudioNumber, action) => {
    switch (action) {
      case "prev":
        --currentAudioNumber;
        break;
      case "next":
        ++currentAudioNumber;
        break;
    }

    if (currentAudioNumber < 0 || currentAudioNumber >= currentPlaylit.length)
      return setAudioIsEndet(false);;

      dispatch(setAudioNumber(currentAudioNumber));
      dispatch(setCurrentTime(0));
      dispatch(setIsPlay(true));
    setAudioIsEndet(false);

    return dispatch(setCurrentAudio(currentPlaylit[currentAudioNumber]));
  };

  function formatDuration(value) {
    const time = Math.ceil(value);
    const minute = Math.floor(time / 60);
    const secondLeft = time - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handleChange = (event, value) => {
    let audioFile = audio.current;
    dispatch(setCurrentTime(value));
    audioFile.currentTime = value;
  };

  return (
    <div className="control_panel">
      <div className={style.control_container}>
        <AudioInfo
          cover={currentAudio.cover}
          title={currentAudio.title}
          author={currentAudio.author}
        />
        <div className={style.audio_control}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 0,
            }}
          >
            <IconButton
              onClick={() => nextOrPrevAudio(
                currentPlaylist,
                currentAudioNumber,
                "prev"
              )}
              sx={{ padding: "5px" }}
              aria-label="previous song"
            >
              <FastRewindRounded sx={{ fontSize: "25px", color: "#fff" }} />
            </IconButton>
            {!audioIsPlay ? (
              <IconButton
                onClick={() => dispatch(setIsPlay(true))}
                sx={{ padding: "5px" }}
              >
                <PlayArrowRounded sx={{ fontSize: "30px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => dispatch(setIsPlay(false))}
                sx={{ padding: "5px" }}
              >
                <PauseRounded sx={{ fontSize: "30px", color: "#fff" }} />
              </IconButton>
            )}
            <IconButton
              onClick={() => nextOrPrevAudio(
                currentPlaylist,
                currentAudioNumber,
                "next"
              )}
              sx={{ padding: "5px" }}
              aria-label="next song"
            >
              <FastForwardRounded sx={{ fontSize: "25px", color: "#fff" }} />
            </IconButton>
          </Box>
          <Box sx={{ width: "500px", color: "#fff" }}>
            <Slider
              onChange={handleChange}
              aria-label="time-indicator"
              size="small"
              value={currentAudio.currentTime}
              min={0}
              step={1}
              max={currentAudio.duration}
              sx={{
                padding: "0px 0px",
                color: "#fff",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 4,
                  height: 4,
                  "&:before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 0px ${"rgb(255 255 255 / 16%)"}`,
                    width: 6,
                    height: 6,
                  },
                  "&.Mui-active": {
                    width: 10,
                    height: 10,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
          </Box>
          <div className={style.timer_container}>
            <TinyText>
              {formatDuration(currentAudio.currentTime)}
            </TinyText>
            <TinyText>{formatDuration(currentAudio.duration)}</TinyText>
          </div>
        </div>
        <div className={style.right__controle_containe}>
          <VolumeControl volume={volume} setVolume={setVolume} />
          <CurrentPlaylist />
        </div>
      </div>
      <audio autoPlay={true} ref={audio} src={currentAudio.src}></audio>
    </div>
  );
};

export default AudioControl;

// audio.duration NAN
//<audio muted={true} autoPlay ref={audio} src={audioFile}></audio>
