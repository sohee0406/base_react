import { useState } from "react";

export default function StateEx01() {
  // let num = 0;
  // const plusHandler = () => {
  //   console.log(num);
  //   return num++;
  // };
  // => 사용할 수 없음

  const [num, setNum] = useState(0);
  // =>리액트 상태관리를 해줌, 변수를 변경하고 싶을때 사용
  // =>state는 컴포넌트 대부에서 관리하는 값임
  // =>hook 이라고 함. 앞에 use 가 붙으면 다 hook임

  // const plusHandler = () => {
  //   setNum(num + 1);
  // };

  // const minusHandler = () => {
  //   setNum(num - 1);
  // };

  // --------------------------------------------------------------

  // const plusHandler = () => setNum(num + 1);
  // const minusHandler = () => setNum(num - 1);

  // --------------------------------------------------------------

  const plusHandler = () => setNum((prev) => prev + 1);
  const minusHandler = () => setNum((prev) => prev - 1);
  // =>미래 지향적으로 더 좋은 방법임

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center gap-4 w-44">
        <div className="text-4xl font-bold text-black">{num}</div>

        <div className="flex items-center gap-3">
          <button
            onClick={plusHandler}
            className="flex px-6 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition cusrsor-pointer active:scale-55%"
          >
            +
          </button>
          <button
            onClick={minusHandler}
            className="flex px-6 py-2 font-bold text-white bg-red-500 rounded-lg  hover:bg-red-600 transition cusrsor-pointer active:scale-55%"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
