import { FC } from "react";

import { FaScrewdriver } from "react-icons/fa";
import { MdOutlineConstruction, MdOutlinePlumbing } from "react-icons/md";
import { BsBricks } from "react-icons/bs";

const CategoriesList: FC = () => {
  return (
    <div className=" mb-2 flex flex-wrap gap-2 lg:gap-0">
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-mainBlue text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200">
        <div>
          <FaScrewdriver size={32} />
        </div>
        <div>Gurallar</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white h-[105px] bg-mainBlue text-white font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <MdOutlineConstruction size={32} />
        </div>
        <div>Gurluşyk</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white h-[105px] bg-mainBlue text-white font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <MdOutlinePlumbing size={32} />
        </div>
        <div>Santehnika</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white h-[105px] bg-mainBlue text-white font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <BsBricks size={32} />
        </div>
        <div>Lomaý</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-mainBlue text-white h-[105px] font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <FaScrewdriver size={32} />
        </div>
        <div>Gurallar</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white h-[105px] bg-mainBlue text-white font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <MdOutlineConstruction size={32} />
        </div>
        <div>Gurluşyk</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white h-[105px] bg-mainBlue text-white font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <MdOutlinePlumbing size={32} />
        </div>
        <div>Santehnika</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white h-[105px] bg-mainBlue text-white font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <BsBricks size={32} />
        </div>
        <div>Lomaý</div>
      </div>
      <div className="flex flex-col items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-mainBlue text-white h-[105px] font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <FaScrewdriver size={32} />
        </div>
        <div>Gurallar</div>
      </div>
      <div className="flex flex-col mx-0 sm:mx-auto items-center w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white h-[105px] bg-mainBlue text-white font-main text-[18px] hover:opacity-95 hover:scale-110 duration-200 cursor-pointer justify-center gap-2">
        <div>
          <MdOutlineConstruction size={32} />
        </div>
        <div>Gurluşyk</div>
      </div>
    </div>
  );
};

export default CategoriesList;
