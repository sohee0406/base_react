import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1 className="font-bold text-6xl h-screen flex flex-col justify-center items-center">
        ErrorPage
      </h1>
      <div className=" flex flex-col justify-center items-center mt-4">
        <p>잘못된 경로 입니다 홈으로 이동해 주세요.</p>
        <Link to={"/"} className="text-blue-500">
          홈으로 이동하기 &rarr;
        </Link>
      </div>
    </div>
  );
}
