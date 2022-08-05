import './App.css';
import Header from './component/Header/Header';
import Sitebar from './component/Sitebar/Sitebar';
import { Route, Routes, BrowserRouter} from '../node_modules/react-router-dom/react-router-dom.development';
import AudioControlContainer from './component/AudioControl/AudioControlContainer';
import Playlist from './component/Playlist/Playlist';
import Playlists from './component/Playlists/Playlists';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <Sitebar />
          <div className='content'>
            <Routes>
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="" element={<Playlists />}/>
            </Routes>
          </div>
          <AudioControlContainer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
