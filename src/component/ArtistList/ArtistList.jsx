import CollectionCard from "../common/CollectionCard";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";
import { selectArtistList } from "../../redux/selectors/artistListSelector";
import { useArtistList } from "../../hooks/useArtistList";
import Section from "../Section/Section";

const ArtistList = () => {
  const artistList = useSelector((state) => selectArtistList(state));
  useArtistList();

  if (!artistList) {
    return <Loader />;
  }

  return (
    <Section title={"Artists"}>
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
  );
};

export default ArtistList;
