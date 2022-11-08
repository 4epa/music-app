import styled from "@emotion/styled";
import VerifiedIcon from "@mui/icons-material/Verified";
import DownloadedImage from "../common/DownloadedImage";
import FollowButton from "../common/FollowButton";

const ArtistInfoContainer = styled.div`
  padding: 60px 15px 15px 15px;
  position: relative;
  display: grid;
  grid-template-areas: "ava description";
  grid-template-columns: 1fr 4fr;
  align-items: end;
  gap: 20px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const ArtistAva = styled.div`
  grid-area: ava;
  height: 250px;
  width: 250px;
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 1px 15px #111;
  border-radius: 5px;
  overflow: hidden;

  & img {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 770px) {
    height: 150px;
    width: 150px;
  }
`;

const ArtistDescription = styled.div`
  z-index: 10;
  grid-area: description;
  display: grid;
  gap: 20px;

  @media (max-width: 450px) {
    text-align: center;
  }
`;

const ArtistLabel = styled.div`
  color: rgba(255, 255, 255);
  line-height: 1;
`;

const Name = styled.div`
  color: #fff;
  font-size: 70px;
  font-weight: 700;
  line-height: 1;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: rgba(255, 255, 255);
  font-size: 16px;
  line-height: 1;
`;

const FollowBar = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
`;

const ArtistBackground = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: blur(20px);
  opacity: 0.8;
  z-index: -1;
`;

const ArtistGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgb(78, 0, 71);
  background: linear-gradient(180deg, rgba(78, 0, 71, 0) 0%, #c62136 93%);
`;

const ArtistInfo = ({ artist }) => {
  return (
    <ArtistInfoContainer>
      {/* <ArtistBackground src={artist.ava} alt="#" /> */}
      <ArtistGradient />
      <ArtistAva>
        <DownloadedImage src={artist.ava} />
      </ArtistAva>
      <ArtistDescription>
        <ArtistLabel>
          Artist <VerifiedIcon sx={{ fontSize: "16px" }} />
        </ArtistLabel>
        <Name>{artist.name}</Name>
        <Text>{`Followers: ${artist.followers.length}`}</Text>
        <FollowBar>
          <FollowButton artist={artist} />
        </FollowBar>
      </ArtistDescription>
    </ArtistInfoContainer>
  );
};

export default ArtistInfo;
