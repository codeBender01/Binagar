import { useRoutes } from "react-router-dom";

import { Suspense, lazy } from "react";

import ClientLayout from "../layouts/ClientLayout";

import Home from "../pages/Home";
const Product = lazy(() => import("../pages/Product"));
const Basket = lazy(() => import("../pages/Basket"));
const Brands = lazy(() => import("../pages/Brands"));

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
  ]);

  return routes;
}
