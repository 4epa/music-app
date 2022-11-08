import ShuffleIcon from "@mui/icons-material/Shuffle";
import IconButton from "@mui/material/IconButton";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import Box from "@mui/material/Box";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useEffect } from "react";
import { useState } from "react";
import {
  setCurrentAudio,
  setIsPlay,
  setAudioIsEnd,
} from "../../../redux/slices/audioReducer";
import { useDispatch } from "react-redux";
import { random } from "../../../utils/helpers";
import PlayButton from "../../common/PlayButtons";
import React from "react";

const style = (size, color) => {
  return {
    color: color,
    fontSize: `${size}px`,
    "@media (max-width: 450px)": {
      fontSize: `${size + 15}px`,
    },
  };
};

const RepeatButtonIcon = (loop, repeat) => {
  if (loop) {
    return <RepeatOneIcon sx={style(18, "#c62136")} />;
  } else if (repeat) {
    return <RepeatIcon sx={style(18, "#c62136")} />;
  }
  return <RepeatIcon sx={style(18, "#fff")} />;
};

const ControlButtons = ({
  audioIsEnd,
  currentPlaylist,
  audioIsPlay,
  currentAudio,
}) => {
  const [stir, setStir] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [loop, setLoop] = useState(false);

  const dispatch = useDispatch();

  // if audio is and run this code
  useEffect(() => {
    if (audioIsEnd) {
      if (loop) {
        dispatch(setIsPlay(true));
        dispatch(setAudioIsEnd(false));
      } else {
        switchAudio("next");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioIsEnd]);

  // set random audio file
  const randomAudio = (currentAudioNumber, currentPlaylist) => {
    let audioNumber = random(0, currentPlaylist.length - 1);
    if (audioNumber === currentAudioNumber)
      return randomAudio(currentAudioNumber, currentPlaylist);
    return audioNumber;
  };

  // calculates which action occurred and returns the result a number greater or less by 1
  const nextOrPrevAudio = (audioNumber, action) => {
    switch (action) {
      case "prev":
        --audioNumber;
        break;
      case "next":
        ++audioNumber;
        break;
      default:
        return audioNumber;
    }
    return audioNumber;
  };

  // order function switch audio files
  const switchAudio = (action) => {
    const currentAudioNumber = currentPlaylist.findIndex(
      (audio) => audio.audioId === currentAudio.audioId
    );
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

    dispatch(setIsPlay(true));
    dispatch(setAudioIsEnd(false));

    return dispatch(setCurrentAudio(currentPlaylist[audioNumber]));
  };

  // set stir status
  const setStirStatus = () => {
    if (stir) return setStir(false);
    return setStir(true);
  };

  // set repeat status
  const setRepeatStatus = () => {
    if (loop) {
      setRepeat(false);
      return setLoop(false);
    } else if (repeat) {
      return setLoop(true);
    }
    return setRepeat(true);
  };

  return (
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
          <ShuffleIcon sx={style(18, "#c62136")} />
        ) : (
          <ShuffleIcon sx={style(18, "#fff")} />
        )}
      </IconButton>
      <IconButton
        onClick={() => switchAudio("prev")}
        sx={{ padding: "5px" }}
        aria-label="previous song"
      >
        <FastRewindRounded sx={style(25, "#fff")} />
      </IconButton>
      <PlayButton audioIsPlay={audioIsPlay} style={style(30, "#fff")} />
      <IconButton
        onClick={() => switchAudio("next")}
        sx={{ padding: "5px" }}
        aria-label="next song"
      >
        <FastForwardRounded sx={style(25, "#fff")} />
      </IconButton>
      <IconButton onClick={setRepeatStatus}>
        {RepeatButtonIcon(loop, repeat)}
      </IconButton>
    </Box>
  );
};

export default React.memo(ControlButtons);
