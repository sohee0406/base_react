import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  console.log(isValid);

  const onSubmit = (data) => {
    // console.log(data);
    // =>유저가 인풋에 입력한 내용을 객체로 반환 받음
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] w-full p-12 bg-white rounded-xl shadow flex flex-col"
      >
        <h1 className="font-bold text-3xl mb-[15px]">SignUp</h1>

        <input
          {...register("name", {
            required: "이름 필수 입니다.",
          })}
          className="w-full p-2 mt-2 rounded-md border border-slate-300"
          type="text"
          placeholder="이름"
        />
        <ErrorMessage message={errors?.name?.message} />

        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 8,
              message: "아이디는 최소 8글자 입니다.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
              message: "영문과 숫자를 포함해야 합니다.",
            },
          })}
          className="w-full p-2 mt-2 rounded-md border border-slate-300"
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage message={errors?.username?.message} />

        <input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 최소 8글자 입니다.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
              message: "영문과 숫자를 포함해야 합니다.",
            },
          })}
          className="w-full p-2 mt-2 rounded-md border border-slate-300"
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage message={errors?.password?.message} />

        <input
          {...register("email", {
            required: "이메일은 필수 입니다.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          className="w-full p-2 mt-2 rounded-md border border-slate-300"
          type="email"
          placeholder="이메일"
        />
        <ErrorMessage message={errors?.email?.message} />

        <button
          className={`w-full rounded-md p-2 font-bold text-white mt-4 cursor-pointer transition
            ${isValid ? " bg-blue-500 hover:bg-blue-600" : "bg-blue-300"}`}
        >
          Login
        </button>

        <div className="mt-5 flex justify-center items-center ">
          <h1>계정이 있으신가요?</h1>
          <span className=" ml-1 text-blue-600 cursor-pointer">
            <Link to={"/Login"}>로그인 →</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
