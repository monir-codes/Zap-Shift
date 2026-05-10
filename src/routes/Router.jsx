import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layouts/RootLayout/AuthLayout/AuthLayout";
import LoginPage from "../pages/AuthPages/Loginpage/Loginpage";
import Register from "../pages/AuthPages/Loginpage/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
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
        }
    ]
}
]);