import { FC } from "react";

import Carousel from "../components/Carousel";
import ProductCarousel from "../components/ProductCarousel";
import CategoriesList from "../components/CategoriesList";

import { BiCategory } from "react-icons/bi";

import { useGetAllCategoriesQuery } from "../services/categoriesClientApi";
import { useGetAllServicesQuery } from "../services/servicesApi";

const Services: FC = () => {
  const { data: categories } = useGetAllCategoriesQuery();

  const { data: services } = useGetAllServicesQuery();

  return (
    <div className="mt-4 w-[90%] mx-auto">
      <Carousel />

      <div className="text-[32px] flex items-center justify-center gap-2 font-geo mt-8 mb-4">
        <BiCategory />
        Kategoriýalar
      </div>
      <CategoriesList
        categories={
          categories ? categories.filter((c) => c.type === "SERVICE") : []
        }
      />

      <ProductCarousel products={services ? services : []} />
    </div>
  );
};

export default Services;
