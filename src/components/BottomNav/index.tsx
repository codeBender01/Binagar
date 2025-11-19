import { useNavigate } from "react-router-dom";
import { navs } from "./lib/navs";

const BottomNav = () => {
  const navigate = useNavigate();

  const handleClick = (item: any) => {
    navigate(item.path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="lg:hidden fixed bottom-0 w-full z-10">
      <ul className="bg-activeTabGray font-main  flex items-center py-3.5 text-[12px] md:text-base justify-between w-full px-3">
        {navs.map((n) => {
          return (
            <li
              key={n.title}
              className="flex flex-col items-center text-white cursor-pointer"
              onClick={() => handleClick(n)}
            >
              {n.icon}
              {n.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
