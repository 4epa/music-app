import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import DownloadedImage from "../../common/DownloadedImage";

const AudioInfoContainer = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 770px) {
    width: 100%;
    max-width: none;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 30px;
    padding: 0px;
  }

  @media (max-width: 450px) {
    width: 100%;
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const AudioCover = styled.div`
  position: relative;
  max-width: 80px;
  padding: 35px;

  & img {
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 770px) {
    position: relative;
    max-width: none;
    width: 40%;
    padding-bottom: 35%;
  }

  @media (max-width: 450px) {
    position: relative;
    max-width: none;
    width: 100%;
    padding-bottom: 85%;
  }
`;

const Description = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Author = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  cursor: pointer;

  & hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const Title = styled.h3`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const AudioInfo = ({ audio, currentPlaylist }) => {
  return (
    <AudioInfoContainer>
      <AudioCover>
        <DownloadedImage src={audio.cover} />
      </AudioCover>
      <Description>
        <Title>{audio.title}</Title>
        <NavLink
          style={{ padding: "0px", display: "inline-flex" }}
          to={`/artist/${audio.authorId}`}
        >
          <Author>{audio.author}</Author>
        </NavLink>
      </Description>
    </AudioInfoContainer>
  );
};

export default React.memo(AudioInfo);
