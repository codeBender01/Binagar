import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

import "swiper/css";

import { ProductType } from "../interfaces/products";
import { ServiceType } from "../interfaces/service.interface";

export interface ProductCarouselProps {
  products: ProductType[] | ServiceType[];
}

const ProductCarousel: FC<ProductCarouselProps> = ({ products }) => {
  const hasProducts = (
    item: ProductType | ServiceType
  ): item is ProductType => {
    return "products" in item;
  };

  const hasServices = (
    item: ProductType | ServiceType
  ): item is ServiceType => {
    return "services" in item;
  };

  return (
    <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
      {products.map((c) => {
        const items = hasProducts(c)
          ? c.products
          : hasServices(c)
          ? c.services
          : [];

        const isServices = hasServices(c);

        if (items.length === 0) return null;

        return (
          <div key={c.id}>
            <div className="mt-4 sm:mt-[28px] mb-2 flex justify-between items-center font-main font-bold text-base sm:text-lg">
              <div style={{ color: 'var(--color-text-primary)' }}>{c.name.tm}</div>
              {items.length <= 4 ? null : (
                <div className="text-xs sm:text-sm text-primary border-primary border bg-white dark:bg-cardBg rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 whitespace-nowrap">
                  hemmesini görmek
                </div>
              )}
            </div>
            <Swiper
              slidesPerView={1.5}
              spaceBetween={7}
              loop
              breakpoints={{
                600: {
                  slidesPerView: 2.5,
                },
                768: {
                  slidesPerView: 3.5,
                },
                1100: {
                  slidesPerView: 4,
                },
              }}
            >
              {items.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="!h-auto !flex">
                    <ProductCard product={item} isService={isServices} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCarousel;
