import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import DownloadedImage from "./DownloadedImage";

const CardWrapper = styled.div``;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  grid-gap: 10px;
  transition: all 0.2s ease 0s;
  overflow: hidden;
  height: 100%;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 450px) {
    padding: 0px;
    gap: 15px;
  }
`;

const CardCover = styled.div`
  padding-bottom: 100%;
  width: 100%;
  position: relative;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 5px;

  @media (max-width: 1024px) {
    height: 150px;
    width: 150px;
  }

  @media (max-width: 450px) {
    height: 100%;
    width: 100px;
    border-radius: 0px;
  }
`;

const CardTitle = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 600;
  line-height: 140%;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const CardSubtitle = styled.p`
  font-size: 12px;
  color: #BCBCBC;
  line-height: 140%;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const CollectionCard = ({ title, cover, path, cardSubtitle }) => {
  return (
    <CardWrapper>
      <NavLink to={path}>
        <CardContainer>
          <CardCover>
            <DownloadedImage src={cover} />
          </CardCover>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{cardSubtitle}</CardSubtitle>
        </CardContainer>
      </NavLink>
    </CardWrapper>
  );
};

export default CollectionCard;
