import * as React from "react";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import styled from "@emotion/styled";

const SidebarContainer = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000;
  box-shadow: 1px 1px 10px #111;
  border-right: 2px solid #333333;

  @media (max-width: 770px) {
    border-right: none;
    border-top: 2px solid #333333;
    display: flex;
    align-items: center;
    position: fixed;
    padding: 0px;
    bottom: 0px;
    height: 60px;
    z-index: 100;
  }
`;

const SidebarMenu = styled.nav`
  position: relative;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

const SidebarMenuList = styled.ul`
  position: fixed;
  top: 50px;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;

  @media (max-width: 770px) {
    position: relative;
    display: flex;
    padding: 0px;
    top: 0px;
    flex-direction: row;
    justify-content: space-around;
    background-color: #000;
    width: 100%;
  }
`;

const SidebarMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 20px;
`;

const linkStyle = (isActive) => {
  return {
    display: "flex",
    alignItems: "center",
    color: isActive ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, 0.6)",
    fontSize: "16px",
    gap: "10px",
  };
};

const LinkSpan = styled.span`
  @media (max-width: 770px) {
    display: none;
  }
`;

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarMenuList>
          <SidebarMenuItem>
            <NavLink style={(navData) => linkStyle(navData.isActive)} to="/">
              <HomeRoundedIcon sx={{ fontSize: 20 }} />
              <LinkSpan>Home</LinkSpan>
            </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <NavLink style={(navData) => linkStyle(false)} to="#">
              <SearchRoundedIcon sx={{ fontSize: 20 }} />
              <LinkSpan>Search</LinkSpan>
            </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <NavLink style={(navData) => linkStyle(navData.isActive)} to="/collection">
              <LibraryMusicRoundedIcon sx={{ fontSize: 20 }} />
              <LinkSpan>My collection</LinkSpan>
            </NavLink>
          </SidebarMenuItem>
        </SidebarMenuList>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;

// old border color #c62136