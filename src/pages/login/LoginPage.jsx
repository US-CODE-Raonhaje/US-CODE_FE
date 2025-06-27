import { useNavigate } from "react-router-dom";
import KakaoBtn from "../../components/KakaoBtn";

export default function LoginPage() {
  let navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen bg-Background flex flex-col">
        <div className="flex-1 "></div>
        <KakaoBtn></KakaoBtn>
        <button
          className="h-14 bg-white flex justify-around items-center shadow text-black"
          onClick={() => navigate("/login/profile")}
        >
          카카오로그인
        </button>
      </div>
    </>
  );
}
