//client pages
import Home from "../pages/client/Home";
import About from "../pages/client/About";
import Contact from "../pages/client/Contact";
import Checkout from "../pages/client/Checkout";
import Basket from "../pages/client/Basket";
import Shop from "../pages/client/Shop";
import ProductDetail from "../pages/client/ProductDetail";

//admin pages
import Dashboard from "../pages/admin/Dashboard";
import ProductManagement from "../pages/admin/ProductManagement";
import CategoryManagement from "../pages/admin/CategoryManagement";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminProfile from "../pages/admin/AdminProfile";

//auth pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Profile from "../pages/auth/Profile";

//layouts
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";

//types
import type { RouteObject } from "react-router-dom";

//IMPLEMENT PROTECTED ROUTES - after user logic
const ROUTES: RouteObject[] = [
  //client pages
  {
    element: <ClientLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  //admin pages
  {
    element: <AdminLayout />,
    path: "/admin",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <ProductManagement />,
      },
      {
        path: "categories",
        element: <CategoryManagement />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
    ],
  },
  //auth pages
  {
    element: <AuthLayout />,
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
];

export default ROUTES;
