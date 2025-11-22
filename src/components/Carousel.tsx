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
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
          clearInterval(progressIntervalRef.current!);
          return 100; // Stay at 100% instead of resetting
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

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRefs.current[activeIndex] && containerRef.current) {
      const thumbnail = thumbnailRefs.current[activeIndex];
      const container = containerRef.current;
      
      if (thumbnail) {
        // If we're at the first item, always scroll to the top
        if (activeIndex === 0) {
          container.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          // For other items, calculate the position relative to the container
          const thumbnailTop = thumbnail.offsetTop;
          const thumbnailHeight = thumbnail.offsetHeight;
          const containerScrollTop = container.scrollTop;
          const containerHeight = container.clientHeight;
          
          // Calculate the center position for the thumbnail
          const centerPosition = thumbnailTop - (containerHeight / 2) + (thumbnailHeight / 2);
          
          // Always scroll to center the active thumbnail
          container.scrollTo({
            top: Math.max(0, centerPosition),
            behavior: 'smooth'
          });
        }
      }
    }
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
            pauseOnMouseEnter: false,
          }}
          speed={800}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onAutoplayPause={(swiper) => {
            // Force autoplay to resume - don't allow pausing
            swiper.autoplay.resume();
          }}
        >
          {mainSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full overflow-hidden bg-gray-900">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  style={{
                    animation: "ken-burns-zoom 10s ease-out infinite alternate",
                  }}
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-black/20" />
                


              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Glassmorphism navigation buttons styling */}
        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            background: var(--glass-bg-strong);
            width: 48px;
            height: 48px;
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            backdrop-filter: blur(var(--backdrop-blur));
            -webkit-backdrop-filter: blur(var(--backdrop-blur));
            box-shadow: var(--glass-shadow);
            border: 1px solid var(--glass-border);
          }
          
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 18px;
            font-weight: 800;
            color: #ffffff;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          .swiper:hover .swiper-button-prev,
          .swiper:hover .swiper-button-next {
            opacity: 1;
          }
          
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: scale(1.1);
            box-shadow: var(--shadow-glass);
          }

          .swiper-button-prev:active,
          .swiper-button-next:active {
            transform: scale(1);
          }

          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: var(--glass-bg-strong);
            opacity: 0.7;
            transition: all 0.3s ease;
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(var(--backdrop-blur));
            -webkit-backdrop-filter: blur(var(--backdrop-blur));
          }

          .swiper-pagination-bullet-active {
            background: #6366f1;
            width: 28px;
            border-radius: 5px;
            opacity: 1;
            box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
          }
        `}</style>
      </div>

      {/* Side Promotional Banners - Right Side with Timeline */}
      <div ref={containerRef} className="hidden lg2:flex lg2:flex-col lg2:w-[15%] gap-3 overflow-y-auto max-h-[280px] sm:max-h-[350px] md:max-h-[420px] lg:max-h-[480px]" style={{ scrollbarWidth: 'thin' }}>
        {sidePromos.slice(0, 5).map((promo, index) => {
          const isActive = index === activeIndex;
          
          return (
            <div
              key={promo.id}
              ref={(el) => { thumbnailRefs.current[index] = el; }}
              onClick={() => handleThumbnailClick(index)}
              className={`relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                isActive 
                  ? "ring-2 ring-indigo-500 shadow-lg" 
                  : "ring-1 ring-transparent hover:ring-indigo-400"
              }`}
              style={{
                height: "110px",
                flexShrink: 0,
                background: isActive 
                  ? "rgba(99, 102, 241, 0.15)"
                  : "var(--glass-bg)",
                backdropFilter: "blur(var(--backdrop-blur))",
                WebkitBackdropFilter: "blur(var(--backdrop-blur))",
                border: "1px solid var(--glass-border)",
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={promo.img}
                  alt={promo.alt}
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    isActive 
                      ? "scale-105 brightness-105" 
                      : "group-hover:scale-105 group-hover:brightness-105"
                  }`}
                />
                
                {/* Active overlay */}
                {isActive && (
                  <div 
                    className="absolute inset-0 bg-indigo-500/10"
                    style={{
                      animation: "glass-glow 2s ease-in-out infinite",
                    }}
                  />
                )}
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                }`} />
                


                {/* Badge for first item */}
                {/* {index === 0 && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg z-10">
                    TÄZELİK
                  </div>
                )} */}

                {/* Timeline Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/15">
                  <div
                    className={`h-full bg-indigo-500 transition-all duration-100 ease-linear`}
                    style={{
                      width: isActive ? `${progress}%` : "0%",
                    }}
                  />
                </div>


              </div>


            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
