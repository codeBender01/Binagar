import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { FaChartLine, FaStore } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaRegCheckSquare } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

import DropdownTab from "./DropdownTab";

import logo from "../assets/logo.png";

const dropdownTabs = [
  {
    title: "Customers",
    icon: <MdPeopleAlt />,
    path: "/admin/customers",
    subPaths: [
      {
        id: 1,
        title: "List",
        path: "/admin/customers/list",
      },
      {
        id: 2,
        title: "Details",
        path: "/admin/customers/details",
      },
      {
        id: 3,
        title: "Edit",
        path: "/admin/customers/edit",
      },
    ],
  },
  {
    title: "Stores",
    icon: <FaStore />,
    path: "/admin/stores",
    subPaths: [
      {
        id: 1,
        title: "List",
        path: "/admin/stores/list",
      },
      {
        id: 3,
        title: "Edit",
        path: "/admin/stores/edit",
      },
    ],
  },
  {
    title: "Categories",
    icon: <BiCategory />,
    path: "/admin/categories",
    subPaths: [
      {
        id: 1,
        title: "List",
        path: "/admin/categories",
      },
    ],
  },
  {
    title: "Products",
    icon: <RiShoppingBag2Line />,
    path: "/admin/products",
    subPaths: [
      {
        id: 1,
        title: "List",
        path: "/admin/products",
      },
    ],
  },

  {
    title: "Orders",
    icon: <PiShoppingCartSimple />,
    path: "/admin/orders",
    subPaths: [
      {
        id: 1,
        title: "List",
        path: "/admin/orders/list",
      },
    ],
  },
  {
    title: "Invoices",
    icon: <FaRegCheckSquare />,
    path: "/admin/invoices",
    subPaths: [
      {
        id: 1,
        title: "List",
        path: "/admin/invoices/list",
      },
      {
        id: 2,
        title: "Details",
        path: "/admin/invoices/details",
      },
    ],
  },
];

const AdminSidebar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-[100vh] max-h-[100vh] bg-mainBlack overflow-y-auto min-w-[280px] p-6">
      <div className="flex items-center gap-4">
        <div className="border-[1px] h-[60px] w-[80px] border-altBlack bg-white rounded-md p-[6px]">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="uppercase font-secondary text-white text-normal font-bold">
            DOWLET
          </div>
          <div className="text-secondaryGray uppercase text-sm font-main">
            admin
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 mt-[75px]">
        <li
          onClick={() => {
            navigate("/admin/analytics");
          }}
          className={`${
            location.pathname.includes("/admin/analytics")
              ? "text-white bg-sidebarActive"
              : "text-secondaryGray"
          } flex items-center px-2 text-sm font-semibold gap-2 font-main cursor-pointer hover:bg-activeTabGray duration-800 rounded-md py-2`}
        >
          <HiOutlineChartBarSquare size={18} />
          Analytics
        </li>
        <li
          onClick={() => {
            navigate("/admin/e-commerce");
          }}
          className={`${
            location.pathname.includes("/admin/e-commerce")
              ? "text-white bg-sidebarActive"
              : "text-secondaryGray"
          } flex items-center px-2 text-sm font-semibold gap-2 font-main cursor-pointer hover:bg-activeTabGray duration-800 rounded-md py-2`}
        >
          <FaChartLine />
          E-Commerce
        </li>
      </ul>
      <div className="mt-[100px]">
        <div className="text-sm2 font-bold font-main text-secondaryGray uppercase">
          Concepts
        </div>
        <div className="mt-[18px] flex flex-col gap-2">
          {dropdownTabs.map((d) => {
            return (
              <DropdownTab
                key={d.path}
                tabName={d.title}
                subPaths={d.subPaths}
                icon={d.icon}
                path={d.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
