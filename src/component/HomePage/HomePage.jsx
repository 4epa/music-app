import Greeting from "../Greeting/Greeting";
import Playlists from "../Playlists/Playlists";
import ArtistBox from "./ArtistBox/ArtistBox";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.homePage__container}>
      <Greeting />
      <Playlists />
      <ArtistBox />
    </div>
  );
};

export default HomePage;
