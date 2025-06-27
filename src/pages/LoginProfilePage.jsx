import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";

export default function LoginProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const username = watch("username", ""); //초기값 ""
  const age = watch("age", "");

  const onSubmit = (data) => {
    //백으로 데이터 보낼 코드
  };
  let navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-Background flex flex-col">
      <div className="pt-20 p-10">
        <h2 className=" font-bold text-3xl mb-14">정보를 입력해주세요</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-low flex">
            <p>닉네임을 알려주세요</p>
            <span className="text-[#FA6F0B] text-xl mt-[-5px] ml-1">*</span>
          </div>
          <TextInput
            placeholder="홍길동"
            name="username"
            required="닉네임 입력은 필수 입니다."
            register={register}
            maxLen={10}
            value={username}
            errors={errors}
          ></TextInput>
          <div className="flex-low flex">
            <p>나이를 알려주세요</p>
            <span className="text-[#FA6F0B] text-xl mt-[-5px] ml-1">*</span>
          </div>
          <TextInput
            placeholder="21"
            name="age"
            required="나이 입력은 필수 입니다."
            register={register}
            maxLen={3}
            value={age}
            errors={errors}
            type="number"
          ></TextInput>
        </form>
        <button
          className="w-full py-2 text-white text-sm rounded-lg border-none
             bg-gray-400 shadow-[inset_-8px_-8px_17px_rgba(0,0,0,0.7)]"
          onClick={() => navigate("/avatar/signup/auth")}
        >
          위치 정보를 인증해주세요
        </button>
      </div>
    </div>
  );
}
