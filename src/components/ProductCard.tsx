import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import drill from "../assets/drill.png";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard: FC = () => {
  const navigate = useNavigate();

  const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  return (
    <div
      className="w-[95%] border-[1px] border-borderGray p-[18px] rounded-[4px]"
      onClick={() => navigate("/product")}
    >
      <div className="w-[100%] bg-white rounded-[4px] relative">
        <img src={drill} alt="product" className="object-cover rounded-[4px]" />
        <div className="absolute top-3 right-3 bg-red text-white text-sm2 rounded-full h-[40px] w-[40px] flex items-center justify-center font-main">
          -50%
        </div>
      </div>

      <div className="mt-4 mb-[10px] font-main font-semibold text-textBlack">
        Product title
      </div>
      <p className="text-sm font-main">Lorem ipsum doller amet</p>

      <div className="mt-6 flex items-center gap-1">
        <span className="text-textBlack font-main font-bold text-md">
          21.60 m.
        </span>

        <span className="line-through text-gray text-sm2 mt-1 font-main">
          31.80 m.
        </span>
      </div>

      <div className="flex items-center mt-[14px] gap-2">
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
        <Button className="bg-lightblue text-white h-[36px] border-none flex-1 hover:text-lightblue hover:bg-white duration-200 cursor-pointer">
          <MdOutlineShoppingCart size={22} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
