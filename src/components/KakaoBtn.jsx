const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

function getKakaoAuthUrl() {
  return (
    `https://kauth.kakao.com/oauth/authorize?` +
    `client_id=${KAKAO_REST_API_KEY}` +
    `&redirect_uri=${encodeURIComponent(KAKAO_REDIRECT_URI)}` +
    `&response_type=code`
  );
}

export default function KakaoBtn() {
  const handleLogin = () => {
    window.location.href = getKakaoAuthUrl();
  };

  return (
    <button
      onClick={handleLogin}
      className="w-full p-3 bg-yellow-300 rounded-lg font-bold"
    >
      카카오로 로그인
    </button>
  );
}
