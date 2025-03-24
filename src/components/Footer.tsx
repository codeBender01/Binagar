import { FC } from "react";

import { Divider } from "antd";

import logo from "../assets/logo.png";

const Footer: FC = () => {
  return (
    <footer className="bg-white mt-[60px] pt-[70px]">
      <Divider className="m-0" />
      <div className="w-[90%] mx-auto py-[20px]">
        <div className="w-[75px] h-[50px]">
          <img src={logo} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="flex gap-[160px]">
          <div className="flex flex-col gap-2 mt-[12px] w-fit">
            <div className="text-gray2 text-md font-semibold font-main">
              Maglumat
            </div>
            <ul className="font-main text-sm flex flex-col gap-[6px] text-gray">
              <li className="cursor-pointer hover:text-textBlack duration-200">
                Biz barada
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200">
                Eltip bermek we töleg tertibi
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200">
                Aragatnaşyk
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200">
                Ulanyş düzgünleri we gizlinlik şertleri
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 mt-[12px] w-fit">
            <div className="text-gray2 text-md font-semibold font-main">
              Habarlaşmak üçin
            </div>
            <ul className="font-main text-sm flex flex-col gap-[6px] text-gray">
              <li className="cursor-pointer hover:text-textBlack duration-200 grid grid-cols-2">
                <span>Telefon:</span>
                <span>+993 12 77 77 77</span>
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200 grid grid-cols-2">
                <span>Imo:</span>
                <span>+993 12 77 77 77</span>
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200 grid grid-cols-2">
                <span>E-mail:</span>
                <span>info@binagar.com</span>
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200 grid grid-cols-2">
                <span>Instagram:</span>
                <span>@binagar_com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Divider className="m-0" />
      <p className="w-[95%] my-5 mx-auto font-main text-sm2 text-gray2">
        © 2019-2025 binagar.com. Ähli hukuklary goraglydyr.
      </p>
    </footer>
  );
};

export default Footer;
