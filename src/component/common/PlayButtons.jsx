import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import IconButton from "@mui/material/IconButton";
import { setIsPlay } from "../../redux/slices/audioReducer";
import { useDispatch } from "react-redux";

const PlayButton = ({audioIsPlay, style, buttonStyle}) => {
  const dispatch = useDispatch()

  return (!audioIsPlay ? (
    <IconButton
      onClick={() => dispatch(setIsPlay(true))}
      sx={buttonStyle}
    >
      <PlayArrowRounded sx={style} />
    </IconButton>
  ) : (
    <IconButton
      onClick={() => dispatch(setIsPlay(false))}
      sx={buttonStyle}
    >
      <PauseRounded sx={style} />
    </IconButton>
  ))
}

export default PlayButton;