import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { authorization } from "../../../api/firebase-api";

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0px;
  padding: 15px 0px;
  z-index: 5;
  display: flex;
  align-items: center;
`;

const HeaderBackGround = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease 0s;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(${({ scroll }) => (scroll > 0 ? "10px" : "0px")});

  @media (max-width: 770px) {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  position: relative;

  @media (max-width: 770px) {
    display: none;
  }
`;

const AppName = styled.h1`
  color: #fff;
  font-size: 25px;
  font-weight: 300;
  cursor: pointer;

  & strong {
    font-weight: 700;
    color: #c62136;
  }
`;

const Header = (props) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper>
      <HeaderBackGround scroll={scroll} />
      <HeaderContainer>
        <AppName>
          <strong>MP3</strong>.Storage
        </AppName>
        {/* <Button onClick={authorization.signOutOfProfile}>Sign out</Button> */}
      </HeaderContainer>
    </HeaderWrapper>
  );    
};

export default Header;
