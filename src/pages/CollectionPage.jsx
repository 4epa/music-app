import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import Section from "../component/Section/Section";
import { useSelector } from "react-redux";
import { selectArtistList } from "../redux/selectors/artistListSelector";
import CollectionCard from "../component/common/CollectionCard";
import { useArtistList } from "../hooks/useArtistList";
import Loader from "../component/common/Loader";
import { selectUserProfile } from "../redux/selectors/authorizationSelector";

const CollectionPageWrapper = styled.div`
  position: relative;
`;

const FavoriteCard = styled.div`
  background: #c62137a1;
  padding: 15px;
  display: grid;
  gap: 15px;
  color: #fff;
  border-radius: 10px;

  & h3 {
    font-size: 25px;
    font-weight: 700;
  }

  & p {
    font-size: 14px;
    color: #ffffff80;
  }
`;

const CollectionPage = () => {
  const artistList = useSelector((state) => selectArtistList(state));
  const userProfile = useSelector((state) => selectUserProfile(state));

  useArtistList("followers", userProfile.userId);

  if (!artistList) {
    return <Loader />;
  }

  return (
    <CollectionPageWrapper>
      <Section title={"Your collection playlists"}>
        <NavLink to="/collection/favorite">
          <FavoriteCard>
            <FavoriteIcon sx={{ fontSize: "70px" }} />
            <h3>Favorite tracks</h3>
            <p>all your favorite tracks are here</p>
          </FavoriteCard>
        </NavLink>
      </Section>
      <Section title={"Your subscriptions"}>
        {artistList.map((artist) => {
          return (
            <CollectionCard
              key={artist.name}
              title={artist.name}
              path={`/artist/${artist.artistId}`}
              cover={artist.ava}
              cardSubtitle={"artist"}
            />
          );
        })}
      </Section>
    </CollectionPageWrapper>
  );
};

export default CollectionPage;
