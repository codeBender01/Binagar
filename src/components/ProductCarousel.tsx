import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

import "swiper/css";

const ProductCarousel: FC = () => {
  return (
    <div className="mt-6">
      <Swiper slidesPerView={4} loop>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
