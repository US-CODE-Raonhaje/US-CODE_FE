import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MapDetail from './pages/MapDetail';
import Frame from './components/Frame';
import MyPage from './pages/MyPage';
import Post from './pages/Post';
import Notification from './pages/Notification';

function App() {
  const [storyCount, setStoryCount] = useState(0);

  const handlePostSubmit = () => {
    setStoryCount((prev) => prev + 1);
  };

  return (
    <BrowserRouter>
      <Frame>
        <Routes>
          <Route path="/" element={<Home storyCount={storyCount} />} />
          
          <Route path="/post" element={<Post onPostSubmit={handlePostSubmit} />} />
          
          <Route path="/map" element={<MapDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Frame>
    </BrowserRouter>
  );
}

export default App;