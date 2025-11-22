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
            className="flex flex-col items-center bg-cardBg h-[105px] font-main text-sm rounded-xl justify-center gap-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer backdrop-blur-sm"
            style={{ 
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-borderGray)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <div className="bg-gray-200 dark:bg-gray-700 h-[80px] w-[80px] rounded-lg overflow-hidden">
              <img
                src={turner}
                className="object-contain w-[100%] h-[100%] p-2"
                alt=""
              />
            </div>

            <div className="text-center line-clamp-1 px-2" style={{ color: 'inherit' }}>{b.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandsList;
