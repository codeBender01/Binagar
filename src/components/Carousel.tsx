import { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import img1 from "../assets/img1.png";

import "swiper/css";
import "swiper/css/navigation";

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="w-[100%] flex justify-between">
      <div className="w-[75%] h-[550px] relative">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          navigation
          modules={[Navigation, Pagination]}
          className="w-[100%] h-[550px]"
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
            <div className="w-[100%] h-[550px]">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[100%] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[550px]">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[100%] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[550px]">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[100%] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[550px]">
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
              className={`w-8 h-[4px] transition-all duration-300 ${
                index === activeIndex ? "bg-white" : "bg-[#C2C0C1]"
              }`}
              onClick={() => {
                swiper.slideTo(index);
              }}
            ></span>
          ))}
        </div>
      </div>
      <Swiper
        direction={"vertical"}
        className="w-[20%] h-[550px]"
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
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
              src={img1}
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
