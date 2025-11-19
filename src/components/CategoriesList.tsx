import { FC } from "react";

import { Category } from "../interfaces/categories.interface";
import { BiCategory } from "react-icons/bi";

export interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: FC<CategoriesListProps> = ({ categories }) => {
  return (
    <div className="mb-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {categories.map((c) => {
        return (
          <div
            key={c.id}
            className="flex flex-col items-center border border-borderGray h-[105px] font-main text-sm rounded-lg justify-center gap-2 cursor-pointer  transform transition-all duration-500 hover:shadow-[2px_10px_15px_0px_rgba(0,_0,_0,_0.1)]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {c.imageUrl ? (
              <div className="bg-gray-300 h-[40px] w-[40px]">
                <img src={c.imageUrl} alt="" />
              </div>
            ) : (
              <div className="bg-primary text-white p-3 rounded-lg">
                <BiCategory size={24} />
              </div>
            )}

            <div
              className="text-center line-clamp-1"
              style={{ color: "inherit" }}
            >
              {c.name.tm}
            </div>
          </div>
        );
      })}

      <div
        className="flex flex-col items-center border border-borderGray h-[105px] font-main text-sm rounded-lg justify-center gap-2  hover:opacity-95 hover:scale-110 transition-all duration-200 cursor-pointer"
        style={{ color: "var(--color-text-primary)" }}
      >
        <div className="bg-primary text-white p-3 rounded-lg">
          <BiCategory size={24} />
        </div>

        <div className="text-center line-clamp-1" style={{ color: "inherit" }}>
          Hemmesini görmek
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
