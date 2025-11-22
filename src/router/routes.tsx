import { useRoutes, Navigate } from "react-router-dom";

import { Suspense, lazy } from "react";

import Loading from "../components/PageLoading";
import Home from "../pages/Home";
import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";

// const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
// const ClientLayout = lazy(() => import("../layouts/ClientLayout"));
// const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const Basket = lazy(() => import("../pages/Basket"));
const Brands = lazy(() => import("../pages/Brands"));
const AdminLogin = lazy(() => import("../pages/AdminLogin"));
const AdminProducts = lazy(() => import("../pages/AdminProducts"));
const AdminCategories = lazy(() => import("../pages/AdminCategories"));
const Services = lazy(() => import("../pages/Services"));
const Profile = lazy(() => import("../pages/Profile"));
const Liked = lazy(() => import("../pages/Liked"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/home/products" replace />,
    },
    {
      element: (
        // <Suspense fallback={<Loading />}>
        <ClientLayout />
        // </Suspense>
      ),
      path: "/home",
      children: [
        {
          path: "",
          element: <Navigate to="/home/products" replace />,
        },
        {
          element: (
            // <Suspense fallback={<Loading />}>
            <Home />
            // </Suspense>
          ),
          path: "products",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Product />
            </Suspense>
          ),
          path: "product",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Basket />
            </Suspense>
          ),
          path: "basket",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Brands />
            </Suspense>
          ),
          path: "brands",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Services />
            </Suspense>
          ),
          path: "services",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          ),
          path: "profile",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Liked />
            </Suspense>
          ),
          path: "liked",
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
