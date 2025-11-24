import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layout/AuthLayout";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import KaziDashboard from "../Layout/DashboardLayout/Dashboard/KaziDashboard/KaziDashboard";
import UserDashboard from "../Layout/DashboardLayout/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "../Layout/DashboardLayout/Dashboard/AdminDashboard/AdminDashboard";
const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/services',
                Component: Services
            },

            {
                path: '/profile',
                Component: Profile
            },

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
            {
                path: '/auth/updateProfile',
                Component: UpdateProfile
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/kaziDashboard',
                Component: KaziDashboard
            },
            {
                path: '/dashboard/userDashboard',
                Component: UserDashboard
            },
            // {
            //     path: '/dashboard/marriage-application-form',
            //     Component: 
            // },
            {
                path: '/dashboard/adminDashboard',
                Component: AdminDashboard,
            },
        ]
    }
]);

export default router;