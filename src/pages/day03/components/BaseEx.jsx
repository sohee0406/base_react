import { X } from "lucide-react";
export default function BaseEx() {
  return (
    <div className="w-[680px] h-[360px] bg-[#6b6b6b] opacity-90 rounded-[40px] m-auto mt-[50px] p-[25px] flex">
      <div className="w-[300px] h-[100%] bg-amber-50 rounded-2xl mr-[20px]">
        <X />
      </div>

      <div className="flex-col  text-white">
        <div className="text-[14px] opacity-60">iphone</div>
        <div className="text-[20px]">P. S. I LOVE YOU</div>
        <div className="text-[16px] opacity-60">
          Paul Partohap - P. S. I LOVE YOU
        </div>
        <div className="flex justify-center items-center ">
          <div className="">1.23</div>
          <div className="w-[250px] h-[7px] relative rounded-4xl">
            <div className="w-[250px] h-[7px] bg-amber-50 mx-[10px] opacity-50 rounded-4xl"></div>
            <div className="w-[100px] h-[7px] bg-amber-50 mx-[10px] absolute top-0 left-0 rounded-l-4xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
