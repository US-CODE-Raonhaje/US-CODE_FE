import React, { useEffect, useRef } from "react";
const MapBox = ({ center = { lat: 37.5665, lng: 126.978 } }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = mapRef.current;
          const options = {
            center: new window.kakao.maps.LatLng(center.lat, center.lng),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          const markerPosition = new window.kakao.maps.LatLng(
            center.lat,
            center.lng
          );
          const pouchUrl = new URL("../assets/icons/pouch.png", import.meta.url)
            .href;

          const markerImage = new window.kakao.maps.MarkerImage(
            pouchUrl,
            new window.kakao.maps.Size(36, 36)
          );

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          });

          marker.setMap(map);
        });
      }
    };

    script.onerror = () => {
      console.error("Kakao SDK script 로드 실패!");
    };

    document.head.appendChild(script);
  }, [center]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default MapBox;
