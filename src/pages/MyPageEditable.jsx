import React, { useState } from "react";
import "../styles/MyPageEditable.css";
import catPro from "../assets/illustrations/cat-pro.png";
import penIcon from "../assets/images/pen.png";
import okIcon from "../assets/images/ok.png";
import BottomNavBar from "../components/BottomNavBar";
import bg from "../assets/images/ww.png";

function MyPageEditable() {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState("최지한");
  const [tempNickname, setTempNickname] = useState(nickname);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleConfirmClick = () => {
    setNickname(tempNickname);
    setIsEditing(false);
    setIsConfirmed(true);
    setTimeout(() => setIsConfirmed(false), 2000); 
  };

  return (
    <div className="mypage-editable-container">
      <img src={bg} alt="배경" className="bg-image" />

      <div className="profile-box">
        <div className="cat-container">
          <img src={catPro} alt="프로필" className="cat-profile" />
        </div>
        <div className="profile-text">
          {isEditing ? (
            <input
              type="text"
              value={tempNickname}
              onChange={(e) => setTempNickname(e.target.value)}
              className="nickname-input"
            />
          ) : (
            <div className="name-line">
              <span className="name">{nickname}</span>
              <img
                src={penIcon}
                alt="수정"
                className="edit-icon"
                onClick={handleEditClick}
              />
            </div>
          )}
          <div className="address">의성읍 충효로</div>
        </div>
        {isEditing && (
          <img
            src={okIcon}
            alt="확인"
            className="ok-icon"
            onClick={handleConfirmClick}
          />
        )}
      </div>

      {isConfirmed && (
        <div className="confirm-message">닉네임이 수정되었습니다!</div>
      )}

      <BottomNavBar />
    </div>
  );
}

export default MyPageEditable;