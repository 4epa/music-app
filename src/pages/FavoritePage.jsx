import TrackList from "../component/TrackList/TrackList";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../redux/selectors/authorizationSelector";

const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FavoriteHeader = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 15px;
  max-height: 400px;
  width: 100%;
  position: relative;
  box-shadow: 0px 10px 25px #c62137;
  z-index: 2;
  gap: 15px;

  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const FavoriteCover = styled.div`
  width: 15%;
  padding-bottom: 15%;
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.744);
  background-color: #c62137;

  @media (max-width: 450px) {
    width: 40%;
    padding-bottom: 40%;
  }
`;

const FavoriteDescription = styled.div`
  z-index: 2;
`;

const FavoriteTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

const FavoriteBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgb(78, 0, 71);
  background: linear-gradient(180deg, rgba(78, 0, 71, 0) 0%, #c62136 93%);
`;

const FavoritePage = () => {
  const userProfile = useSelector((state) => selectUserProfile(state));

  return (
    <FavoriteWrapper>
      <FavoriteHeader>
        <FavoriteCover>
          <FavoriteIcon
            sx={{
              padding: "40px",
              color: "#fff",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </FavoriteCover>
        <FavoriteDescription>
          <FavoriteTitle>Favorite tracks</FavoriteTitle>
        </FavoriteDescription>
        <FavoriteBackground></FavoriteBackground>
      </FavoriteHeader>
      <TrackList parameter={"liked"} value={userProfile.userId} />
    </FavoriteWrapper>
  );
};

export default FavoritePage;
