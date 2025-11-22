import { FC, useState, useRef, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const mainSlides = [
    { id: 1, img: img1, alt: "Banner 1" },
    { id: 2, img: img2, alt: "Banner 2" },
    { id: 3, img: img3, alt: "Banner 3" },
    { id: 4, img: img1, alt: "Banner 4" },
    { id: 5, img: img2, alt: "Banner 4" },
  ];

  const sidePromos = [
    { id: 1, img: img1, alt: "Promo 1" },
    { id: 2, img: img2, alt: "Promo 2" },
    { id: 3, img: img3, alt: "Promo 3" },
    { id: 4, img: img1, alt: "Promo 4" },
    { id: 5, img: img2, alt: "Promo 4" },
  ];

  // Handle timeline progress animation
  useEffect(() => {
    setProgress(0);
    
    // Clear any existing interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Animate progress bar from 0 to 100 over 5 seconds
    const duration = 5000; // 5 seconds to match autoplay delay
    const intervalTime = 50; // Update every 50ms for smooth animation
    const increment = (100 / duration) * intervalTime;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset when complete
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [activeIndex]);

  const handleThumbnailClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="w-full flex gap-3">
      {/* Main Carousel - Left Side */}
      <div className="w-full lg2:w-[85%] relative group">
        <Swiper
          style={
            {
              "--swiper-navigation-size": "44px",
              "--swiper-navigation-color": "#ffffff",
              "--swiper-navigation-sides-offset": "16px",
            } as React.CSSProperties
          }
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {mainSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  style={{
                    animation: "ken-burns-zoom 10s ease-out infinite alternate",
                  }}
                />
                {/* Multi-layer gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
                
                {/* Shimmer effect overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "1000px 100%",
                    animation: "shimmer 3s infinite",
                  }}
                />

                {/* Badge overlay */}
                {slide.badge && (
                  <div className="absolute top-6 left-6 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-2xl backdrop-blur-sm bg-opacity-95 border border-red-400/30"
                    style={{
                      animation: "fade-in-up 0.6s ease-out",
                    }}
                  >
                    {slide.badge}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced navigation buttons styling with glassmorphism */}
        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            background: rgba(255, 255, 255, 0.15);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 
                        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 20px;
            font-weight: 900;
            color: #ffffff;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }

          .swiper:hover .swiper-button-prev,
          .swiper:hover .swiper-button-next {
            opacity: 1;
          }
          
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: scale(1.15);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 
                        0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                        0 0 20px rgba(99, 102, 241, 0.4);
          }

          .swiper-button-prev:active,
          .swiper-button-next:active {
            transform: scale(1.05);
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            width: 32px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.6),
                        0 0 20px rgba(139, 92, 246, 0.4);
          }
        `}</style>
      </div>

      {/* Side Promotional Banners - Right Side with Timeline */}
      <div className="hidden lg2:flex lg2:flex-col lg2:w-[15%] gap-3">
        {sidePromos.slice(0, 4).map((promo, index) => {
          const isActive = index === activeIndex;
          
          return (
            <div
              key={promo.id}
              onClick={() => handleThumbnailClick(index)}
              className={`relative group overflow-hidden rounded-xl cursor-pointer flex-1 transition-all duration-500 ${
                isActive 
                  ? "ring-4 ring-indigo-500 shadow-2xl" 
                  : "ring-2 ring-transparent hover:ring-indigo-300"
              }`}
              style={{
                minHeight: "110px",
                background: isActive 
                  ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))"
                  : "linear-gradient(135deg, rgba(243, 244, 246, 0.5), rgba(229, 231, 235, 0.5))",
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={promo.img}
                  alt={promo.alt}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    isActive 
                      ? "scale-105 brightness-110" 
                      : "group-hover:scale-110 group-hover:brightness-105"
                  }`}
                />
                
                {/* Active glow overlay */}
                {isActive && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent"
                    style={{
                      animation: "glow-pulse 2s ease-in-out infinite",
                    }}
                  />
                )}
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                }`} />
                
                {/* Shimmer effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    backgroundSize: "200px 100%",
                    animation: "shimmer 1.5s infinite",
                  }}
                />

                {/* Badge for first item */}
                {/* {index === 0 && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg z-10">
                    TÄZELİK
                  </div>
                )} */}

                {/* Timeline Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 backdrop-blur-sm">
                  <div
                    className={`h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100 ease-linear relative overflow-hidden`}
                    style={{
                      width: isActive ? `${progress}%` : "0%",
                    }}
                  >
                    {/* Animated shine on progress bar */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      style={{
                        animation: "shimmer 1s infinite",
                      }}
                    />
                  </div>
                </div>

                {/* Active indicator with number */}
                <div className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isActive 
                    ? "bg-indigo-600 text-white shadow-lg scale-110" 
                    : "bg-white/80 text-gray-700 backdrop-blur-sm"
                }`}>
                  {index + 1}
                </div>
              </div>

              {/* Outer glow effect for active slide */}
              {isActive && (
                <div 
                  className="absolute -inset-1 rounded-xl opacity-75 blur-md -z-10"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
                    animation: "glow-pulse 2s ease-in-out infinite",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
