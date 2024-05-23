import { lazy } from "react";
// import ProductDetail from "../pages/ProductDetail";

const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Products = lazy(() => import("../pages/Products"));
const Brands = lazy(() => import("../pages/Brands"));
const Categories = lazy(() => import("../pages/Categories"));

export const routes_here = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/detail/:_id",
    element: <ProductDetail />,
    isPrivate: false,
  },
  {
    path: "/products",
    element: <Products />,
    isPrivate: false,
  },
  {
    path: "/all-brands",
    element: <Brands />,
    isPrivate: false,
  },
  {
    path: "/all-categories",
    element: <Categories />,
    isPrivate: false,
  },
];
