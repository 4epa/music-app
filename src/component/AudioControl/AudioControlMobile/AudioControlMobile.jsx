import { useDispatch, useSelector } from "react-redux";
import {
  selectAudioIsPlay,
  selectCurrentAudio,
} from "../../../redux/selectors/audioSelectors";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { setShowMobileAudioController } from "../../../redux/slices/appReducer";
import styled from "@emotion/styled";
import PlayButton from "../../common/PlayButtons";
import DownloadedImage from "../../common/DownloadedImage";

const MobileControlWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  width: 100%;
  z-index: 20;
  background-color: #0e0e0e;

  @media (min-width: 770px) {
    display: none;
  }
`;

const MobileControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 5px 10px;
  position: relative;
  align-items: center;
`;

const MobileControlBackground = styled.div`
  z-index: 21;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.6);
  display: grid;
  grid-template-areas:
    "cover title"
    "cover author";
  column-gap: 20px;
  z-index: 25;
`;

const Cover = styled.div`
  grid-area: cover;
  position: relative;
  width: 40px;
  padding-bottom: 40px;

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
`;

const Title = styled.h5`
  grid-area: title;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`;

const Author = styled.h6`
  font-size: 14px;
  grid-area: author;
`;

const AudioControlMobile = () => {
  const dispatch = useDispatch();

  const currentAudio = useSelector((state) => selectCurrentAudio(state));
  const audioIsPlay = useSelector((state) => selectAudioIsPlay(state));

  if (!currentAudio) {
    return <span></span>;
  }

  return (
    <MobileControlWrapper>
      <MobileControlContainer>
        <MobileControlBackground
          onClick={() => dispatch(setShowMobileAudioController(true))}
        />
        <Description>
          <Cover>
            <DownloadedImage src={currentAudio.cover} alt="#" />
          </Cover>
          <Title>{currentAudio.title}</Title>
          <Author>{currentAudio.author}</Author>
        </Description>
        <PlayButton
          audioIsPlay={audioIsPlay}
          style={{ fontSize: "30px", color: "#fff", zIndex: 25 }}
          buttonStyle={{ padding: "0px" }}
        />
      </MobileControlContainer>
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
          max={currentAudio.duration}
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
    </MobileControlWrapper>
  );
};

export default AudioControlMobile;
