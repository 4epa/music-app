import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  getInitializeApp,
  getMobileControllerShow,
} from "./redux/selectors/appSelectors";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import Layout from "./component/Layout/Layout";
import { selectAuthorizationStatus } from "./redux/selectors/authorizationSelector";
import { useInitialization } from "./hooks/useInitialization";
import { CollectionPage } from "./pages";
import { PlaylistPage } from "./pages";
import { FavoritePage } from "./pages";
import { ArtistPage } from "./pages";
import { HomePage } from "./pages";
import { AuthorizationPage } from "./pages";

const App = () => {
  const showMobileController = useSelector((state) =>
    getMobileControllerShow(state)
  );
  const authorizationStatus = useSelector((state) =>
    selectAuthorizationStatus(state)
  );
  const initializeApp = useSelector((state) => getInitializeApp(state));

  useInitialization();

  useLayoutEffect(() => {
    if (showMobileController) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showMobileController]);

  if (!initializeApp) {
    return <div>...loading</div>;
  }

  if (!authorizationStatus) {
    return (
      <>
        <AuthorizationPage />
      </>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/collection/favorite" element={<FavoritePage />} />

        <Route path="/register" element={<Navigate to="/" />} />
        <Route path="/login" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;

// old content color #120405
