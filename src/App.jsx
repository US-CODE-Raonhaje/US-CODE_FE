import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapDetail from "./pages/MapDetail";
import Frame from "./components/Frame";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/login/LoginPage";
import LoginProfilePage from "./pages/login/LoginProfilePage";
import LoginLocationPage from "./pages/login/LoginLocationPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="/login/profile"
        element={<LoginProfilePage></LoginProfilePage>}
      ></Route>
      <Route
        path="/login/location"
        element={<LoginLocationPage></LoginLocationPage>}
      ></Route>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapDetail />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}
export default App;
