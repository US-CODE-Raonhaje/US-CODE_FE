import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MyPageEditable.css";
import background from "../assets/images/ww.png";
import catPro from "../assets/illustrations/cat-pro.png";
import pen from "../assets/images/pen.png";
import ok2 from "../assets/images/ok2.png";
import rec from "../assets/images/Rec.png";
import cat3 from "../assets/illustrations/cat3.png";
import cat4 from "../assets/illustrations/cat4.png";
import cat5 from "../assets/illustrations/cat5.png";
import cat6 from "../assets/illustrations/cat6.png";
import cat7 from "../assets/illustrations/cat7.png";

function MyPageEditable() {
  const [nickname, setNickname] = useState("최지한");
  const [isEditingName, setIsEditingName] = useState(false);
  const [showOkButton, setShowOkButton] = useState(false);
  const [isProfileChoosing, setIsProfileChoosing] = useState(false);
  const [selectedCat, setSelectedCat] = useState("cat3");
  const navigate = useNavigate();

  const handleNameEdit = () => {
    setNickname("");
    setIsEditingName(true);
    setShowOkButton(true);
  };

  const handleProfileEdit = () => {
    setIsProfileChoosing(true);
    setShowOkButton(false); 
  };

  const handleNameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleCatClick = (catId) => {
    if (catId === "cat4") {
      setSelectedCat("cat6");
      navigate("/cat6page");
    } else if (catId === "cat5") {
      setSelectedCat("cat7");
      navigate("/cat7page");
    }
  };

  return (
    <div
      className="mypage-editable-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="editable-profile-box">
        <div className="image-wrapper">
          <img src={catPro} alt="프로필" className="cat-profile" />
          <img src={pen} alt="펜" className="pen-on-profile" onClick={handleProfileEdit} />
        </div>
        <div className="editable-profile-text">
          <div className="name-wrapper">
            {isEditingName ? (
              <div className="nickname-inline-wrapper">
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNameChange}
                  className="nickname-input"
                />
                <span className="name-inline">님</span>
              </div>
            ) : (
              <>
                <span className="name">{nickname}님</span>
                <img
                  src={pen}
                  alt="이름 수정"
                  className="pen-on-name"
                  onClick={handleNameEdit}
                />
              </>
            )}
          </div>
          <div className="address">의성읍 충효로</div>
        </div>
      </div>

      {showOkButton && !isProfileChoosing && (
        <div className="ok-button-wrapper">
          <img src={ok2} alt="확인" className="ok2" />
          <span className="ok-text">닉네임 수정 완료</span>
        </div>
      )}

      {isProfileChoosing && (
        <div className="profile-select-box">
          <img src={rec} alt="배경" className="profile-background" />
          <div className="profile-cat-row">
            <div className="cat-container">
              <img src={cat3} alt="기본" className="profile-cat" />
              <div className="profile-caption">이미 사용중인<br />프로필입니다.</div>
            </div>
            <img src={selectedCat === "cat6" ? cat6 : cat4} alt="cat4" className="profile-cat" onClick={() => handleCatClick("cat4")} />
            <img src={selectedCat === "cat7" ? cat7 : cat5} alt="cat5" className="profile-cat" onClick={() => handleCatClick("cat5")} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPageEditable;
