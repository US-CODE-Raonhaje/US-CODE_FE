import { GoogleLogin } from "@react-oauth/google";

export default function GoogleBtn() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        // credentialResponse.credential (JWT) 백엔드로 전달
        console.log(credentialResponse);
      }}
      onError={() => {
        alert("구글 로그인 실패");
      }}
      useOneTap // 원탭 로그인 옵션(선택)
    />
  );
}
