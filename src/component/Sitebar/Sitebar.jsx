import * as React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sitebar.module.css';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';

const Sitebar = (props) => {
  return (
    <div className={style.sitebar_container}>
      <ul className={style.menu}>
        <li className={style.menu_item}>
          <NavLink className={navData => navData.isActive ? style.link_active : style.link} to=''>
            <HomeRoundedIcon sx={{ fontSize: 20, marginRight: '10px' }} />Home</NavLink>
        </li>
        <li className={style.menu_item}>
          <NavLink className={navData => navData.isActive ? style.link_active : style.link} to='/search'>
            <SearchRoundedIcon sx={{ fontSize: 20, marginRight: '10px' }} />Search</NavLink>
        </li>
        <li className={style.menu_item}>
          <NavLink className={navData => navData.isActive ? style.link_active : style.link} to='/my/collection'>
            <LibraryMusicRoundedIcon sx={{ fontSize: 20, marginRight: '10px' }} />My collection</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sitebar;