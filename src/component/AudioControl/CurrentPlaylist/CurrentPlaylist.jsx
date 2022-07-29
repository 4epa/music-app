import style from '../AudioContol.module.css';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import * as React from 'react';

const CurrentPlaylist = (props) => {

  return (
    <div className={style.playlist_icon}>
      <PlaylistPlayIcon sx={{fontSize: '30px'}}/>
    </div>
  )
}

export default CurrentPlaylist;