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
import { IoMdHeartEmpty, IoIosMenu } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

import "../antd.css";

const Header: FC = () => {
  const navigate = useNavigate();

  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <header className="w-[100%] bg-white border-b-[1px] border-borderGray pb-[12px] h-fit">
      <div className="px-[60px] flex items-center justify-between w-[100%]">
        <div onClick={() => navigate("/")} className="w-[140px] h-[96px]">
          <img
            src={logo}
            alt="logo"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <Input
          prefix={<CiSearch color="#929090" size={22} />}
          className="rounded-[6px] h-[48px] w-[45%] placeholder:font-geo font-geo!"
          placeholder="Поиск товара или бренда"
        />

        <div className="flex flex-col items-center font-geo">
          <div className="text-textBlack text-sm2 font-bold">
            tkmbinagar@gmail.com
          </div>
          <div className="text-mainBlue border-b-[1px] border-dashed border-mainBlue text-sm2 hover:opacity-75 duration-150 cursor-pointer">
            Написать нам
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/basket");
          }}
          className="flex items-center gap-[12px] border-[1px] rounded-full p-1 pr-[12px] border-borderGray group cursor-pointer hover:bg-mainBlue duration-200"
        >
          <div className="bg-mainBlue text-white rounded-full p-2 group-hover:bg-white  group-hover:text-mainBlue duration-200">
            <LuShoppingBasket size={24} />
          </div>

          <div className="font-geo text-mainBlue group-hover:text-white duration-200">
            2 товара: 1 208 tmt
          </div>
        </div>
      </div>
      <Divider className="my-2" />

      <div className="flex items-center px-[90px] justify-between">
        <div className="flex items-center gap-[60px]">
          <PillButton text="Serwisler" icon={<IoIosMenu />} />
          <PillButton
            onClick={() => navigate("/brands")}
            text="Dukanlar"
            icon={<BiSolidShoppingBags />}
          />
          <PillButton text="Harytlar" icon={<MdOutlineShoppingCart />} />
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

      <LoginModal open={openLoginModal} setOpen={setOpenLoginModal} />
    </header>
  );
};

export default Header;
