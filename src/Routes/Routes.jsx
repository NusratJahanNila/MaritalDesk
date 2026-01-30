import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layout/AuthLayout";
import AboutUs from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import KaziDashboard from "../Layout/DashboardLayout/Dashboard/KaziDashboard/KaziDashboard";
import UserDashboard from "../Layout/DashboardLayout/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "../Layout/DashboardLayout/Dashboard/AdminDashboard/AdminDashboard";
import MarriageApplicationForm from "../Layout/DashboardLayout/Dashboard/UserDashboard/MarriageApplicationForm/MarriageApplicationForm";
import BecomeKaziForm from "../Pages/BecomeKazi/BecomeKaziForm";
import DashboardHome from "../Layout/DashboardLayout/Dashboard/DashboardHome";
import ContactUs from "../Pages/ContactUS/ContactUs";
import MarraigeRequests from "../Layout/DashboardLayout/Dashboard/KaziDashboard/MarraigeRequests/MarraigeRequests";
import MarriageVerification from "../Layout/DashboardLayout/Dashboard/AdminDashboard/MarriageVerification/MarriageVerification";
import MarriageCertificate from "../Layout/DashboardLayout/Dashboard/UserDashboard/Certificate/MarriageCertificate";
import Payment from "../Layout/DashboardLayout/Dashboard/UserDashboard/Payment/Payment";
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
                Component: AboutUs
            },
            {
                path: '/contact',
                Component: ContactUs
            },
            {
                path: '/services',
                Component: Services
            },

            {
                path: '/become-kazi',
                Component: BecomeKaziForm,
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
                path: '/dashboard',
                Component: DashboardHome
            },
            {
                path: '/dashboard/kaziDashboard',
                Component: KaziDashboard
            },
            {
                path: '/dashboard/marriage-request',
                Component: MarraigeRequests
            },
            {
                path: '/dashboard/userDashboard',
                Component: UserDashboard
            },
            {
                path: '/dashboard/marriage-application-form',
                Component: MarriageApplicationForm
            },
            {
                path: '/dashboard/payment',
                Component: Payment
            },
            {
                path: '/dashboard/marriage-certificate',
                Component: MarriageCertificate
            },
            {
                path: '/dashboard/adminDashboard',
                Component: AdminDashboard,
            },
            {
                path: '/dashboard/marriage-verification',
                Component: MarriageVerification,
            },
            
            {
                path: '/dashboard/profile',
                Component: Profile
            },
        ]
    }
]);

export default router;