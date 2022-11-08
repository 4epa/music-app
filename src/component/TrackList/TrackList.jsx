import styled from "@emotion/styled";
import SongBox from "./SongBox/SongBox";
import { getTrackList } from "../../redux/selectors/playlistSelectors";
import { useSelector } from "react-redux";
import {
  selectAudioIsPlay,
  selectCurrentAudio,
} from "../../redux/selectors/audioSelectors";
import { useTrackList } from "../../hooks/useTrackList";
import Loader from "../common/Loader";

const TrackListContainer = styled.div`
  display: grid;
  gap: 5px;
  padding: 5px;
`;

const TrackList = ({ parameter, value }) => {
  const trackList = useSelector((state) => getTrackList(state));
  const audioIsPlay = useSelector((state) => selectAudioIsPlay(state));
  const currentAudio = useSelector((state) => selectCurrentAudio(state));

  useTrackList(parameter, value);

  if (!trackList) {
    return <Loader />;
  }

  return (
    <TrackListContainer>
      {trackList.map((audio, index) => (
        <SongBox
          CurrentAudioNumber={index}
          key={audio.audioId}
          audioIsPlay={audioIsPlay}
          currentAudio={currentAudio}
          audio={audio}
          trackList={trackList}
        />
      ))}
    </TrackListContainer>
  );
};

export default TrackList;
