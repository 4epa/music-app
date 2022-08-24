import Greeting from "../Greeting/Greeting"
import Playlists from "../Playlists/Playlists"
import ArtistBox from "./ArtistBox/ArtistBox";

const HomePage = () => {
  return (
    <div>
      <Greeting />
      <Playlists />
      <ArtistBox />
    </div>
  )
}

export default HomePage;