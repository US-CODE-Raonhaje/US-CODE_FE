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
  const [markerVisible, setMarkerVisible] = useState(false);
  const [markerPosition, setMarkerPosition] = useState({ x: 150, y: 300 });
  const [showModal, setShowModal] = useState(false);
  const uiseong = {
    lat: 36.351,
    lng: 128.6975,
  };

  const handleMapClick = (e) => {
    if (!markerVisible) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      setMarkerPosition({ x: clickX - 25, y: clickY - 25 });
      setMarkerVisible(true);
    }
  };

  const handleMarkerDrag = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.parentNode.getBoundingClientRect();
    const dragX = clientX - rect.left;
    const dragY = clientY - rect.top;
    setMarkerPosition({ x: dragX - 25, y: dragY - 25 });
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
          style={{
            width: "18px",
            height: "18px",
            fontSize: "18px",
            color: "#292A33",
            cursor: "pointer",
          }}
        />

        <FaUser
          style={{
            width: "22.75px",
            height: "26px",
            fontSize: "26px",
            color: "#292A33",
          }}
        />
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
          style={{
            fontFamily: "Pretendard",
            fontSize: "20px",
            fontWeight: 500,
            color: "#FFFFFF",
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
          <span
            style={{
              fontFamily: "Pretendard",
              fontSize: "20px",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            5
          </span>
        </div>
      </div>

      {markerVisible && (
        <>
          <img
            src={map2}
            alt="marker"
            style={{
              width: "50px",
              height: "50px",
              position: "absolute",
              left: `${markerPosition.x}px`,
              top: `${markerPosition.y}px`,
              zIndex: 20,
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              const onMouseMove = (moveEvent) => handleMarkerDrag(moveEvent);
              const onMouseUp = () => {
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
              };
              window.addEventListener("mousemove", onMouseMove);
              window.addEventListener("mouseup", onMouseUp);
            }}
          />

          {showModal && (
            <div
              style={{
                position: "fixed",
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
                  color: "#FFFFFF",
                  marginBottom: "10px",
                }}
              >
                새로운 이야기를 등록하실 건가요?
              </div>
              <img
                src={cat2}
                alt="cat"
                style={{
                  width: "136px",
                  height: "136px",
                  marginBottom: "-10px",
                  zIndex: 1,
                }}
              />
              <div
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
                  marginTop: "-20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Pretendard",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  등록하기
                </span>
              </div>
            </div>
          )}
        </>
      )}

      <MapBox center={uiseong} />

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