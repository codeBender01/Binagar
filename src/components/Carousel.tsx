import { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";

import "swiper/css";
import "swiper/css/navigation";

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="w-[100%] flex justify-between">
      <div className=" w-[100%] lg2:w-[75%] h-[100%] relative">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "var(--color-text-inverse)",
              "--swiper-pagination-color": "var(--color-text-inverse)",
            } as React.CSSProperties
          }
          navigation
          modules={[Navigation, Pagination, Autoplay]}
          className="w-[100%] "
          autoplay={{
            delay: 4000,
          }}
          loop
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          <SwiperSlide>
            <div>
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[100%] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={img2}
                alt=""
                className="w-[100%] h-[100%] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={img3}
                alt=""
                className="w-[100%] h-[100%] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[100%] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center gap-2 absolute bottom-5 left-[50%] z-10 -translate-x-1/2">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="w-8 h-[4px] transition-all duration-300"
              style={{
                backgroundColor: index === activeIndex ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)'
              }}
              onClick={() => {
                swiper.slideTo(index);
              }}
            ></span>
          ))}
        </div>
      </div>
      <Swiper
        direction={"vertical"}
        className="lg2:flex hidden w-[20%] h-[550px]"
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
        }}
      >
        <SwiperSlide>
          <div
            className="w-[100%] mb-2"
            style={{
              height: `calc(550px / 4 - 15px)`,
            }}
          >
            <img
              src={img1}
              alt=""
              className="object-cover w-[100%] rounded-[10px] h-[100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-[100%] mb-2"
            style={{
              height: "calc(550px / 4 - 15px)",
            }}
          >
            <img
              src={img2}
              alt=""
              className="object-cover w-[100%] rounded-[10px] h-[100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-[100%] mb-2"
            style={{
              height: "calc(550px / 4 - 15px)",
            }}
          >
            <img
              src={img3}
              alt=""
              className="object-cover w-[100%] rounded-[10px] h-[100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-[100%] mb-2"
            style={{
              height: "calc(550px / 4 - 15px)",
            }}
          >
            <img
              src={img1}
              alt=""
              className="object-cover w-[100%] rounded-[10px] h-[100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-[100%] mb-2"
            style={{
              height: "calc(550px / 4 - 15px)",
            }}
          >
            <img
              src={img2}
              alt=""
              className="object-cover w-[100%] rounded-[10px] h-[100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-[100%] mb-2"
            style={{
              height: "calc(550px / 4 - 15px)",
            }}
          >
            <img
              src={img3}
              alt=""
              className="object-cover w-[100%] rounded-[10px] h-[100%]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
