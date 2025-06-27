import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      axios
        .post("/api/v1/auth/kakao", { code })
        .then((res) => {
          // 로그인 성공 처리
          navigate("/");
        })
        .catch(() => {
          alert("카카오 로그인 실패");
        });
    }
  }, [navigate]);

  return <div>카카오 로그인 중...</div>;
}
