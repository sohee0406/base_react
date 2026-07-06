import { useState } from "react";

export default function Ex01() {
  const [like, setLike] = useState(false);
  const onLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg flex flex-col items-center shadow-2xl justify-center gap-4 w-60 p-6">
        <button
          onClick={onLike}
          className={"text-6xl cursor-pointer transition"}
        >
          {like ? "🤍" : "❤"}
        </button>

        <div className="text-2xl">{like ? "좋아요 안눌림" : "좋아요 눌림"}</div>
      </div>
    </div>
  );
}
