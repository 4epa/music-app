import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import style from './AudioContol.module.css';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { connect } from 'react-redux/es/exports';
import { setNextSong, setPrevSong } from '../../redux/audioReducer';

const AudioControl = (props) => {

  const [isPlayStatus, setIsPlay] = useState(false);
  const [audio, setAudio] = useState(new Audio(''));
  const [currentTimeAudio, setCurrentTime] = useState(0);
  const [timer, setTimer] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setAudio(new Audio(props.currentAudio.audioFile)) 
  }, [props.currentAudio.audioFile])

  const controlStateIsPlay = () => {
    if (isPlayStatus) {
      return stopAodio()
    } else {
      return playAodio()
    }
  }

  const playAodio = () => {
    setIsPlay(true);
    audio.play();
    setTimer(setInterval(checkAudioTime, 1000));
  }

  const checkAudioTime = () => {
    if (audio.currentTime >= audio.duration) {
      stopAodio();
      return setCurrentTime(0)
    }
    return setCurrentTime(audio.currentTime)
  }

  const stopAodio = () => {
    setIsPlay(false);
    audio.pause();
    clearInterval(timer);
  }

  const nextOrPrevSong = (action) => {
    stopAodio()
    setCurrentTime(0)
    switch (action) {
      case 'next':
        return props.setNextSong(props.currentSongId)
      case 'prev':
        return props.setPrevSong(props.currentSongId)
    }
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
              <IconButton onClick={() => nextOrPrevSong('prev') } sx={{ padding: '5px' }} aria-label="previous song">
                <FastRewindRounded sx={{ fontSize: '25px', color: '#fff' }} />
              </IconButton>
              <IconButton sx={{ padding: '5px' }} onClick={ controlStateIsPlay }>
                {
                  !isPlayStatus
                  ? <PlayArrowRounded sx={{ fontSize: '30px', color: '#fff' }}/>
                  : <PauseRounded sx={{ fontSize: '30px', color: '#fff' }}/>
                }
              </IconButton>
              <IconButton onClick={() => nextOrPrevSong('next') } sx={{ padding: '5px' }} aria-label="next song">
                <FastForwardRounded sx={{ fontSize: '25px', color: '#fff' }}  />
              </IconButton>
            </Box>
            <Box sx={{width: '500px', color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)'}}>
              <Slider
                onChange={(_, value) => audio.currentTime = value}
                aria-label="time-indicator"
                size="small"
                value={currentTimeAudio}
                min={0}
                step={1}
                max={audio.duration}
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
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                          ? 'rgb(255 255 255 / 16%)'
                          : 'rgb(0 0 0 / 16%)'
                      }`,
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
          </div>
        <CurrentPlaylist />
      </div>
    </div>
  )
}

const AudioInfo = (props) => {
  return (
    <div className={style.info_box} >
      <div className={style.cover} >
        <img src={props.cover} alt="#" />
      </div>
      <div className={style.description} >
        <div className={style.audio_title}>{props.title}</div>
        <div className={style.audio_author}>{props.author}</div>
      </div>
    </div>
  )
}

const CurrentPlaylist = (props) => {
  return (
    <div className={style.playlist_icon}>
      <PlaylistPlayIcon sx={{fontSize: '30px'}}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentSongId: state.audio.songId,
    currentAudio: state.audio.currentSong
  }
}

const AudioContolContainer = connect(mapStateToProps, { setNextSong, setPrevSong }) (AudioControl)

export default AudioContolContainer;