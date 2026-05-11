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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
            path: '/about-us',
            Component: AboutUs,
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