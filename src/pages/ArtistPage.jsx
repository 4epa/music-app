import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import TrackList from "../component/TrackList/TrackList";
import { useParams } from "react-router-dom";
import ArtistInfo from "../component/ArtistInfo/ArtistInfo";
import { useArtist } from "../hooks/useArtist";

const ArtistWrapper = styled.div`
  position: relative;
`;

const TrackListTitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
  padding: 15px;
  background-color: #c62136;
  border-bottom: 2px solid #222;
`;

const ArtistPage = () => {
  const artist = useSelector((state) => state.artist.artist);
  const artistParams = useParams();

  useArtist(artistParams.id);

  if (!artist) {
    return <div>...Loading</div>;
  }

  return (
    <ArtistWrapper>
      <ArtistInfo artist={artist} />
      <TrackListTitle>{`All ${artist.name} tracks:`}</TrackListTitle>
      <TrackList parameter={"authorId"} value={+artistParams.id} />
    </ArtistWrapper>
  );
};

export default ArtistPage;