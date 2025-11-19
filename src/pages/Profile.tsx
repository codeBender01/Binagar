import {
  FaChevronRight,
  FaEnvelope,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiLanguage } from "react-icons/hi2";
import { IoMdInformationCircle } from "react-icons/io";
import { IoExit } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FC, ReactNode } from "react";

const Profile = () => {
  const items1: ItemType[] = [
    {
      name: "Şahsy maglumat",
      icon: <FaUser className={"text-[16px]"} />,
      color: "text-[#577EBD]",
      border: "border-[#577EBD]",
    },
    {
      name: "Sargytlarym",
      icon: <FaShoppingBasket className={"text-[16px]"} />,
      color: "text-[#397C5B]",
      border: "border-[#397C5B]",
    },
    {
      name: "Salgylarym",
      icon: <FaLocationDot className={"text-[16px]"} />,
      color: "text-[#C69460]",
      border: "border-[#C69460]",
    },
    {
      name: "Dil çalyşmak",
      icon: <HiLanguage className={"text-[16px]"} />,
      color: "text-[#B2524B]",
      border: "border-[#B2524B]",
    },
    {
      name: "Tema saýlaň",
      icon: <MdLightMode className={"text-[16px]"} />,
      color: "text-[#C387C1]",
      border: "border-[#C387C1]",
    },
  ];

  const items2: ItemType[] = [
    {
      name: "Eltip bermek we töleg",
      icon: <TbTruckDelivery className="text-[16px]" />,
      color: "text-[#81D6C0]",
      border: "border-[#81D6C0]",
    },
    {
      name: "Habarlaşmak",
      icon: <FaEnvelope className="text-[16px]" />,
      color: "text-[#D8B6BA]",
      border: "border-[#D8B6BA]",
    },
    {
      name: "Biz barada",
      icon: <IoMdInformationCircle className="text-[16px]" />,
      color: "text-[#CA9944]",
      border: "border-[#CA9944]",
    },
  ];

  const items3: ItemType[] = [
    {
      name: "Ulgamdan çykmak",
      icon: <IoExit className="text-[18px]" />,
      color: "text-[#A72224]",
      border: "border-[#A72224]",
    },
  ];

  interface ItemType {
    name: string;
    icon: ReactNode;
    border: string;
    color: string;
  }

  interface ItemComponentProps {
    item: ItemType;
  }

  const ItemComponent: FC<ItemComponentProps> = ({ item }) => {
    return (
      <div className="flex items-center h-[60px] justify-between text-white px-[10px]">
        <div className="flex items-center gap-[15px]">
          <div
            className={`py-[12px] px-[15px] border-[1px] rounded-lg ${item.border} ${item.color}`}
          >
            {item.icon}
          </div>
          <h2 className="text-white">{item.name}</h2>
        </div>
        <FaChevronRight />
      </div>
    );
  };

  return (
    <div className="px-[7px] pt-[15px] bg-black">
      <div className="flex items-center justify-center h-[50px] bg-[#3A3A3A] rounded-lg text-white text-[18px]">
        Hasabym
      </div>
      <div className="my-[15px] text-white mt-[15px]">
        <div className="bg-gray-100 rounded-lg py-[15px] px-[25px] w-fit text-black text-[35px] font-[600] mx-auto mb-[10px]">
          U
        </div>
        <h2 className="text-center text-[20px] font-[600]">Username</h2>
        <p className="text-center">+993 61511331</p>
      </div>

      <div className="bg-[#3A3A3A] rounded-lg py-[5px]">
        {items1.map((item, index) => (
          <ItemComponent item={item} key={index} />
        ))}
      </div>

      <div className="bg-[#3A3A3A] rounded-lg py-[5px] mt-[15px]">
        {items2.map((item, index) => (
          <ItemComponent item={item} key={index} />
        ))}
      </div>

      <div className="bg-[#3A3A3A] rounded-lg py-[5px] mt-[15px] mb-[100px]">
        {items3.map((item, index) => (
          <ItemComponent item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
