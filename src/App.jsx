import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapDetail from "./pages/MapDetail";
import Frame from "./components/Frame";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/login/LoginPage";
import LoginProfilePage from "./pages/login/LoginProfilePage";
import LoginLocationPage from "./pages/login/LoginLocationPage";
import KakaoRedirectPage from "./pages/login/KakaoRedirectPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/login/profile" element={<LoginProfilePage />}></Route>
      <Route path="/login/location" element={<LoginLocationPage />}></Route>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/map" element={<MapDetail />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route
        path="/kakao-redirect"
        element={<KakaoRedirectPage></KakaoRedirectPage>}
      />
    </Routes>
  );
}
export default App;
