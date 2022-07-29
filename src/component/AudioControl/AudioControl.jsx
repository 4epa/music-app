import * as React from 'react';
import { useEffect, useState } from 'react';
import { duration, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import style from './AudioContol.module.css';
import AudioInfo from './AudioInfo/AudioInfo';
import CurrentPlaylist from './CurrentPlaylist/CurrentPlaylist';
import VolumeControl from './VolumeControl/VolumeControl';
import Typography from '@mui/material/Typography';



const AudioControl = (props) => {

  const [timer, setTimer] = useState(null);

  const audio = React.createRef();

  const checkTime = (curentTime, duration, audio) => {
    if (curentTime >=  duration) {
      props.setIsPlay(false)
      return props.setCurrentTime(0)
    }
    return props.setCurrentTime(curentTime)
  }

  const audioPlay = (audio) => {
    audio.play()
    setTimer(setInterval(() => checkTime(audio.currentTime, audio.duration), 1000))
  }

  const audioStop = (audio) => {
    audio.pause()
    setTimer(clearInterval(timer))
  }

  useEffect(() => {
    if (props.audioIsPlay) audioPlay(audio.current)
    else audioStop(audio.current)
  }, [props.audioIsPlay])

  useEffect(() => {
    audio.current.volume = props.volume
  }, [props.volume])

  const TinyText = styled(Typography)({
    color: '#fff',
    fontSize: '14px',
    opacity: 0.60,
    fontWeight: 500,
    letterSpacing: 0.2,
  });

  function formatDuration(value) {
    const time = Math.ceil(value);
    const minute = Math.floor(time / 60);
    const secondLeft = time - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const  handleChange = (event, value) => {
    let audioFile = audio.current
    props.setCurrentTime(value)
    audioFile.currentTime = value
  }

  const nextOrPrevAudio = (currentPlaylit, currentAudioNumber, action) => {

    switch (action) {
      case 'prev':
        --currentAudioNumber
        break
      case 'next':
        ++currentAudioNumber
        break
    }

    console.log(currentAudioNumber)

    if (currentAudioNumber < 0 || currentAudioNumber >= currentPlaylit.length) return false

    props.setAudioNumber(currentAudioNumber)
    props.setCurrentTime(0)

    return props.setCurrentAudio(currentPlaylit[currentAudioNumber])

  }

  return (
    <div className="control_panel">
      <div className={style.control_container}>
        <AudioInfo cover={props.currentAudio.cover} title={props.currentAudio.title} author={props.currentAudio.author}/>
        <div className={style.audio_control}>
          <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 0,
              }}
            >
              <IconButton onClick={() => nextOrPrevAudio(props.currentPlaylist, props.currentAudioNumber, 'prev')} sx={{ padding: '5px' }} aria-label="previous song">
                <FastRewindRounded sx={{ fontSize: '25px', color: '#fff' }} />
              </IconButton>
              <IconButton sx={{ padding: '5px' }}>
                {
                  !props.audioIsPlay
                  ? <PlayArrowRounded onClick={ () => props.setIsPlay(true) } sx={{ fontSize: '30px', color: '#fff' }}/>
                  : <PauseRounded onClick={ () => props.setIsPlay(false) } sx={{ fontSize: '30px', color: '#fff' }}/>
                }
              </IconButton>
              <IconButton onClick={() => nextOrPrevAudio(props.currentPlaylist, props.currentAudioNumber, 'next')} sx={{ padding: '5px' }} aria-label="next song">
                <FastForwardRounded sx={{ fontSize: '25px', color: '#fff' }}  />
              </IconButton>
          </Box>
          <Box sx={{width: '500px', color: '#fff'}}>
              <Slider
                onChange={ handleChange }
                aria-label="time-indicator"
                size="small"
                value={props.currentAudio.currentTime}
                min={0}
                step={1}
                max={props.currentAudio.duration}
                sx={{
                  padding: '5px 0px',
                  color: '#fff',
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    '&:before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${'rgb(255 255 255 / 16%)'}`,
                    },
                    '&.Mui-active': {
                      width: 20,
                      height: 20,
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28,
                  },
                }}
              />
          </Box>  
          <div className={style.timer_container}>
            <TinyText>{formatDuration(props.currentAudio.currentTime)}</TinyText>
            <TinyText>{formatDuration(props.currentAudio.duration)}</TinyText>
          </div>
        </div>
        <div className={style.right__controle_containe}>
          <VolumeControl volume={props.volume} setVolume={props.setVolume} />
          <CurrentPlaylist />
        </div>
      </div>
      <audio autoPlay={true} ref={audio} src={props.currentAudio.src}></audio>
    </div>
  )
}

export default AudioControl;

// audio.duration NAN         
//<audio muted={true} autoPlay ref={audio} src={audioFile}></audio>