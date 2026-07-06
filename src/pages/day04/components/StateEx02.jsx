import { useState } from "react";

export default function StateEx02() {
  const [count, setCount] = useState(1);

  const price = 12000;
  const total_price = count * price;

  const handPlus = () => setCount((prev) => prev + 1);
  const handMinus = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-64 text-center space-y-4">
        <h1 className="text-3xl font-bold">상품 수량</h1>
        <div className="text-3xl font-bold">{count}</div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={handMinus}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
          >
            -
          </button>

          <button
            onClick={handPlus}
            className="px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
          >
            +
          </button>
        </div>
        <div className="text-gray-700 opacity-70">
          단가: {price.toLocaleString()}원
          {/* => 숫자 000,000 세자리 마다 콤마 찍어준다 */}
        </div>

        <div className="text-2xl font-bold text-green-500">
          총 {total_price.toLocaleString()}원
        </div>
      </div>
    </div>
  );
}
