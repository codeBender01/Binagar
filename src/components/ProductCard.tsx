import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import AnimatedButton from "./AnimatedButton";

import drill from "../assets/drill.png";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const ProductCard: FC = () => {
  const navigate = useNavigate();

  const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  return (
    <div
      className="min-w-[200px] w-[95%] border-[1px] border-borderGray p-[18px] rounded-[20px]"
      onClick={() => navigate("/product")}
    >
      <div className="w-[100%] h-[180px] bg-white rounded-[20px] relative">
        <img
          src={drill}
          alt="product"
          className="object-contain h-[100%] w-[100%] rounded-[4px]"
        />
        <div className="absolute top-3 right-3 bg-red text-white text-sm2 rounded-full h-[40px] w-[40px] flex items-center justify-center font-main">
          -50%
        </div>
      </div>

      <div className="mt-2 font-main font-semibold text-textBlack">
        Product title
      </div>
      <p className="text-sm font-main my-1">Lorem ipsum doller amet</p>

      <div className=" flex items-center gap-1">
        <span className="text-textBlack font-main font-bold text-md">
          21.60 m.
        </span>

        <span className="line-through text-gray text-sm2 mt-1 font-main">
          31.80 m.
        </span>
      </div>

      <div className="flex items-center mt-[14px] gap-2">
        <AnimatedButton />

        <div
          onClick={() => setIsFavoriteClicked(!isFavoriteClicked)}
          onMouseEnter={() => setIsFavoriteHovered(true)}
          onMouseLeave={() => setIsFavoriteHovered(false)}
          className="text-lightblue h-[36px] w-[36px] rounded-[6px] border-1 border-borderGray flex items-center justify-center hover:bg-white duration-200 cursor-pointer"
        >
          {isFavoriteClicked || isFavoriteHovered ? (
            <IoMdHeart size={24} />
          ) : (
            <IoMdHeartEmpty size={24} stroke="#000" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
