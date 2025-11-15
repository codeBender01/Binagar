import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import AnimatedButton from "./AnimatedButton";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { OneSeparateProduct } from "../interfaces/product.interface";

import drill from "../assets/drill.png";
import blue from "../assets/blue.jpg";
import { OneSeparateService } from "../interfaces/service.interface";

interface ProductCardProps {
  product: OneSeparateProduct | OneSeparateService;
  isService: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ product, isService }) => {
  const navigate = useNavigate();

  const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  return (
    <div
      className="min-w-[200px] w-[95%] border-[1px] border-gray-200 bg-appBarColor p-[18px] flex flex-col justify-between rounded-[20px]"
      onClick={() => navigate("/product")}
    >
      <div className="w-[100%] h-[180px] bg-gray-300 rounded-[20px] relative">
        <img
          src={isService ? blue : drill}
          alt="product"
          className="object-contain h-[100%] w-[100%] rounded-[4px]"
        />

        <div className="absolute top-3 right-3 bg-red text-white text-sm2 rounded-full h-[40px] w-[40px] flex items-center justify-center font-main"></div>
      </div>

      <div className="mt-2 font-main font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        {product.name_tm}
      </div>
      <p className="text-sm font-main my-1" style={{ color: 'var(--color-text-secondary)' }}>Lorem ipsum doller amet</p>

      <div className=" flex items-center gap-1">
        <span className="font-main font-bold text-md" style={{ color: 'var(--color-text-primary)' }}>
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
          className="text-white hover:text-primary h-[36px] w-[36px] rounded-[6px] border-1 bg-primary border-gray-300 flex items-center justify-center hover:bg-white duration-200 cursor-pointer"
        >
          {isFavoriteClicked || isFavoriteHovered ? (
            <IoMdHeart size={24} />
          ) : (
            <IoMdHeartEmpty size={24} style={{ stroke: 'var(--color-text-primary)' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
