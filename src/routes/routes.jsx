import { lazy } from "react";
// import ProductDetail from "../pages/ProductDetail";

const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
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
    path: "/register",
    element: <Register />,
    isPrivate: false,
  },
  {
    path: "/detail",
    element: <ProductDetail />,
    isPrivate: false,
  },
  {
    path: "/categories",
    element: <Categories />,
    isPrivate: false,
  },
];
