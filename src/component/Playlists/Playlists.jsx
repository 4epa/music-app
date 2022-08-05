import style from "./Playlists.module.css";
import * as React from "react";
import { connect } from "react-redux";
import PlaylistBox from "./PlaylistBox/PlaylistBox";

const Playlists = (props) => {

  const playlists = props.playlists.map(plalist => {
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

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists
  };
};

const PlaylistsContainer = connect(mapStateToProps, {})(Playlists);

export default PlaylistsContainer;
