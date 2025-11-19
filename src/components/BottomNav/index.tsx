import { useNavigate } from "react-router-dom";
import { navs } from "./lib/navs";
import { useState } from "react";

const BottomNav = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<number>();

  const handleClick = (item: any) => {
    navigate(item.path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActive(item.id);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 w-full z-10">
      <ul
        className={`bg-[#1b995b] font-main flex gap-[5px] items-center py-3.5 text-[10px] sm:text-[13px] md:text-base justify-around w-full px-3`}
      >
        {navs.map((n) => {
          return (
            <li
              key={n.title}
              className={`flex flex-col items-center cursor-pointer ${
                active == n.id
                  ? "font-[600] text-[#EDB206]"
                  : "font-[400] text-white"
              }`}
              onClick={() => handleClick(n)}
            >
              {active == n.id ? n.activeIcon : n.icon}
              {n.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
