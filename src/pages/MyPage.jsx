import React from "react";
import "../styles/MyPage.css";
import catPro from "../assets/illustrations/cat-pro.png";
import BottomNavBar from "../components/BottomNavBar";

function MyPage() {
  return (
    <div className="mypage-container">
      <div className="profile-box">
        <img src={catPro} alt="고양이 프로필" className="cat-profile" />
        <div className="profile-text">
          <div className="name">최지한님</div>
          <div className="address">의성읍 충효로</div>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-text">내가 쓴 글</div>
        <div className="menu-divider"></div>
      </div>

      <div className="menu-item">
        <div className="menu-text">추억의 사진들</div>
        <div className="menu-divider"></div>
      </div>

      <div className="menu-item">
        <div className="menu-text">로그아웃</div>
        <div className="menu-divider"></div>
      </div>

      <div className="menu-item">
        <div className="menu-text">정보 수정</div>
        <div className="menu-divider"></div>
      </div>

      <div className="menu-item">
        <div className="menu-text">회원 탈퇴</div>
        <div className="menu-divider"></div>
      </div>

      <BottomNavBar /> 
    </div>
  );
}

export default MyPage;
