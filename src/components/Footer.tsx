import { FC } from "react";

import { Divider } from "antd";

import logo from "../assets/logo.png";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

import gPlay from "../assets/googleplay.CUq9iiJj.png";
import appStore from "../assets/appstore.BzQ4lsL6.png";
import apk from "../assets/apk.9ZYehQS_.png";

const Footer: FC = () => {
  return (
    <footer className="bg-appBarColor mt-[60px] pt-[50px]">
      <div className="w-[90%] mx-auto py-[20px] flex flex-col gap-4 items-center" style={{ color: 'var(--color-text-primary)' }}>
        <div className="flex flex-col gap-[40px] md:flex-row md:gap-[140px] lg:gap-[160px] self-start">
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
          <div className="flex flex-col gap-2 mt-[12px] w-fit">
            <div className="text-gray2 text-md font-semibold font-main">
              Mobil programmalar
            </div>
            <ul className="font-main text-sm flex gap-[6px] text-gray flex-wrap">
              <li className="cursor-pointer hover:text-textBlack duration-200 h-[45px] w-[150px]">
                <img src={gPlay} alt="" />
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200 h-[45px] w-[150px]">
                <img src={appStore} alt="" />
              </li>
              <li className="cursor-pointer hover:text-textBlack duration-200 h-[45px] w-[150px]">
                <img src={apk} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[95px] h-[70px]">
            <img src={logo} alt="" className="w-[100%] h-[100%] object-cover" />
          </div>
          <p className="w-[100%] my-5 mx-auto font-main text-sm2 text-gray2">
            © 2019-2025 binagar.com. <br /> Ähli hukuklary goraglydyr.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="cursor-pointer hover:scale-110 duration-200">
            <MdAlternateEmail size={20} />
          </div>
          <div className="cursor-pointer hover:scale-110 duration-200">
            <FaInstagram size={20} />
          </div>
          <div className="cursor-pointer hover:scale-110 duration-200">
            <FaTiktok />
          </div>
        </div>
      </div>
      <Divider className="m-0" />
    </footer>
  );
};

export default Footer;
