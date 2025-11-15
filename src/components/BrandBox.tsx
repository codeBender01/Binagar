import { FC } from "react";

import skanska from "../assets/Skanska-Logo.wine.png";
import bou from "../assets/Bouygues-Logo.wine.png";
import fluor from "../assets/Fluor-logo-square.webp";
import kiewit from "../assets/Kiewit-Logo-wPKS-768x432.png";

const BrandBox: FC = () => {
  return (
    <div className="lg2:w-[100%] flex flex-col items-center mt-[60px] gap-4 font-main font-semibold" style={{ color: 'var(--color-text-primary)' }}>
      <div>Öý üçin</div>
      <div className="bg-cardBg flex items-center justify-center gap-2 flex-wrap py-8 w-[100%] rounded-[10px]">
        <div
          style={{
            boxShadow: "var(--shadow-brand)",
          }}
          className="border-borderGray border-[1px] h-[110px] w-[110px] flex items-center justify-center rounded-[10px] hover:scale-110 duration-200"
        >
          <img
            src={skanska}
            className="object-contain w-[100%] h-[100%] rounded-[10px]"
            alt=""
          />
        </div>
        <div
          style={{
            boxShadow: "var(--shadow-brand)",
          }}
          className="border-borderGray border-[1px] h-[110px] w-[110px] flex items-center justify-center rounded-[10px] hover:scale-110 duration-200"
        >
          <img
            src={bou}
            className="object-contain w-[100%] h-[100%] rounded-[10px]"
            alt=""
          />
        </div>
        <div
          style={{
            boxShadow: "var(--shadow-brand)",
          }}
          className="border-borderGray border-[1px] h-[110px] w-[110px] flex items-center justify-center rounded-[10px] hover:scale-110 duration-200"
        >
          <img
            src={fluor}
            className="object-contain w-[100%] h-[100%] rounded-[10px]"
            alt=""
          />
        </div>
        <div
          style={{
            boxShadow: "var(--shadow-brand)",
          }}
          className="border-borderGray border-[1px] h-[110px] w-[110px] flex items-center justify-center rounded-[10px] hover:scale-110 duration-200"
        >
          <img
            src={kiewit}
            className="object-contain w-[100%] h-[100%] rounded-[10px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BrandBox;
