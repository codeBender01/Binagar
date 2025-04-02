import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

import "swiper/css";

const ProductCarousel: FC = () => {
  return (
    <div className="mt-6">
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
