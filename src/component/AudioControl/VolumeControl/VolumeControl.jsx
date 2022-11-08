import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

const VolumeControlContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 35px 4fr;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

const Icons = ({ volume }) => {
  if (volume <= 1 && volume >= 0.5) {
    return <VolumeUpIcon sx={{ fontSize: "25px", color: "#fff" }} />;
  } else if (volume <= 0.5 && volume >= 0.2) {
    return <VolumeDownIcon sx={{ fontSize: "25px", color: "#fff" }} />;
  } else if (volume <= 0.2 && volume > 0) {
    return <VolumeMuteIcon sx={{ fontSize: "25px", color: "#fff" }} />;
  }
  return <VolumeOffIcon sx={{ fontSize: "25px", color: "#fff" }} />;
};

const VolumeControl = ({ volume, setVolume }) => {
  const dispatch = useDispatch();

  const [oldVolumeValue, setOldVolumeValue] = useState(null);

  const mutVolumeOrUnmute = () => {
    if (volume > 0) {
      setOldVolumeValue(volume);
      return dispatch(setVolume(0));
    }
    return dispatch(setVolume(oldVolumeValue));
  };

  const handleChange = (event, value) => {
    dispatch(setVolume(value));
  };

  return (
    <VolumeControlContainer>
      <IconButton
        onClick={mutVolumeOrUnmute}
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Icons volume={volume} />
      </IconButton>
      <Box sx={{ width: 100 }}>
        <Slider
          onChange={handleChange}
          aria-label="Volume"
          step={0.01}
          max={1}
          value={volume}
          sx={{
            padding: "10px 0px",
            color: "#fff",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 4,
              height: 4,
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 0px rgb(0 0 0 / 16%)`,
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
    </VolumeControlContainer>
  );
};

export default React.memo(VolumeControl);
