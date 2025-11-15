import { FC } from "react";

import { Button } from "antd";

import drill from "../assets/drill.png";

import { MdOutlineShoppingCart } from "react-icons/md";

const Product: FC = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="mt-12 font-geo font-light">
        <span className="text-gray">Home</span> /{" "}
        <span className="text-gray">Category</span> / Product
      </div>
      <div className="text-[32px] md:text-[48px] md2:mb-4 font-bold font-geo" style={{ color: 'var(--color-text-primary)' }}>
        Product title
      </div>

      <div className="flex flex-col gap-4 md2:flex-row md2:gap-0 md2:justify-between items-center">
        <div className="h-[500px] md2:h-[550px] w-[100%] md2:w-[45%] lg:w-[55%] bg-cardBg rounded-[4px]">
          <img
            src={drill}
            alt=""
            className="w-[100%] h-[100%] object-contain"
          />
        </div>

        <div className="w-[100%] md2:w-[50%] lg:w-[40%] bg-cardBg rounded-3xl p-7 flex flex-col">
          <div className="font-geo text-[20px] font-medium">Umumy maglumat</div>
          <ul className="font-geo flex flex-col gap-[12px] mt-1.5">
            <li className="flex justify-between gap-2 items-center">
              <span className="text-gray3 font-light">Artikul</span>
              <span className="border-dashed flex-1 border-borderGray border-b-[1px] mt-[8px]"></span>
              <span>Product tittle</span>
            </li>
            <li className="flex justify-between gap-2 items-center">
              <span className="text-gray3 font-light">Kody</span>
              <span className="border-dashed flex-1 border-borderGray border-b-[1px] mt-[8px]"></span>
              <span>1010410304310</span>
            </li>
            <li className="flex justify-between gap-2 items-center">
              <span className="text-gray3 font-light">Sany</span>
              <span className="border-dashed flex-1 border-borderGray border-b-[1px] mt-[8px]"></span>
              <span>10</span>
            </li>
            <li className="flex justify-between gap-2 ">
              <span className="text-gray3 font-light">Mazmuny:</span>
              <span className="text-justify">
                Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum
                doller amet Lorem ipsum doller amet Lorem ipsum doller amet
                Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum
                doller amet
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row mt-4 justify-between items-center">
            <div className="text-lg font-geo font-bold self-start sm:self-center">
              50.90 tmt
            </div>
            <Button className="bg-lightblue text-white h-[36px] border-none w-[100%] sm:w-[45%] hover:text-lightblue hover:bg-white duration-200 cursor-pointer ">
              <MdOutlineShoppingCart size={22} />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-[24px] font-bold font-geo" style={{ color: 'var(--color-text-primary)' }}>
        Meňzeş harytlar
      </div>

      {/* <ProductCarousel /> */}
    </div>
  );
};

export default Product;
