import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import logoWhite from "../assets/logo-white.png";

import { Input } from "antd";
import PillButton from "./PillButton";
import LoginModal from "./LoginModal";
import ThemeToggleButton from "./ThemeToggleButton";

import { CiSearch } from "react-icons/ci";
import { LuShoppingBasket } from "react-icons/lu";
import { BiSolidShoppingBags } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import { BsTools } from "react-icons/bs";

import "../antd.css";

const mobileNavs = [
  {
    title: "Hyzmatlar",
    icon: <BsTools size={20} />,
    path: "/home/services",
  },
  {
    title: "Market",
    icon: <BiSolidShoppingBags size={20} />,
    path: "/home/market",
  },
  {
    title: "Dükanlar",
    icon: <AiFillShop size={22} />,
    path: "/home/dukanlar",
  },
];

const checkPath = () => {
  return window.location.href.includes("profile");
};

const Header: FC = () => {
  const navigate = useNavigate();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [active, setActive] = useState<string>("");

  const isDark = document.documentElement.classList.contains("dark");

  return (
    <header className={`${checkPath() && "hidden"} w-[100%] h-fit`}>
      <div className="px-[30px] lg2:px-[60px] flex items-center justify-between w-[100%] bg-appBarColor py-3">
        <div
          onClick={() => navigate("/home")}
          className="w-[120px] h-[76px] lg:w-[140px] lg:h-[96px]"
        >
          <img
            src={isDark ? logoWhite : logo}
            alt="logo"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <div className="hidden lg:flex max-w-[45%] lg2:w-[45%]">
          <Input
            prefix={
              <CiSearch style={{ color: "var(--color-iconGray)" }} size={22} />
            }
            className="rounded-[6px] h-[48px] w-full placeholder:font-geo font-geo!"
            placeholder="Поиск товара или бренда"
          />
        </div>

        <div className="flex gap-2 items-center">
          <ThemeToggleButton />

          <div
            onClick={() => {
              navigate("/home/basket");
            }}
            className="hidden lg:flex items-center gap-[12px] text-nowrap border-[1px] rounded-[10px] lg:rounded-full p-1 lg:pr-[12px] border-borderGray group cursor-pointer hover:bg-primary duration-200"
          >
            <div className="bg-primary text-white rounded-full p-2 group-hover:bg-white group-hover:text-primary duration-200">
              <LuShoppingBasket size={24} />
            </div>

            <div className="hidden lg:flex font-geo text-mainBlue group-hover:text-white duration-200">
              2 товара: 1 208 tmt
            </div>
          </div>
          <div
            onClick={() => setOpenSearchBar(!openSearchBar)}
            className="flex items-center gap-[12px] rounded-full lg:rounded-full visible lg:hidden group cursor-pointer hover:bg-primary duration-200"
          >
            <div className="bg-primary text-white rounded-full p-2 group-hover:bg-white group-hover:text-primary duration-200">
              <IoIosSearch size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* desktip tab buttons start */}
      <div className="hidden items-center lg:flex lg:px-[60px] lg2:px-[90px] justify-between bg-appBarColor pb-3 border-b-[1px] border-borderGray">
        <div className="flex items-center gap-[15px] lg2:gap-[60px]">
          <PillButton
            onClick={() => navigate("/home/products")}
            text="Market"
            path={"/home/products"}
            icon={<MdOutlineShoppingCart />}
          />
          <PillButton
            text="Dükanlar"
            path={"/home/brands"}
            icon={<BiSolidShoppingBags />}
          />
          <PillButton
            text="Hyzmatlar"
            icon={<BsTools />}
            path={"/home/services"}
            onClick={() => navigate("/home/services")}
          />
        </div>

        <div className="flex items-center gap-[20px]">
          <PillButton
            text="Halanlarym"
            icon={<IoMdHeartEmpty />}
            onClick={() => navigate("/home/liked")}
          />
          <PillButton
            onClick={() => setOpenLoginModal(true)}
            text="Profilim"
            icon={<IoPersonCircleOutline />}
          />
        </div>
      </div>
      {/* desktip tab buttons end */}

      {/* mobile tab start */}
      <ul className="rounded-xl bg-appBarColor mt-3 flex font-geo items-center md:w-[55%] lg:hidden py-1.5 px-1 mx-[7px] justify-self-center">
        {mobileNavs.map((n) => {
          return (
            <li
              key={n.title}
              className={`${
                n.title === "Dükanlar" ? "" : "border-r border-borderGray"
              } flex-1 px-1`}
            >
              <div
                className={` p-2 flex gap-1.5 text-[12px] sm:text-[16px]  items-center duration-200 justify-center rounded-lg w-full hover:bg-activeTabGray hover:text-white cursor-pointer ${
                  active == n.title && "bg-activeTabGray text-white"
                }`}
                onClick={() => setActive(n.title)}
              >
                {n.icon}
                {n.title}
              </div>
            </li>
          );
        })}
      </ul>
      {/* mobile tab end */}

      <div
        className={
          openSearchBar
            ? "bg-appBarColor flex items-center justify-center px-[30px] w-[100%] h-[48px] mt-2"
            : "hidden"
        }
      >
        <Input
          prefix={
            <CiSearch style={{ color: "var(--color-iconGray)" }} size={22} />
          }
          className="rounded-[6px] h-[100%] w-[100%] placeholder:font-geo font-geo!"
          placeholder="Поиск товара или бренда"
        />
      </div>

      <LoginModal open={openLoginModal} setOpen={setOpenLoginModal} />
    </header>
  );
};

export default Header;
