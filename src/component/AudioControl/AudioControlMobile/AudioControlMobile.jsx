import { setIsPlay } from "../../../redux/audioReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAudioIsPlay,
  getCurrentAudio,
} from "../../../redux/selectors/audioSelectors";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import style from "./AudioControlMobile.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { setShowMobileAudioControler } from "../../../redux/appReducer";

const AudioControlMobile = () => {
  const dispatch = useDispatch();

  const currentAudio = useSelector((state) => getCurrentAudio(state));
  const audioIsPlay = useSelector((state) => getAudioIsPlay(state));

  if (!currentAudio) {
    return <span></span>;
  }

  return (
    <div className={style.mobile_control}>
      <div className={style.mobile_control_container}>
        <div
          onClick={() => dispatch(setShowMobileAudioControler(true))}
          className={style.bg__mobileControler}
        ></div>
        <div className={style.descripton}>
          <div className={style.cover}>
            <img src={currentAudio.cover} alt="#" />
          </div>
          <h5 className={style.title}>{currentAudio.title}</h5>
          <h6 className={style.authot}>{currentAudio.author}</h6>
        </div>
        <div className={style.buttons}>
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
        </div>
      </div>
      <Box
        sx={{
          width: "100%",
          padding: "0px 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Slider
          size="small"
          value={currentAudio.currentTime}
          aria-label="Small"
          sx={{
            padding: "0px 0px",
            color: "#fff",
            height: 2,
            "& .MuiSlider-thumb": {
              width: 2,
              height: 2,
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 0px ${"rgb(255 255 255 / 16%)"}`,
                width: 2,
                height: 2,
              },
              "&.Mui-active": {
                width: 2,
                height: 2,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
            "& ": {
              padding: "0px 0px 15px 0px",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default AudioControlMobile;
