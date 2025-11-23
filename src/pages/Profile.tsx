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
import { FC, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

interface UserData {
  id: string;
  name: string | null;
  username: string;
  email: string | null;
  phoneNumber: string | null;
  selectedAddressId: string | null;
}

interface ItemType {
  name: string;
  icon: ReactNode;
  border: string;
  color: string;
  bgColor: string;
  onClick?: () => void;
}

interface ItemComponentProps {
  item: ItemType;
}

const Profile: FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Load user data from localStorage
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserData(user);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    
    // Show success message
    message.success("Üstünlikli çykdyňyz!");
    
    // Navigate to home
    navigate("/home");
  };

  // Get user's first letter for avatar
  const getInitial = () => {
    if (userData?.name) {
      return userData.name.charAt(0).toUpperCase();
    }
    if (userData?.username) {
      return userData.username.charAt(0).toUpperCase();
    }
    return "U";
  };

  // Get display name
  const getDisplayName = () => {
    return userData?.name || userData?.username || "Ulanyjy";
  };

  // Get contact info
  const getContactInfo = () => {
    if (userData?.phoneNumber) {
      return userData.phoneNumber;
    }
    if (userData?.email) {
      return userData.email;
    }
    return "";
  };

  const items1: ItemType[] = [
    {
      name: "Şahsy maglumat",
      icon: <FaUser className="text-[18px]" />,
      color: "text-[#577EBD]",
      border: "border-[#577EBD]",
      bgColor: "bg-[#577EBD]/10",
    },
    {
      name: "Sargytlarym",
      icon: <FaShoppingBasket className="text-[18px]" />,
      color: "text-[#397C5B]",
      border: "border-[#397C5B]",
      bgColor: "bg-[#397C5B]/10",
    },
    {
      name: "Salgylarym",
      icon: <FaLocationDot className="text-[18px]" />,
      color: "text-[#C69460]",
      border: "border-[#C69460]",
      bgColor: "bg-[#C69460]/10",
    },
    {
      name: "Dil çalyşmak",
      icon: <HiLanguage className="text-[18px]" />,
      color: "text-[#B2524B]",
      border: "border-[#B2524B]",
      bgColor: "bg-[#B2524B]/10",
    },
    {
      name: "Tema saýlaň",
      icon: <MdLightMode className="text-[18px]" />,
      color: "text-[#C387C1]",
      border: "border-[#C387C1]",
      bgColor: "bg-[#C387C1]/10",
    },
  ];

  const items2: ItemType[] = [
    {
      name: "Eltip bermek we töleg",
      icon: <TbTruckDelivery className="text-[18px]" />,
      color: "text-[#81D6C0]",
      border: "border-[#81D6C0]",
      bgColor: "bg-[#81D6C0]/10",
    },
    {
      name: "Habarlaşmak",
      icon: <FaEnvelope className="text-[18px]" />,
      color: "text-[#D8B6BA]",
      border: "border-[#D8B6BA]",
      bgColor: "bg-[#D8B6BA]/10",
    },
    {
      name: "Biz barada",
      icon: <IoMdInformationCircle className="text-[18px]" />,
      color: "text-[#CA9944]",
      border: "border-[#CA9944]",
      bgColor: "bg-[#CA9944]/10",
    },
  ];

  const items3: ItemType[] = [
    {
      name: "Ulgamdan çykmak",
      icon: <IoExit className="text-[20px]" />,
      color: "text-[#A72224]",
      border: "border-[#A72224]",
      bgColor: "bg-[#A72224]/10",
      onClick: handleLogout,
    },
  ];

  const ItemComponent: FC<ItemComponentProps> = ({ item }) => {
    return (
      <div
        onClick={item.onClick}
        className={`flex items-center min-h-[70px] justify-between px-[15px] py-[10px] ${
          item.onClick ? "cursor-pointer" : "cursor-default"
        } hover:bg-opacity-50 transition-all duration-200 group`}
        style={{ color: "var(--color-text-primary)" }}
      >
        <div className="flex items-center gap-[15px]">
          <div
            className={`py-[14px] px-[16px] rounded-xl ${item.bgColor} ${item.color} 
              transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
          >
            {item.icon}
          </div>
          <h2
            className="font-geo text-[16px] font-medium"
            style={{ color: "var(--color-text-primary)" }}
          >
            {item.name}
          </h2>
        </div>
        <FaChevronRight
          style={{ color: "var(--color-text-secondary)" }}
          className="text-[14px] transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    );
  };

  return (
    <div className="px-[7px] pt-[15px] pb-[100px] lg:pb-[20px] min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
      {/* Header */}
      <div
        className="flex items-center justify-center h-[60px] rounded-xl text-[20px] font-geo font-semibold mb-[20px] shadow-sm"
        style={{ backgroundColor: "var(--color-appBarColor)", color: "var(--color-text-primary)" }}
      >
        Hasabym
      </div>

      {/* User Profile Card */}
      <div
        className="rounded-xl p-[25px] mb-[20px] shadow-md"
        style={{ backgroundColor: "var(--color-appBarColor)" }}
      >
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div
            className="w-[90px] h-[90px] rounded-full flex items-center justify-center text-[40px] font-bold mb-[15px] shadow-lg bg-primary text-white"
          >
            {getInitial()}
          </div>
          
          {/* User Name */}
          <h2
            className="text-center text-[24px] font-geo font-bold mb-[5px]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {getDisplayName()}
          </h2>
          
          {/* Contact Info */}
          {getContactInfo() && (
            <p
              className="text-center text-[16px] font-main"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {getContactInfo()}
            </p>
          )}
        </div>
      </div>

      {/* Menu Section 1 */}
      <div
        className="rounded-xl overflow-hidden mb-[15px] shadow-sm divide-y"
        style={{
          backgroundColor: "var(--color-appBarColor)",
          borderColor: "var(--color-borderGray)",
        }}
      >
        {items1.map((item, index) => (
          <ItemComponent item={item} key={index} />
        ))}
      </div>

      {/* Menu Section 2 */}
      <div
        className="rounded-xl overflow-hidden mb-[15px] shadow-sm divide-y"
        style={{
          backgroundColor: "var(--color-appBarColor)",
          borderColor: "var(--color-borderGray)",
        }}
      >
        {items2.map((item, index) => (
          <ItemComponent item={item} key={index} />
        ))}
      </div>

      {/* Logout Section */}
      <div
        className="rounded-xl overflow-hidden shadow-sm"
        style={{ backgroundColor: "var(--color-appBarColor)" }}
      >
        {items3.map((item, index) => (
          <ItemComponent item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profile;