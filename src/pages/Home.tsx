import { FC } from "react";

import Carousel from "../components/Carousel";
import ProductCarousel from "../components/ProductCarousel";
import CategoriesList from "../components/CategoriesList";
import BrandsList from "../components/BrandsList";

import { BiCategory } from "react-icons/bi";
import { TbBrandAppgallery } from "react-icons/tb";

import {
  useGetAllCategoriesQuery,
  useGetAllCategoryProdutcsQuery,
} from "../services/categoriesClientApi";
import { useGetAllBrandsQuery } from "../services/brandsClientApi";

const Home: FC = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: brands } = useGetAllBrandsQuery();
  const { data: products } = useGetAllCategoryProdutcsQuery({
    type: "PRODUCT",
    page: 1,
    limit: 10,
  });

  return (
    <div className="mt-3 sm:mt-4 w-full sm:w-[95%] mx-auto mb-[75px] lg:mb-[0px] px-3 sm:px-0">
      <Carousel />

      <div
        className="text-[24px] sm:text-[28px] md:text-[32px] flex items-center justify-center gap-2 font-geo mt-6 sm:mt-8 mb-3 sm:mb-4"
        style={{ color: "var(--color-text-primary)" }}
      >
        <BiCategory className="text-[22px] sm:text-[28px] md:text-[32px]" />
        Kategoriýalar
      </div>
      <CategoriesList
        categories={
          categories ? categories.filter((c) => c.type === "PRODUCT") : []
        }
      />

      <div
        className="text-[24px] sm:text-[28px] md:text-[32px] flex items-center justify-center gap-2 font-geo mt-6 sm:mt-8 mb-3 sm:mb-4"
        style={{ color: "var(--color-text-primary)" }}
      >
        <TbBrandAppgallery className="text-[22px] sm:text-[28px] md:text-[32px]" />
        Brendlar
      </div>
      <BrandsList brands={brands ? brands : []} />

      <ProductCarousel products={products ? products.categories : []} />
    </div>
  );
};

export default Home;
