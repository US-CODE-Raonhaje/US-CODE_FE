import Home from "./pages/Home";
import MapDetail from "./pages/MapDetail";
import Frame from "./components/Frame";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/login/LoginPage";
import LoginProfilePage from "./pages/login/LoginProfilePage";
import LoginLocationPage from "./pages/login/LoginLocationPage";
import KakaoRedirectPage from "./pages/login/KakaoRedirectPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MyPosts from "./pages/MyPosts";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "./pages/Post";
import Notification from "./pages/Notification";

function App() {
  const [storyCount, setStoryCount] = useState(0);

  const handlePostSubmit = () => {
    setStoryCount((prev) => prev + 1);
  };

  return (
    <Frame>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <LoginPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login/profile" element={<LoginProfilePage />}></Route>
        <Route path="/login/location" element={<LoginLocationPage />}></Route>
        <Route path="/" element={<Home storyCount={storyCount} />} />

        <Route
          path="/post"
          element={<Post onPostSubmit={handlePostSubmit} />}
        />

        <Route path="/map" element={<MapDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/map" element={<MapDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route
          path="/kakao-redirect"
          element={<KakaoRedirectPage></KakaoRedirectPage>}
        />
        <Route path="mypage/posts" element={<MyPosts />}></Route>
      </Routes>
    </Frame>
  );
}

export default App;
