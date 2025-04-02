import { FC } from "react";

import AdminSidebar from "../components/AdminSidebar";

// import { useGetMeQuery } from "../store/adminApi";

import { Outlet } from "react-router-dom";

const AdminLayout: FC = () => {
  // const { data: admin, error } = useGetMeQuery("");

  return (
    <div className="flex w-[100%]">
      <AdminSidebar />
      <div className="max-h-[100vh] overflow-y-auto flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
