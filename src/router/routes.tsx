import { useRoutes } from "react-router-dom";

import { Suspense, lazy } from "react";

import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
const Product = lazy(() => import("../pages/Product"));
const Basket = lazy(() => import("../pages/Basket"));
const Brands = lazy(() => import("../pages/Brands"));
const AdminLogin = lazy(() => import("../pages/AdminLogin"));
const AdminProducts = lazy(() => import("../pages/AdminProducts"));
const AdminCategories = lazy(() => import("../pages/AdminCategories"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <ClientLayout />
        </Suspense>
      ),
      path: "/",
      children: [
        {
          element: <Home />,
          path: "",
        },
        {
          element: <Product />,
          path: "/product",
        },
        {
          element: <Basket />,
          path: "/basket",
        },
        {
          element: <Brands />,
          path: "/brands",
        },
      ],
    },

    {
      element: <AdminLogin />,
      path: "/admin-login",
    },
    {
      element: <AdminLayout />,
      path: "/admin",
      children: [
        {
          element: <AdminProducts />,
          path: "products",
        },
        {
          element: <AdminCategories />,
          path: "categories",
        },
      ],
    },
  ]);

  return routes;
}
