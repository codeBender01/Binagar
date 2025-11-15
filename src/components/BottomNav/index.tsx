import { navs } from "./lib/navs";

const BottomNav = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 w-full z-10">
      <ul className="bg-activeTabGray font-main  flex items-center py-2 text-sm md:text-base justify-between w-full px-6">
        {navs.map((n) => {
          return (
            <li
              key={n.title}
              className="flex flex-col items-center text-white cursor-pointer"
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
