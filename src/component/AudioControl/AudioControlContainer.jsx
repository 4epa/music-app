import * as React from "react";
import { useSelector } from "react-redux";
import AudioControl from "./AudioControl";
import { selectCurrentAudio } from "../../redux/selectors/audioSelectors";
import styled from "@emotion/styled";
import { getMobileControllerShow } from "../../redux/selectors/appSelectors";

const AudioControlWrapper = styled.div`
  grid-area: control_bar;
  position: fixed;
  border-top: 2px solid #333333;
  z-index: 100;
  bottom: 0px;
  padding: 10px;
  width: 100%;
  background-color: #040404;
  transition: all 0.5s ease 0s;

  @media (max-width: 770px) {
    grid-area: control_bar;
    position: ${({ showMobileController }) =>
      showMobileController ? "fixed" : "absolute"};
    bottom: ${({ showMobileController }) =>
      showMobileController ? 0 : "-100%"};
    padding: 10px;
    width: 100%;
    height: ${({ showMobileController }) =>
      showMobileController ? "100%" : "auto"};
    z-index: 100;
  }
`;

const AudioControlContainer = (props) => {
  const currentAudio = useSelector((state) => selectCurrentAudio(state));
  const showMobileController = useSelector((state) =>
    getMobileControllerShow(state)
  );

  return (
    <AudioControlWrapper showMobileController={showMobileController}>
      {currentAudio !== null ? (
        <AudioControl currentAudio={currentAudio} />
      ) : (
        <span></span>
      )}
    </AudioControlWrapper>
  );
};

export default AudioControlContainer;

// audio.duration NAN
