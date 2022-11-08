import CollectionCard from "../common/CollectionCard";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";
import { selectPlaylists } from "../../redux/selectors/playlistListSelectors";
import { usePlaylists } from "../../hooks/usePlaylists";
import Section from "../Section/Section";

const Playlists = () => {
  const playlistList = useSelector((state) => selectPlaylists(state));
  usePlaylists();

  if (!playlistList) {
    return <Loader />;
  }

  return (
    <Section title={"Playlists"}>
      {playlistList.map((playlist) => {
        return (
          <CollectionCard
            key={playlist.title}
            title={playlist.title}
            cover={playlist.cover}
            path={`/playlist/${playlist.playlistId}`}
            cardSubtitle={"playlist"}
          />
        );
      })}
    </Section>
  );
};

export default Playlists;
