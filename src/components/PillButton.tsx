import { FC, ReactElement } from "react";

import { useLocation } from "react-router-dom";

interface PillButtonProps {
  icon: ReactElement;
  text: string;
  path?: string;
  onClick?: () => void;
}

const PillButton: FC<PillButtonProps> = ({ text, icon, onClick, path }) => {
  const location = useLocation();

  return (
    <div
      onClick={onClick}
      className={`${
        location.pathname === path ? "bg-primary text-white border-none" : ""
      } w-fit flex items-center gap-[12px] border-[1px] rounded-[10px] lg:rounded-full p-1 lg:pr-[22px] border-borderGray group cursor-pointer hover:bg-primary duration-200`}
    >
      <div
        className={`${
          location.pathname === path
            ? "text-primary bg-white"
            : "bg-primary text-white"
        } text-[24px] rounded-full p-2 group-hover:bg-white  group-hover:text-primary duration-200`}
      >
        {icon}
      </div>

      <div className="hidden lg:flex font-geo group-hover:text-white duration-200" style={{ color: location.pathname === path ? 'inherit' : 'var(--color-text-primary)' }}>
        {text}
      </div>
    </div>
  );
};

export default PillButton;
