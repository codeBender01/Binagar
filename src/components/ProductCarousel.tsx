import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

import "swiper/css";

import { ProductType } from "../interfaces/product.interface";
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
    <div className="mt-8 flex flex-col gap-4">
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
            <div className="mt-[28px] mb-2 flex justify-between font-main font-bold text-lg">
              <div>{c.name.tm}</div>
              {items.length <= 4 ? null : (
                <div className="text-sm text-primary border-primary border bg-white rounded-lg p-2 cursor-pointer hover:bg-primary hover:text-white duration-200">
                  hemmesini görmek
                </div>
              )}
            </div>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                1100: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 2,
                },
              }}
              loop
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
