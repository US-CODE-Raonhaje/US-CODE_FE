import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapBox from "../components/MapBox";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import pouch from "../assets/icons/pouch.png";
import map2 from "../assets/icons/map2.png";
import cat2 from "../assets/illustrations/cat2.png";
import BottomNavBar from "../components/BottomNavBar";

function MapDetail() {
  const navigate = useNavigate();
  const [map2MarkerVisible, setMap2MarkerVisible] = useState(false);
  const [pouchMarkerVisible, setPouchMarkerVisible] = useState(true);
  const [map2MarkerPosition, setMap2MarkerPosition] = useState({ x: 150, y: 300 });
  const [pouchMarkerPosition, setPouchMarkerPosition] = useState({ x: 250, y: 300 });
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showDetailBox, setShowDetailBox] = useState(false);
  const uiseong = { lat: 36.351, lng: 128.6975 };

  const handleMapClick = (e) => {
    if (!map2MarkerVisible) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      setMap2MarkerPosition({ x: clickX - 25, y: clickY - 25 });
      setMap2MarkerVisible(true);
    }
  };

  const handleMap2MarkerDrag = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.parentNode.getBoundingClientRect();
    const dragX = clientX - rect.left;
    const dragY = clientY - rect.top;
    setMap2MarkerPosition({ x: dragX - 25, y: dragY - 25 });
  };

  const handlePouchMarkerDrag = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.parentNode.getBoundingClientRect();
    const dragX = clientX - rect.left;
    const dragY = clientY - rect.top;
    setPouchMarkerPosition({ x: dragX - 25, y: dragY - 25 });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#EDEDED",
        overflow: "hidden",
      }}
      onClick={handleMapClick}
    >
      <div
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      >
        <MapBox center={uiseong} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "44px",
          left: 0,
          width: "100%",
          height: "44px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 36px",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        <FaArrowLeft
          onClick={() => navigate(-1)}
          style={{ width: "18px", height: "18px", color: "#292A33", cursor: "pointer" }}
        />
        <FaUser style={{ width: "22.75px", height: "26px", color: "#292A33" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "91px",
          left: "36px",
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Pretendard",
          color: "#292A33",
          zIndex: 10,
        }}
      >
        경상북도 의성군
      </div>

      <div
        style={{
          position: "absolute",
          top: "141px",
          left: "36px",
          width: "323px",
          height: "59px",
          borderRadius: "12px",
          border: "1px solid #FFFFFF",
          background: "linear-gradient(90deg, #3D4250 0%, #52596C 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
       <span
        onClick={() => navigate("/story-detail")}
        style={{
        fontFamily: "Pretendard",
        fontSize: "20px",
        fontWeight: 500,
        color: "#FFFFFF",
        cursor: "pointer",
          }}
         >
        이야기 주머니
     </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={pouch}
            alt="pouch"
            style={{ width: "32px", height: "24px", marginRight: "5px" }}
          />
          <span style={{ fontFamily: "Pretendard", fontSize: "20px", fontWeight: 500, color: "#FFFFFF" }}>
            5
          </span>
        </div>
      </div>

      {pouchMarkerVisible && (
        <img
          src={pouch}
          alt="pouch"
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            left: `${pouchMarkerPosition.x}px`,
            top: `${pouchMarkerPosition.y}px`,
            zIndex: 20,
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setShowDetailBox(true);
            setShowRegisterModal(false);
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            const onMouseMove = (moveEvent) => handlePouchMarkerDrag(moveEvent);
            const onMouseUp = () => {
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
            };
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
          }}
        />
      )}

      {map2MarkerVisible && (
        <img
          src={map2}
          alt="marker"
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            left: `${map2MarkerPosition.x}px`,
            top: `${map2MarkerPosition.y}px`,
            zIndex: 20,
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setShowRegisterModal(true);
            setShowDetailBox(false);
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            const onMouseMove = (moveEvent) => handleMap2MarkerDrag(moveEvent);
            const onMouseUp = () => {
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
            };
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
          }}
        />
      )}

      {showRegisterModal && (
        <div
          style={{
            position: "absolute",
            top: "317px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "314px",
            height: "193px",
            borderRadius: "17px",
            border: "2px solid #FFFFFF",
            background: "rgba(255, 255, 255, 0.78)",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
            zIndex: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Pretendard",
              fontSize: "20px",
              fontWeight: 500,
              color: "#292A33",
              marginBottom: "10px",
            }}
          >
            새로운 이야기를 등록하실 건가요?
          </div>
          <img src={cat2} alt="cat" style={{ width: "120px", height: "120px", marginBottom: "35px" }} />
          <div
            onClick={() => navigate("/post")}
            style={{
              width: "236px",
              height: "43px",
              borderRadius: "17px",
              border: "2px solid #FFFFFF",
              background: "rgba(255, 255, 255, 0.69)",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginTop: "-70px",
            }}
          >
            <span
              style={{
                fontFamily: "Pretendard",
                fontSize: "20px",
                fontWeight: 500,
                color: "#292A33",
              }}
            >
              등록하기
            </span>
          </div>
        </div>
      )}

      {showDetailBox && (
        <>
          <div
            style={{
              position: "absolute",
              left: "44px",
              top: "221px",
              width: "314px",
              height: "316px",
              borderRadius: "17px",
              border: "2px solid #FFFFFF",
              background: "rgba(255, 255, 255, 0.78)",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
              zIndex: 25,
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontFamily: "Pretendard", fontSize: "20px", fontWeight: 500, color: "#000000", position: "absolute", left: "30px", top: "20px" }}>제목</div>
            <div style={{ fontFamily: "Pretendard", fontSize: "20px", fontWeight: 500, color: "#000000", position: "absolute", left: "250px", top: "60px" }}>과거</div>
            <div style={{ fontFamily: "Pretendard", fontSize: "20px", fontWeight: 500, color: "#000000", position: "absolute", left: "30px", top: "100px" }}>본문</div>
            <div style={{ fontFamily: "Pretendard", fontSize: "20px", fontWeight: 500, color: "#808080", position: "absolute", left: "100px", top: "250px", textDecoration: "underline" }}>자세히 보기...</div>
          </div>
          <img
            src={cat2}
            alt="cat"
            style={{
              position: "absolute",
              top: "130px",
              left: "223px",
              width: "136px",
              height: "136px",
              zIndex: 26,
            }}
          />
        </>
      )}

      <div
        style={{
          position: "fixed",
          left: "41px",
          top: "779px",
          width: "321px",
          height: "62px",
          zIndex: 100,
        }}
      >
        <BottomNavBar />
      </div>
    </div>
  );
}

export default MapDetail;
