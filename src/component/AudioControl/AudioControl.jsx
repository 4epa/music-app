import * as React from "react";
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
import {
  setAudioNumber,
  setCurrentAudio,
  setVolume,
  setIsPlay,
  setCurrentTime,
  setAudioIsEnd,
  setRewindTime,
} from "../../redux/audioReducer";
import Audio from "../Audio/Audio";
import { useEffect } from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useState } from "react";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import { formatDuration, random } from "../../utils/helpers";
import {
  getAudioIsPlay,
  getAudioIsEnd,
  getCurrentAudioNumber,
  getVolume,
  getCurrentPlaylist,
  getRewindTime,
} from "../../redux/selectors/audioSelectors";

const TinyText = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  opacity: 0.6,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const nextOrPrevAudio = (audioNumber, action) => {
  switch (action) {
    case "prev":
      --audioNumber;
      break;
    case "next":
      ++audioNumber;
      break;
  }
  return audioNumber;
};

const RepeatButtonIcon = (loop, repeat) => {
  if (loop) {
    return (
      <RepeatOneIcon sx={{ color: "#fff", fontSize: "18px", opacity: "0.5" }} />
    );
  } else if (repeat) {
    return (
      <RepeatIcon sx={{ color: "#fff", fontSize: "18px", opacity: "0.5" }} />
    );
  }
  return <RepeatIcon sx={{ color: "#fff", fontSize: "18px" }} />;
};

const AudioControl = ({ currentAudio }) => {
  const audioIsPlay = useSelector((state) => getAudioIsPlay(state));
  const audioIsEnd = useSelector((state) => getAudioIsEnd(state));
  const currentAudioNumber = useSelector((state) =>
    getCurrentAudioNumber(state)
  );
  const volume = useSelector((state) => getVolume(state));
  const currentPlaylist = useSelector((state) => getCurrentPlaylist(state));
  const rewindTime = useSelector((state) => getRewindTime(state));

  const [stir, setStir] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [loop, setLoop] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (audioIsEnd) {
      if (loop) {
        dispatch(setCurrentTime(0));
        dispatch(setIsPlay(true));
        dispatch(setAudioIsEnd(false));
      } else {
        switchAudio(currentPlaylist, currentAudioNumber, "next");
      }
    }
  }, [audioIsEnd]);

  const randomAudio = (currentAudioNumber, currentPlaylist) => {
    let audioNumber = random(0, currentPlaylist.length - 1);
    if (audioNumber === currentAudioNumber)
      return randomAudio(currentAudioNumber, currentPlaylist);
    return audioNumber;
  };

  const switchAudio = (currentPlaylist, currentAudioNumber, action) => {

    let audioNumber = currentAudioNumber;

    if (stir) {
      audioNumber = randomAudio(currentAudioNumber, currentPlaylist);
    } else {
      audioNumber = nextOrPrevAudio(currentAudioNumber, action);
    }

    if (audioNumber < 0 || audioNumber >= currentPlaylist.length) {
      if (repeat) {
        if (currentAudioNumber < 0) {
          audioNumber = currentPlaylist.length - 1;
        } else {
          audioNumber = 0;
        }
      } else {
        return dispatch(setAudioIsEnd(false));
      }
    }

    dispatch(setAudioNumber(audioNumber));
    dispatch(setCurrentTime(0));
    dispatch(setIsPlay(true));
    dispatch(setAudioIsEnd(false));

    return dispatch(setCurrentAudio(currentPlaylist[audioNumber]));
  };

  const setStirStatus = () => {
    if (stir) return setStir(false);
    return setStir(true);
  };

  const setRepeatStatus = () => {
    if (loop) {
      setRepeat(false);
      return setLoop(false);
    } else if (repeat) {
      return setLoop(true);
    }
    return setRepeat(true);
  };

  const handleChange = (event, value) => {
    dispatch(setCurrentTime(value));
    dispatch(setRewindTime(value));
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
            <IconButton onClick={setStirStatus}>
              {stir ? (
                <ShuffleIcon
                  sx={{ color: "#fff", fontSize: "18px", opacity: "0.5" }}
                />
              ) : (
                <ShuffleIcon sx={{ color: "#fff", fontSize: "18px" }} />
              )}
            </IconButton>
            <IconButton
              onClick={() =>
                switchAudio(currentPlaylist, currentAudioNumber, "prev")
              }
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
              onClick={() =>
                switchAudio(currentPlaylist, currentAudioNumber, "next")
              }
              sx={{ padding: "5px" }}
              aria-label="next song"
            >
              <FastForwardRounded sx={{ fontSize: "25px", color: "#fff" }} />
            </IconButton>
            <IconButton onClick={setRepeatStatus}>
              {RepeatButtonIcon(loop, repeat)}
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
            <TinyText>{formatDuration(currentAudio.currentTime)}</TinyText>
            <TinyText>{formatDuration(currentAudio.duration)}</TinyText>
          </div>
        </div>
        <div className={style.right__controle_containe}>
          <VolumeControl volume={volume} setVolume={setVolume} />
          <CurrentPlaylist />
        </div>
      </div>
      <Audio
        currentAudio={currentAudio}
        volume={volume}
        audioIsPlay={audioIsPlay}
        rewindTime={rewindTime}
      />
    </div>
  );
};

export default AudioControl;
