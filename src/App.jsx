import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapDetail from "./pages/MapDetail";
import Frame from './components/Frame';
import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapDetail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Frame>
    </BrowserRouter>
  );
}

export default App;

