import { useEffect, useState } from "react";
import {
  setCurrentAudio,
  setIsPlay,
} from "../../../redux/slices/audioReducer";
import { useDispatch } from "react-redux";
import { setCurrentPlaylist } from "../../../redux/slices/currentPlaylistReducer";
import { NavLink } from "react-router-dom";
import { formatDuration, limitSymbol } from "../../../utils/helpers";
import styled from "@emotion/styled";
import PlayButton from "../../common/PlayButtons";
import LikeButton from "../../common/LikeButton";
import DownloadedImage from "../../common/DownloadedImage";

const AudioBoxContainer = styled.div`
  transition: background-color 0.2s ease 0s;
  align-items: center;
  grid-gap: 5px;
  padding: 10px 15px;
  display: grid;
  border-radius: 5px;
  grid-template-columns: 40px 40px 10fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-bottom: 1px solid #222;
  grid-template-areas:
    "number cover title duration like-button"
    "number cover author duration like-button";
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  position: relative;
  column-gap: 20px;
  cursor: pointer;
  ${({ selected }) =>
    selected ? "background-color: #c62136ac;" : "background-color: #161616;"}

  :hover {
    ${({ selected }) =>
      selected
        ? "background-color: #c62136ac;"
        : "background-color: #c6213650;"}
  }

  @media (max-width: 450px) {
    grid-template-columns: 30px 30px 5fr 2fr 1fr;
    font-size: 14px;
    column-gap: 10px;
  }
`;

const AudioBoxBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const AudioNumber = styled.span`
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  grid-area: number;
`;

const AudioCover = styled.div`
  position: relative;
  overflow: hidden;
  grid-area: cover;
  display: flex;
  justify-content: center;
  height: 40px;
  ${({ selected }) => (selected ? "background-color: #000000;" : "background-color: #0000000;")}
  & img {
    ${({ selected }) => (selected ? "opacity: 0.5;" : "opacity: 1;")}
  }

  @media (max-width: 450px) {
    height: 30px;
  }
`;

const AudioTitle = styled.h3`
  font-weight: 700;
  color: #fff;
  grid-area: title;
  display: flex;
`;

const AudioAuthor = styled.span`
  grid-area: author;
  display: flex;
  font-size: 14px;
`;

const AudioAuthorLink = styled.span`
  color: rgba(255, 255, 255, 0.7);

  :hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const AudioDuration = styled.span`
  font-size: 14px;
  display: flex;
  justify-content: center;
  grid-area: duration;

  @media (max-width: 450px) {
    display: none;
  }
`;

const LikeButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: like-button;
`;

const SongBox = ({
  audio,
  trackList,
  currentAudio,
  audioIsPlay,
  CurrentAudioNumber,
}) => {
  const [selectAudio, setSelectAudio] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectAudio(currentAudio);
  }, [currentAudio]);

  const selected = () => {
    if (selectAudio === null) return false;
    else if (selectAudio.audioId === audio.audioId) return true;
    return false;
  };

  const setAudio = () => {
    dispatch(setCurrentPlaylist(trackList));
    dispatch(setCurrentAudio(audio));
    dispatch(setIsPlay(true));
  };

  const handleClick = () => {
    if (!selected()) {
      setAudio();
    }
  };

  return (
    <AudioBoxContainer selected={selected()}>
      <AudioBoxBackground onClick={handleClick}></AudioBoxBackground>
      <AudioNumber>{CurrentAudioNumber + 1}</AudioNumber>
      <AudioCover selected={selected()}>
        {selected() ? (
          <PlayButton
            audioIsPlay={audioIsPlay}
            style={{
              color: "#fff",
              zIndex: 10,
              fontSize: "25px",
              cursor: "pointer",
            }}
          />
        ) : (
          <span></span>
        )}
        <DownloadedImage src={audio.cover} />
      </AudioCover>
      <AudioTitle>{limitSymbol(audio.title, 10)}</AudioTitle>
      <AudioAuthor>
        <NavLink style={{ zIndex: "10" }} to="/artist/1">
          <AudioAuthorLink>{audio.author}</AudioAuthorLink>
        </NavLink>
      </AudioAuthor>
      <AudioDuration>{formatDuration(audio.duration)}</AudioDuration>
      <LikeButtonContainer>
        <LikeButton trackList={trackList} audioId={audio.audioId} />
      </LikeButtonContainer>
    </AudioBoxContainer>
  );
};

export default SongBox;
