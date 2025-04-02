import { FC } from "react";
import { useNavigate } from "react-router-dom";

import turner from "../assets/whiting-turner-logo-vector.png";
import skanska from "../assets/Skanska-Logo.wine.png";
import bou from "../assets/Bouygues-Logo.wine.png";
import fluor from "../assets/Fluor-logo-square.webp";
import kiewit from "../assets/Kiewit-Logo-wPKS-768x432.png";

const BrandsList: FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" mb-2 flex flex-wrap gap-2 lg:gap-0">
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={turner} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img
          src={skanska}
          className="object-contain w-[100%] h-[100%]"
          alt=""
        />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={bou} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={fluor} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={kiewit} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={turner} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img
          src={skanska}
          className="object-contain w-[100%] h-[100%]"
          alt=""
        />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={bou} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center  w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={fluor} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
      <div
        onClick={() => navigate("/brands")}
        className="flex flex-col items-center mx-0 sm:mx-auto w-[48%] sm:w-[32%] md:w-[19%] lg:w-[10%] border-r-[1px] border-white bg-white text-white h-[105px] font-main text-[18px] justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200"
      >
        <img src={kiewit} className="object-contain w-[100%] h-[100%]" alt="" />
      </div>
    </div>
  );
};

export default BrandsList;
