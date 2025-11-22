import { FC } from "react";
import { BeatLoader } from "react-spinners";
import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";

const PageLoading: FC = () => {
  const isDark = document.documentElement.classList.contains("dark");
  return (
    <div className="flex items-center justify-center flex-col h-[90vh]">
      <img
        className="h-[110px] mb-[10px]"
        src={isDark ? LogoWhite : Logo}
        alt="Emeli Akyl"
        loading="eager"
        fetchPriority="high"
      />

      <BeatLoader color={isDark ? "#fff" : "#1b995b"} loading={true} />
    </div>
  );
};

export default PageLoading;
