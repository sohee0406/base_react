import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="h-20 flex items-center px-8 gap-4">
        <Link
          to="/Login"
          className="px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          로그인
        </Link>

        <Link
          to="/SignUp"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}
