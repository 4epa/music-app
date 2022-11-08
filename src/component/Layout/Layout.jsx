import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styled from "@emotion/styled";
import AudioControlContainer from "../AudioControl/AudioControlContainer";
import AudioControlMobile from "../AudioControl/AudioControlMobile/AudioControlMobile";

const screenWidth = window.screen.width;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 200px 10fr;
  grid-template-rows: 100% 100px;
  grid-template-areas:
    "sidebar content"
    "control_bar control_bar";
  min-width: 100%;
  min-height: 100vh;
  height: 100%;

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100% 60px;
    grid-template-areas:
      "content content"
      "sidebar sidebar";
  }
`;

const Content = styled.div`
  overflow: hidden;
  z-index: 0;
  background-color: #121212;;
  grid-area: content;
  padding-bottom: 100px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
      {screenWidth <= 770 && <AudioControlMobile />}
      <AudioControlContainer />
    </Wrapper>
  );
};

export default Layout;
