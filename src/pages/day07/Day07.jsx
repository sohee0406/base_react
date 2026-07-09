import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function Day07() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}
// 로그인 회원가입 만들기
// 아이디 이메일 패스워드 이름
// 두페이지 버튼으로 왔다갔다 하는거
// 로그인 밑에 계정이 없으신가요? 회원가입 이런식으로 만들기
