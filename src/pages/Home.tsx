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
    <div className="mt-4 w-[90%] mx-auto">
      <Carousel />

      <div className="text-[32px] flex items-center justify-center gap-2 font-geo mt-8 mb-4" style={{ color: 'var(--color-text-primary)' }}>
        <BiCategory />
        Kategoriýalar
      </div>
      <CategoriesList
        categories={
          categories ? categories.filter((c) => c.type === "PRODUCT") : []
        }
      />

      <div className="text-[32px] flex items-center justify-center gap-2 font-geo mt-8 mb-4" style={{ color: 'var(--color-text-primary)' }}>
        <TbBrandAppgallery />
        Brendlar
      </div>
      <BrandsList brands={brands ? brands : []} />

      <ProductCarousel products={products ? products.categories : []} />
    </div>
  );
};

export default Home;
