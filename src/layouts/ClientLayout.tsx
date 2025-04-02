import { FC } from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ClientLayout: FC = () => {
  return (
    <div className="flex flex-col bg-background min-h-[100vh] pt-[22vh]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
