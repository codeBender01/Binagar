import { FC, useState } from "react";

import { IoMdCart } from "react-icons/io";

import { FaBox } from "react-icons/fa6";

import "./index.css";

interface AnimatedButtonProps {
  onClick?: (e: React.MouseEvent) => void;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsClicked(true);
        if (onClick) {
          onClick(e);
        }
        setTimeout(() => setIsClicked(false), 2000); // Reset animation after 2s
      }}
      className={`cart-button bg-primary font-main ${
        isClicked ? "clicked" : ""
      }`}
    >
      <span className="add-to-cart ">Harydy goşmak</span>
      <span className="added">Goşuldy</span>
      <div className="fas fa-shopping-cart">
        <IoMdCart />
      </div>
      <div className="fas fa-box">
        <FaBox />
      </div>
    </button>
  );
};

export default AnimatedButton;
