import { useState } from "react";
import { dataEx } from "../data/data";
export default function Ex02() {
  // 전체를 클릭하면 데이터 배열 전체를 반환/
  // 특정 탭메뉴를 클릭하면 해당 탭메뉴에 이름에 맞는 데이터를 필터링 처리하여 반환
  const [filter, setfilter] = useState("all");

  const filterList =
    filter === "all"
      ? dataEx
      : dataEx.filter((item) => item.category === filter);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-300 space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setfilter("all")}
          className={`
            px-3 py-1 rounded cursor-pointer
            ${filter === "all" ? " bg-red-400  text-white" : " bg-white text-black"}`}
        >
          전체
        </button>

        <button
          onClick={() => setfilter("portal")}
          className={`
            px-3 py-1 rounded cursor-pointer
            ${filter === "portal" ? " bg-red-400  text-white" : " bg-white text-black"}`}
        >
          포털
        </button>

        <button
          onClick={() => setfilter("video")}
          className={`
            px-3 py-1 rounded cursor-pointer
            ${filter === "video" ? " bg-red-400  text-white" : " bg-white text-black"}`}
        >
          영상
        </button>

        <button
          onClick={() => setfilter("sns")}
          className={`
            px-3 py-1 rounded cursor-pointer
            ${filter === "sns" ? " bg-red-400  text-white" : " bg-white text-black"}`}
        >
          sns
        </button>
      </div>

      <div className="w-80 space-y-3">
        {filterList.map((item) => (
          <a
            key={item.id}
            className="block bg-white p-4 rounded-lg shadow"
            href={item.link}
          >
            <h2 className="text-[22px] font-bold">{item.name}</h2>
            <p className="text-gray-500 mt-4">{item.dsc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
