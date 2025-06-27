import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const code = params.get("code");
    const error = params.get("error");

    if (error) {
      navigate("/login");
      return;
    }

    if (code) {
      console.log(code);
      axios
        .post(`http://34.64.144.67/api/v1/auth/kakao?code=${code}`)
        .then((res) => {
          const { accessToken, refreshToken, isAdditionalInfoRequired } =
            res.data;
          console.log(isAdditionalInfoRequired);
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          if (isAdditionalInfoRequired) {
            navigate("/login/profile");
          } else {
            navigate("/");
          }
        })
        .catch(() => {
          alert("카카오 로그인 실패");
          navigate("/login");
        });
    }
  }, [navigate]);

  return <div>카카오 로그인 중...</div>;
}
