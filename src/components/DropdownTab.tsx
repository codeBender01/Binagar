import { FC, useState, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IoChevronForward } from "react-icons/io5";

type SubPaths = {
  title: string;
  path: string;
};

interface TabProps {
  tabName: string;
  icon: ReactElement | null;
  subPaths: SubPaths[];
  path: string;
}

const DropdownTab: FC<TabProps> = ({ tabName, icon, subPaths, path }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="font-main text-secondaryGray relative">
      <div
        className={` ${
          location.pathname.includes(path)
            ? "bg-activeTabGray"
            : "bg-transparent"
        } flex items-center  cursor-pointer gap-2 hover:bg-activeTabGray duration-800 rounded-md py-2 px-2`}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        <div className="text-[18px]">{icon}</div>
        <div className={"text-sm"}>{tabName}</div>
        <IoChevronForward
          className={`${
            isDropdownOpen ? "rotate-90" : "rotate-0"
          } duration-800 ml-auto`}
          size={14}
        />
      </div>
      <div
        className={`${
          isDropdownOpen ? "max-h-96 overflow-auto" : "max-h-0 overflow-hidden"
        } duration-1200 transition-all w-[100%] pl-4`}
      >
        {subPaths.map((s) => {
          return (
            <div
              onClick={() => {
                navigate(s.path);
              }}
              key={s.title}
              className={`
             text-secondaryGray
              flex items-center gap-4 py-2 ${
                location.pathname.includes(s.path)
                  ? "text-white"
                  : "text-secondaryGray"
              }
               text-sm cursor-pointer  hover:text-white duration-150`}
            >
              {location.pathname.includes(s.path) ? (
                <div className="rounded-[50%] w-[6px] h-[6px] bg-purple"></div>
              ) : null}
              {s.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownTab;
