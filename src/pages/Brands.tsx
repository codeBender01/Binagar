import { FC } from "react";

import Carousel from "../components/Carousel";
import BrandBox from "../components/BrandBox";
import ProductCarousel from "../components/ProductCarousel";

const Brands: FC = () => {
  return (
    <div className="mt-4 w-[90%] mx-auto">
      <Carousel />
      <div className="mt-[28px] flex justify-between font-main font-bold text-lg">
        <div>Brand name</div>
        <div>view all</div>
      </div>
      <div className="flex justify-between gap-2">
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
      </div>
      <div className="mt-[28px] flex justify-between font-main font-bold text-lg">
        <div>Brand name</div>
        <div>view all</div>
      </div>
      <ProductCarousel />
      <div className="mt-[28px] flex justify-between font-main font-bold text-lg">
        <div>Brand name</div>
        <div>view all</div>
      </div>
      <ProductCarousel />
      <div className="mt-[28px] flex justify-between font-main font-bold text-lg">
        <div>Brand name</div>
        <div>view all</div>
      </div>
      <ProductCarousel />
      <div className="mt-[28px] flex justify-between font-main font-bold text-lg">
        <div>Brand name</div>
        <div>view all</div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default Brands;
