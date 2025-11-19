import { GoHome, GoHomeFill } from "react-icons/go";
import { BiCategory, BiSolidCategory } from "react-icons/bi";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { IoPersonOutline, IoPerson } from "react-icons/io5";

export const navs = [
  {
    id: 1,
    title: "Baş sahypa",
    icon: <GoHome size={22} />,
    activeIcon: <GoHomeFill size={22} />,
    path: "/home",
  },
  {
    id: 2,
    title: "Kategoriýalar",
    icon: <BiCategory size={22} />,
    activeIcon: <BiSolidCategory size={22} />,
    path: "categories",
  },
  {
    id: 3,
    title: "Sebet",
    icon: <MdOutlineShoppingCart size={22} />,
    activeIcon: <MdShoppingCart size={22} />,
    path: "basket",
  },
  {
    id: 4,
    title: "Halanlarym",
    icon: <FaRegHeart size={22} />,
    activeIcon: <FaHeart size={22} />,
    path: "liked",
  },
  {
    id: 5,
    title: "Hasabym",
    icon: <IoPersonOutline size={22} />,
    activeIcon: <IoPerson size={22} />,
    path: "profile",
  },
];
