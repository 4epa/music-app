import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from '../AudioContol.module.css';


const VolumeControl = (props) => {

  const [oldVolumeValue, setOldVolumeValue] = useState(null);

  const icons = (volume) => {
    if((volume <= 1) && (volume >= 0.5)) {
      return <VolumeUpIcon sx={{ fontSize: '25px', color: '#fff' }} />
    } else if((volume <= 0.5) && (volume >= 0.2)) {
      return <VolumeDownIcon sx={{ fontSize: '25px', color: '#fff' }} />
    } else if((volume <= 0.2) && (volume > 0)) {
      return <VolumeMuteIcon sx={{ fontSize: '25px', color: '#fff' }} />
    } 
    return <VolumeOffIcon sx={{ fontSize: '25px', color: '#fff' }} />
  }

  const mutVolumeOrUnmute = () => {
    if(props.volume > 0) {
      setOldVolumeValue(props.volume);
      return props.setVolume(0);
    }
    return props.setVolume(oldVolumeValue);
  }

  const handleChange = (event, value) => {
    props.setVolume(value)
  }

  return (
    <div className={style.volume_control}>
      <div onClick={ mutVolumeOrUnmute } className={style.volume_icon}>
        { icons(props.volume) } 
      </div>
      <Box sx={{ width: 100 }}>
        <Slider 
        onChange={ handleChange }
        aria-label="Volume" 
        step={0.01} 
        max={1} 
        value={props.volume} 
        sx={{
          padding: '10px 0px',
          color: '#fff',
          height: 4,
          '& .MuiSlider-thumb': {
            width: 8,
            height: 8,
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 0px rgb(0 0 0 / 16%)` 
              },
              '&.Mui-active': {
                width: 10,
                height: 10,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }} />
      </Box>
    </div>
  )
}

export default VolumeControl;