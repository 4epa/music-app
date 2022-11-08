import styled from "@emotion/styled";
import ArtistList from "../component/ArtistList/ArtistList";
import Greeting from "../component/Greeting/Greeting";
import PlaylistList from "../component/PlaylistList/PlaylistList";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Greeting />
      <PlaylistList />
      <ArtistList />
    </HomePageContainer>
  );
};

export default HomePage;
