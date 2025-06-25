import React from "react";
import "./BottomNavBar.css";

import mapIcon from "../assets/icons/map.png";
import homeIcon from "../assets/icons/home.png";
import myIcon from "../assets/icons/my.png";

function BottomNavBar() {
  return (
    <div className="bottom-navbar">
      <img src={mapIcon} alt="Map" className="nav-icon" />
      <img src={homeIcon} alt="Home" className="nav-icon" />
      <img src={myIcon} alt="My" className="nav-icon" />
    </div>
  );
}

export default BottomNavBar;
