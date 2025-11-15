import { FC } from "react";

import turner from "../assets/whiting-turner-logo-vector.png";
import { Brand } from "../interfaces/brands.interface";

interface BrandsListProps {
  brands: Brand[];
}

const BrandsList: FC<BrandsListProps> = ({ brands }) => {
  return (
    <div className="mb-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {brands.map((b) => {
        return (
          <div
            key={b.id}
            className="flex flex-col items-center border border-borderGray h-[105px] font-main text-sm rounded-lg justify-center gap-2 hover:opacity-95 hover:scale-110 duration-200 cursor-pointer"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <div className="bg-gray-300 h-[80px] w-[80px]">
              <img
                src={turner}
                className="object-contain w-[100%] h-[100%]"
                alt=""
              />
            </div>

            <div className="text-center line-clamp-1" style={{ color: 'inherit' }}>{b.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandsList;
