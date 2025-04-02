import { FC, ReactElement } from "react";

interface PillButtonProps {
  icon: ReactElement;
  text: string;
  path?: string;
  onClick?: () => void;
}

const PillButton: FC<PillButtonProps> = ({ text, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-fit flex items-center gap-[12px] border-[1px] rounded-[10px] lg:rounded-full p-1 lg:pr-[22px] border-borderGray group cursor-pointer hover:bg-mainBlue duration-200"
    >
      <div className="bg-borderGray text-mainBlue text-[24px] rounded-full p-2 group-hover:bg-white  group-hover:text-mainBlue duration-200">
        {icon}
      </div>

      <div className="hidden lg:flex font-geo text-mainBlue  group-hover:text-white duration-200">
        {text}
      </div>
    </div>
  );
};

export default PillButton;
