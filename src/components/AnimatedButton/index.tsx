import { FC, useState } from "react";

import { IoMdCart } from "react-icons/io";

import { FaBox } from "react-icons/fa6";

import "./index.css";

const AnimatedButton: FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsClicked(true);
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
