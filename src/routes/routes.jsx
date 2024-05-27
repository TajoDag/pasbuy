import { lazy } from "react";
// import ProductDetail from "../pages/ProductDetail";

const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Products = lazy(() => import("../pages/Products"));
const Brands = lazy(() => import("../pages/Brands"));
const Categories = lazy(() => import("../pages/Categories"));
const User = lazy(() => import("../pages/User"));

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
    path: "/user",
    element: <User />,
    isPrivate: false,
  },
  {
    // path: "/detail",
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
