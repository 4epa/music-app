import style from "./Playlists.module.css";
import * as React from "react";
import { useSelector } from "react-redux";
import PlaylistBox from "./PlaylistBox/PlaylistBox";

const Playlists = () => {

  const playlistsWithState = useSelector(state => state.playlists)

  const playlists = playlistsWithState.map(plalist => {
    return <PlaylistBox
      key={plalist.playlistId}
      playlistCover={plalist.playlistCover}
      playlistId={plalist.playlistId}
      playlistTitle={plalist.playlistTitle}
      artist={plalist.artist}
    />
  })

  return (
    <div className={style.playlists_container}>
      { playlists }
    </div>
  );
};

export default Playlists;
