import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AnimatedButton from "./AnimatedButton";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import type { OneSeparateProduct } from "../interfaces/products";
import drill from "../assets/drill.png";
import blue from "../assets/blue.jpg";
import type { OneSeparateService } from "../interfaces/service.interface";
import { RootState } from "../store";
import { toggleLike } from "../store/likedSlice";
import { addToBasket } from "../store/basketSlice";

interface ProductCardProps {
  product: OneSeparateProduct | OneSeparateService;
  isService: boolean;
  onFavoriteToggle?: (productId: string) => void;
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  isService,
  onFavoriteToggle,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Check if product is liked from Redux store
  const likedProducts = useSelector((state: RootState) => state.liked.items);
  const isLikedInStore = likedProducts.some((p) => p.id === product.id);
  
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Only allow liking products, not services for now (as per interface mismatch)
    if (!isService) {
      dispatch(toggleLike(product as OneSeparateProduct));
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
    
    if (onFavoriteToggle) {
      onFavoriteToggle(product.id);
    }
  };

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isService) {
      dispatch(addToBasket(product as OneSeparateProduct));
    }
  };

  return (
    <div
      className="min-w-[200px] w-[97%] bg-cardBg p-[18px] flex flex-col justify-between rounded-2xl backdrop-blur-sm hover:shadow-lg transition-all duration-300"
      onClick={() => navigate(`/home/product/${product.id}`, { state: { product } })}
      style={{
        border: "1px solid var(--color-borderGray)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="w-[100%] h-[180px] bg-gray-100 dark:bg-gray-800 rounded-2xl relative overflow-hidden">
        <img
          src={isService ? blue : drill}
          alt="product"
          className="object-contain h-[100%] w-[100%] rounded-[4px] p-4"
        />

        <div className="absolute top-3 right-3 bg-red text-white text-sm2 rounded-full h-[40px] w-[40px] flex items-center justify-center font-main"></div>
      </div>

      <div
        className="mt-2 font-main font-semibold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {product.name_tm}
      </div>
      <p
        className="text-sm font-main my-1"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Lorem ipsum doller amet
      </p>

      <div className=" flex items-center gap-1">
        <span
          className="font-main font-bold text-md"
          style={{ color: "var(--color-text-primary)" }}
        >
          21.60 m.
        </span>

        <span className="line-through text-gray text-sm2 mt-1 font-main">
          31.80 m.
        </span>
      </div>

      <div className="flex items-center mt-[14px] gap-2">
        <AnimatedButton onClick={handleAddToBasket} />

        <div
          onClick={handleLikeClick}
          onMouseEnter={() => setIsFavoriteHovered(true)}
          onMouseLeave={() => setIsFavoriteHovered(false)}
          className={`text-white hover:text-primary h-[36px] w-[36px] rounded-lg bg-primary border-gray-300 flex items-center justify-center hover:bg-white transition-all duration-300 cursor-pointer ${isAnimating ? 'animate-like' : ''}`}
        >
          {isLikedInStore || isFavoriteHovered ? (
            <IoMdHeart size={24} />
          ) : (
            <IoMdHeartEmpty
              size={24}
              style={{ stroke: "var(--color-text-primary)" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
