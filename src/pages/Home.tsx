import { FC } from "react";

import Carousel from "../components/Carousel";
import ProductCarousel from "../components/ProductCarousel";
import CategoriesList from "../components/CategoriesList";
import BrandsList from "../components/BrandsList";

import { BiCategory } from "react-icons/bi";
import { TbBrandAppgallery } from "react-icons/tb";

import drill from "../assets/drill.png";

const Home: FC = () => {
  return (
    <div className="mt-4 w-[90%] mx-auto">
      <Carousel />

      <div className="text-[32px] flex items-center justify-center gap-2 font-geo mt-8 mb-4">
        <BiCategory />
        Kategoriýalar
      </div>
      <CategoriesList />

      <div className="text-[32px] flex items-center justify-center gap-2 font-geo mt-8 mb-4">
        <TbBrandAppgallery />
        Brendlar
      </div>
      <BrandsList />

      <div className="mt-[28px] flex justify-between font-main font-bold text-lg">
        <div>Category name</div>
        <div>view all</div>
      </div>

      <ProductCarousel />

      <div className="flex justify-between my-[30px]">
        <div className="bg-white w-[48%] h-[240px] md:h-[360px] lg:h-[420px] rounded-[8px]">
          <img
            src={drill}
            alt=""
            className="w-[100%] object-contain h-[100%]"
          />
        </div>
        <div className="bg-white w-[48%] h-[240px] md:h-[360px] lg:h-[420px] rounded-[8px]">
          <img
            src={drill}
            alt=""
            className="w-[100%] object-contain h-[100%]"
          />
        </div>
      </div>
      <ProductCarousel />
      <div className="flex justify-between my-[30px]">
        <div className="bg-white w-[48%] h-[240px] md:h-[360px] lg:h-[420px] rounded-[8px]">
          <img
            src={drill}
            alt=""
            className="w-[100%] object-contain h-[100%]"
          />
        </div>
        <div className="bg-white w-[48%] h-[240px] md:h-[360px] lg:h-[420px] rounded-[8px]">
          <img
            src={drill}
            alt=""
            className="w-[100%] object-contain h-[100%]"
          />
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default Home;
