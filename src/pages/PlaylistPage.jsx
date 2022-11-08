import { useDispatch, useSelector } from "react-redux";
import TrackList from "../component/TrackList/TrackList";
import { setPlaylist } from "../redux/slices/playlistReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../redux/selectors/playlistSelectors";
import styled from "@emotion/styled";
import DownloadedImage from "../component/common/DownloadedImage";
import { usePlaylist } from "../hooks/usePlaylist";

const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlaylistHeader = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 15px;
  max-height: 400px;
  width: 100%;
  position: relative;
  z-index: 2;
  gap: 15px;

  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const PlaylistCover = styled.div`
  width: 15%;
  padding-bottom: 15%;
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.744);

  & img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 450px) {
    width: 40%;
    padding-bottom: 40%;
  }
`;

const PlaylistDescription = styled.div`
  z-index: 2;
  display: grid;
  row-gap: 15px;

  & label {
    font-size: 16px;
    color: #ffffff90;
  }

  & h2 {
    font-size: 40px;
    font-weight: 700;
    color: #fff;

    @media (max-width: 770px) {
      font-size: 30px;
    }
  }
`;

const PlaylistBackground = styled.div`
  & img {
    z-index: -1;
    filter: blur(50px);
    opacity: 0.4;
  }
`;

const PlaylistPage = () => {
  const playlist = useSelector((state) => getPlaylist(state));
  const playlistParams = useParams();
  const dispatch = useDispatch();

  usePlaylist(playlistParams.id);

  useEffect(() => {
    return () => dispatch(setPlaylist(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!playlist) {
    return <div>...Loading</div>;
  }

  return (
    <PlaylistWrapper>
      <PlaylistHeader>
        <PlaylistCover>
          <DownloadedImage src={playlist.cover} />
        </PlaylistCover>
        <PlaylistDescription>
          <h2>{playlist.title}</h2>
          <label>playlist</label>
        </PlaylistDescription>
        <PlaylistBackground>
          <DownloadedImage src={playlist.cover} />
        </PlaylistBackground>
      </PlaylistHeader>
      <TrackList parameter={"genre"} value={playlist.genre} />
    </PlaylistWrapper>
  );
};

export default PlaylistPage;
