import './App.css';
import Header from './component/Header/Header';
import Sitebar from './component/Sitebar/Sitebar';
import {Route, Routes, BrowserRouter} from '../node_modules/react-router-dom/react-router-dom.development';
import AudioControl from './component/AudioControl/AudioControl';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <Sitebar />
          <div className='content'>
            sss
          </div>
          <AudioControl />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
