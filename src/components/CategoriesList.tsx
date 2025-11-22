import { FC } from "react";

import { Category } from "../interfaces/categories.interface";
import { BiCategory } from "react-icons/bi";

export interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: FC<CategoriesListProps> = ({ categories }) => {
  return (
    <div className="mb-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 transition-all duration-300">
      {categories.map((c) => {
        return (
          <div
            key={c.id}
            className="flex flex-col items-center bg-cardBg h-[105px] font-main text-sm rounded-xl justify-center gap-2 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02] backdrop-blur-sm"
            style={{ 
              color: "var(--color-text-primary)",
              border: "1px solid var(--color-borderGray)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            {c.imageUrl ? (
              <div className="bg-gray-300 h-[40px] w-[40px] rounded-lg overflow-hidden">
                <img src={c.imageUrl} alt="" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="bg-primary text-white p-3 rounded-xl shadow-sm">
                <BiCategory size={24} />
              </div>
            )}

            <div
              className="text-center line-clamp-1 px-2"
              style={{ color: "inherit" }}
            >
              {c.name.tm}
            </div>
          </div>
        );
      })}

      <div
        className="flex flex-col items-center bg-cardBg h-[105px] font-main text-sm rounded-xl justify-center gap-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer backdrop-blur-sm"
        style={{ 
          color: "var(--color-text-primary)",
          border: "1px solid var(--color-borderGray)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <div className="bg-primary text-white p-3 rounded-xl shadow-sm">
          <BiCategory size={24} />
        </div>

        <div className="text-center line-clamp-1 px-2" style={{ color: "inherit" }}>
          Hemmesini görmek
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
