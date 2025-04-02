import { FC } from "react";

import { Button } from "antd";

import { FiUpload, FiDownload } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";

import "../antd.css";

interface ListHeaderProps {
  title: string;
  isProducts?: boolean;
  path?: string;
  breadcrumbArr?: string[];
  onClick?: () => void;
}

const ListHeader: FC<ListHeaderProps> = ({
  title,
  isProducts,
  breadcrumbArr,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-between w-[100%]">
      <div className="flex flex-col gap-[20px]">
        <div className="text-lg text-secondaryBlack font-bold font-secondary">
          {title}
        </div>
        {isProducts ? (
          <div className="flex items-center gap-[8px]">
            <div className="font-main font-medium text-secondaryBlack text-sm">
              {breadcrumbArr ? breadcrumbArr[0] : ""}
            </div>
            <div className="w-[4px] h-[4px] bg-textGray rounded-round"></div>
            <div className="font-main font-medium text-secondaryBlack text-sm">
              {breadcrumbArr ? breadcrumbArr[1] : ""}
            </div>
            <div className="w-[4px] h-[4px] bg-textGray rounded-round"></div>
            <div className="font-main font-medium text-textGray text-sm">
              {breadcrumbArr ? breadcrumbArr[2] : ""}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center capitalize font-main text-sm text-secondaryBlack font-semibold cursor-pointer hover:opacity-70 duration-150 gap-[8px]">
              <FiUpload />
              import
            </div>
            <div className="flex items-center capitalize font-main text-sm text-secondaryBlack font-semibold cursor-pointer hover:opacity-70 duration-150 gap-[8px]">
              <FiDownload />
              export
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={onClick}
        className="bg-purple text-white text-sm rounded-lg px-[14px] h-[45px] font-main font-semibold"
      >
        <IoAddOutline size={22} />
        Добавить
      </Button>
    </div>
  );
};

export default ListHeader;
