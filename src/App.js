import "./App.css";
import Header from "./component/Header/Header";
import Sitebar from "./component/Sitebar/Sitebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AudioControlContainer from "./component/AudioControl/AudioControlContainer";
import Playlist from "./component/Playlist/Playlist";
import HomePage from "./component/HomePage/HomePage";
import ArtistProfile from "./component/ArtistProfile/ArtistProfile";
import AudioControlMobile from "./component/AudioControl/AudioControlMobile/AudioControlMobile";
import { getMobileControlerShow } from "./redux/selectors/appSelectors";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";

const App = () => {
  const showMobileControler = useSelector((state) =>
    getMobileControlerShow(state)
  );

  useLayoutEffect(() => {
    if (showMobileControler) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showMobileControler])

  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Sitebar />
          <AudioControlMobile />
          <div className="content">
            <Routes>
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="" element={<HomePage />} />
              <Route path="/artist/:id" element={<ArtistProfile />} />
            </Routes>
          </div>
          <div className={showMobileControler ? "control_bar _active_control_bar" : "control_bar"}>
            <AudioControlContainer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
