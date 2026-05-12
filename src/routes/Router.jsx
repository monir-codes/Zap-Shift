import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layouts/RootLayout/AuthLayout/AuthLayout";
import LoginPage from "../pages/AuthPages/Loginpage/Loginpage";
import Register from "../pages/AuthPages/Register/Register";
import ForgotPassword from "../pages/AuthPages/ForgotPassword/ForgotPassword";
import BeARider from "../pages/BeARider/BeARider";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import Error404 from "../pages/Error404/Error404";
import SendParcel from "../pages/SendParcel/SendParcel";
import Loader from "../pages/Loader/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loader />,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: '/rider',
            element: <PrivateRoute><BeARider /></PrivateRoute>
        },
        {
            path: '/send-parcel',  
            element: <PrivateRoute><SendParcel /></PrivateRoute>,
            loader: () => fetch('/public/warehouses.json')
        },
        {
            path: '/about-us',
            Component: AboutUs,
        },
        {
            path: '*',
            Component: Error404,
        }
    ]
},
{
    path: "/",
    Component: AuthLayout,
    children: [

        {
            path: '/login',
            Component: LoginPage,
        },
        {
            path: '/register',
            Component: Register,
        },
        {
            path: '/forgot-password',
            Component: ForgotPassword
        }
    ]
}
]);