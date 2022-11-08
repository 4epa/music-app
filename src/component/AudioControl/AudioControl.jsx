import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import AudioInfo from "./AudioInfo/AudioInfo";
import CurrentPlaylist from "./CurrentPlaylist/CurrentPlaylist";
import VolumeControl from "./VolumeControl/VolumeControl";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  setVolume,
} from "../../redux/slices/audioReducer";
import Audio from "../Audio/Audio";
import { formatDuration } from "../../utils/helpers";
import {
  selectAudioIsPlay,
  selectVolume,
  selectAudioIsEnd,
  selectCurrentPlaylist,
} from "../../redux/selectors/audioSelectors";
import ClearIcon from "@mui/icons-material/Clear";
import { setShowMobileAudioController } from "../../redux/slices/appReducer";
import ControlButtons from "./ControlButtons/ControlButtons";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

const AudioControlContainer = styled.div`
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  align-items: center;

  @media (max-width: 770px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr 0.5fr;
    display: grid;
    align-items: center;
    justify-content: space-between;
    height: 85vh;
  }
`;

const CloseButtonContainer = styled.div`
  display: none;

  @media (max-width: 770px) {
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: flex-end;
  }
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 770px) {
    gap: 10px;
  }
`;

const RightControlBar = styled.div`
  justify-content: flex-end;
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 770px) {
    display: none;
  }
`;

const TinyText = styled(Typography)({
  color: "#fff",
  fontSize: "12px",
  opacity: 0.6,
  fontWeight: 400,
  letterSpacing: 0.2,
});

const sliderStyle = {
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
  "& ": {
    padding: "0px 0px 15px 0px",
  },
};

const AudioControl = ({ currentAudio }) => {
  const [rewindTime, setRewindTime] = useState(0)
  const [currentTime, setCurrentTime] = useState(null)

  const audioIsEnd = useSelector((state) => selectAudioIsEnd(state));
  const currentPlaylist = useSelector((state) => selectCurrentPlaylist(state));
  const audioIsPlay = useSelector((state) => selectAudioIsPlay(state));
  const volume = useSelector((state) => selectVolume(state));

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    setCurrentTime(value);
    setRewindTime(value);
  };

  return (
    <>
      <AudioControlContainer>
        <CloseButtonContainer>
          <IconButton
            onClick={() => dispatch(setShowMobileAudioController(false))}
            sx={{ padding: "0px" }}
          >
            <ClearIcon sx={{ color: "#fff" }} />
          </IconButton>
        </CloseButtonContainer>
        <AudioInfo currentPlaylist={currentPlaylist} audio={currentAudio} />
        <ControlBar>
          <ControlButtons
            audioIsEnd={audioIsEnd}
            currentPlaylist={currentPlaylist}
            audioIsPlay={audioIsPlay}
            currentAudio={currentAudio}
          />
          <Box
            sx={{
              width: "100%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TinyText>{formatDuration(currentTime)}</TinyText>
            <Slider
              onChange={handleChange}
              aria-label="time-indicator"
              size="small"
              value={currentTime}
              min={0}
              step={1}
              max={currentAudio.duration}
              sx={sliderStyle}
            />
            <TinyText>{formatDuration(currentAudio.duration)}</TinyText>
          </Box>
        </ControlBar>
        <RightControlBar>
          <VolumeControl volume={volume} setVolume={setVolume} />
          <CurrentPlaylist />
        </RightControlBar>
      </AudioControlContainer>
      <Audio
        currentAudio={currentAudio}
        volume={volume}
        audioIsPlay={audioIsPlay}
        rewindTime={rewindTime}
        setCurrentTime={setCurrentTime}
      />
    </>
  );
};

export default AudioControl;
