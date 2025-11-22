import { FC, useState } from "react";

import drill from "../assets/drill.png";

import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBox } from "react-icons/fa6";

import "../components/AnimatedButton/index.css";

const Product: FC = () => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  return (
    <div className="w-full sm:w-[95%] md:w-[90%] mx-auto mb-8 md:mb-12 px-4 sm:px-0">
      {/* Breadcrumb */}
      <div className="mt-4 md:mt-8 font-geo font-light text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
        <span className="text-gray hover:text-primary transition-colors duration-300 cursor-pointer">Home</span>
        <span className="text-gray">/</span>
        <span className="text-gray hover:text-primary transition-colors duration-300 cursor-pointer">Category</span>
        <span className="text-gray">/</span>
        <span style={{ color: 'var(--color-text-primary)' }}>Product</span>
      </div>

      {/* Product Title */}
      <h1 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] mt-3 sm:mt-4 mb-4 sm:mb-6 font-bold font-geo leading-tight" style={{ color: 'var(--color-text-primary)' }}>
        Product title
      </h1>

      {/* Main Product Section */}
      <div className="flex flex-col gap-4 sm:gap-6 md2:flex-row md2:gap-6 items-start">
        {/* Product Image */}
        <div 
          className="h-[280px] sm:h-[350px] md:h-[400px] md2:h-[550px] w-[100%] md2:w-[45%] lg:w-[55%] bg-cardBg rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          style={{
            border: '1px solid var(--color-borderGray)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <img
            src={drill}
            alt="Product"
            className="w-[100%] h-[100%] object-contain p-4 sm:p-8 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Details Card */}
        <div 
          className="w-[100%] md2:w-[50%] lg:w-[40%] bg-cardBg rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          style={{
            border: '1px solid var(--color-borderGray)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {/* Details Section */}
          <div>
            <h2 className="font-geo text-[18px] sm:text-[20px] md:text-[22px] font-semibold mb-3 sm:mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Umumy maglumat
            </h2>
            <ul className="font-geo flex flex-col gap-2 sm:gap-3">
              <li className="flex justify-between gap-2 sm:gap-3 items-center py-1.5 sm:py-2 border-b border-borderGray/50">
                <span className="text-gray3 font-light text-xs sm:text-sm">Artikul</span>
                <span className="font-medium text-xs sm:text-sm text-right" style={{ color: 'var(--color-text-primary)' }}>Product tittle</span>
              </li>
              <li className="flex justify-between gap-2 sm:gap-3 items-center py-1.5 sm:py-2 border-b border-borderGray/50">
                <span className="text-gray3 font-light text-xs sm:text-sm">Kody</span>
                <span className="font-medium text-xs sm:text-sm" style={{ color: 'var(--color-text-primary)' }}>1010410304310</span>
              </li>
              <li className="flex justify-between gap-2 sm:gap-3 items-center py-1.5 sm:py-2 border-b border-borderGray/50">
                <span className="text-gray3 font-light text-xs sm:text-sm">Sany</span>
                <span className="font-medium text-xs sm:text-sm" style={{ color: 'var(--color-text-primary)' }}>10</span>
              </li>
              <li className="flex flex-col gap-1.5 sm:gap-2 py-1.5 sm:py-2">
                <span className="text-gray3 font-light text-xs sm:text-sm">Mazmuny:</span>
                <span className="text-justify text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum
                  doller amet Lorem ipsum doller amet Lorem ipsum doller amet
                  Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum
                  doller amet
                </span>
              </li>
            </ul>
          </div>

          {/* Price and Actions */}
          <div className="flex flex-col gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-borderGray/50">
            <div className="text-[28px] sm:text-[32px] font-geo font-bold" style={{ color: 'var(--color-primary)' }}>
              50.90 <span className="text-[18px] sm:text-[20px]">tmt</span>
            </div>
            
            <div className="flex gap-2 sm:gap-3">
              {/* Add to Cart Button with Animation */}
              <button 
                className={`cart-button ${isCartClicked ? 'clicked' : ''}`}
                style={{
                  backgroundColor: 'var(--color-primary)',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                  flex: 1,
                  height: '48px',
                }}
                onClick={() => setIsCartClicked(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.2)';
                }}
              >
                <span className="add-to-cart">Sebede goş</span>
                <span className="added">Goşuldy</span>
                <div className="fas fa-shopping-cart">
                  <MdOutlineShoppingCart />
                </div>
                <div className="fas fa-box">
                  <FaBox />
                </div>
              </button>
              
              {/* Favorite Button */}
              <button
                className="h-[48px] w-[48px] sm:h-[50px] sm:w-[50px] rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer backdrop-blur-sm group flex-shrink-0"
                style={{
                  border: '1px solid var(--color-borderGray)',
                  backgroundColor: 'var(--glass-bg)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: 'var(--color-text-primary)',
                }}
              >
                <IoMdHeartEmpty size={22} className="sm:w-[24px] sm:h-[24px] group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold font-geo mb-4 sm:mb-6" style={{ color: 'var(--color-text-primary)' }}>
          Meňzeş harytlar
        </h2>
        {/* <ProductCarousel /> */}
      </div>
    </div>
  );
};

export default Product;
