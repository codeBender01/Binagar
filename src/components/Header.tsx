import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import { Input, Divider } from "antd";
import PillButton from "./PillButton";
import LoginModal from "./LoginModal";

import { CiSearch } from "react-icons/ci";
import { LuShoppingBasket } from "react-icons/lu";
import { BiSolidShoppingBags } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import {} from "react-icons/io";
import { BsTools } from "react-icons/bs";

import "../antd.css";

const Header: FC = () => {
  const navigate = useNavigate();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);

  return (
    <header className="w-[100%] fixed top-0 z-20 bg-white border-b-[1px] border-borderGray pb-[12px] h-fit pt-[12px]">
      <div className="px-[30px] lg2:px-[60px] flex items-center justify-between w-[100%] bg-white">
        <div
          onClick={() => navigate("/")}
          className="w-[120px] h-[76px] lg:w-[140px] lg:h-[96px]"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <Input
          prefix={<CiSearch color="#929090" size={22} />}
          className="rounded-[6px] hidden lg:flex h-[48px] w-[35%] lg2:w-[45%] placeholder:font-geo font-geo!"
          placeholder="Поиск товара или бренда"
        />

        <div className="flex-col items-center font-geo hidden lg:flex">
          <div className="text-textBlack text-sm2 font-bold">
            tkmbinagar@gmail.com
          </div>
          <div className="text-mainBlue border-b-[1px] border-dashed border-mainBlue text-sm2 hover:opacity-75 duration-150 cursor-pointer">
            Написать нам
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div
            onClick={() => {
              navigate("/basket");
            }}
            className="flex items-center gap-[12px] border-[1px] rounded-[10px] lg:rounded-full p-1 lg:pr-[12px] border-borderGray group cursor-pointer hover:bg-mainBlue duration-200"
          >
            <div className="bg-mainBlue text-white rounded-full p-2 group-hover:bg-white  group-hover:text-mainBlue duration-200">
              <LuShoppingBasket size={24} />
            </div>

            <div className="hidden lg:flex font-geo text-mainBlue group-hover:text-white duration-200">
              2 товара: 1 208 tmt
            </div>
          </div>
          <div
            onClick={() => setOpenSearchBar(!openSearchBar)}
            className="flex items-center gap-[12px] border-[1px] rounded-[10px] lg:rounded-full p-1 visible lg:hidden border-borderGray group cursor-pointer hover:bg-mainBlue duration-200"
          >
            <div className="bg-mainBlue text-white rounded-full p-2 group-hover:bg-white  group-hover:text-mainBlue duration-200">
              <IoIosSearch size={24} />
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-2" />

      <div className="flex items-center px-[30px] lg:px-[60px] lg2:px-[90px] justify-between">
        <div className="flex items-center gap-[15px] lg2:gap-[60px]">
          <PillButton
            onClick={() => navigate("/")}
            text="Harytlar"
            icon={<MdOutlineShoppingCart />}
          />
          <PillButton
            onClick={() => navigate("/brands")}
            text="Dukanlar"
            icon={<BiSolidShoppingBags />}
          />
          <PillButton text="Serwisler" icon={<BsTools />} />
        </div>

        <div className="flex items-center gap-[20px]">
          <PillButton text="Halanlarym" icon={<IoMdHeartEmpty />} />
          <PillButton
            onClick={() => setOpenLoginModal(true)}
            text="Profilim"
            icon={<IoPersonCircleOutline />}
          />
        </div>
      </div>

      <div
        className={
          openSearchBar
            ? "bg-white flex items-center justify-center px-[30px] w-[100%] h-[48px] mt-2"
            : "hidden"
        }
      >
        <Input
          prefix={<CiSearch color="#929090" size={22} />}
          className="rounded-[6px] h-[100%] w-[100%]  placeholder:font-geo font-geo!"
          placeholder="Поиск товара или бренда"
        />
      </div>

      <LoginModal open={openLoginModal} setOpen={setOpenLoginModal} />
    </header>
  );
};

export default Header;
