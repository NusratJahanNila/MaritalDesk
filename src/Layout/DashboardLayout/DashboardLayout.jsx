import React, { use } from 'react';
import logoImg from '../../assets/Maritaldesk.jpeg'
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
import { Link, NavLink, Outlet } from 'react-router';
import { HeartHandshake, HeartCrack, ScrollText, User, } from "lucide-react";

const DashboardLayout = () => {
    const { user, logout } = use(AuthContext);

    // Logout
    const handleLogout = (e) => {
        e.preventDefault();
        logout()
            .then(() => {
                toast.success('Logged out successfully!!')
            }).catch((error) => {
                console.log(error)
            });
    }
    const links = <>
        <li className='text-lg text-green-800 font-bold'><NavLink
            to='/'
            className={({ isActive }) => isActive && 'btn bg-gradient-to-r from-[#013223] to-[#006747] text-white'}>Home</NavLink></li>

        <li className='text-lg text-green-800 font-bold'><NavLink
            to='/services'
            className={({ isActive }) => isActive && 'btn bg-gradient-to-r from-[#013223] to-[#006747] text-white'}>
            <div className="dropdown">
                <div tabIndex={0} role="button" className=" mx-1">Services</div>
            </div>
        </NavLink></li>
        <li className='text-lg text-green-800 font-bold'><NavLink
            to='/dashboard/userDashboard'
            className={({ isActive }) => isActive && 'btn bg-gradient-to-r from-[#013223] to-[#006747] text-white'}> Dashboard</NavLink></li>

        <li className='text-lg text-green-800 font-bold'><NavLink
            to='/dashboard/kaziDashboard'
            className={({ isActive }) => isActive && 'btn bg-gradient-to-r from-[#013223] to-[#006747] text-white'}>Kazi </NavLink></li>

        <li className='text-lg text-green-800 font-bold'><NavLink
            to='/dashboard/adminDashboard'
            className={({ isActive }) => isActive && 'btn bg-gradient-to-r from-[#013223] to-[#006747] text-white'}> Admin</NavLink></li>

        <li className='text-lg text-green-800 font-bold'><NavLink
            to='/about'
            className={({ isActive }) => isActive && 'btn bg-gradient-to-r from-[#013223] to-[#006747] text-white'}>About Us</NavLink></li>

    </>
    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <div className="navbar  max-w-6xl mx-auto">
                    <div className="navbar-start">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <Link to='/' className=" text-xl flex items-center justify-center gap-1">
                            <img
                                src={logoImg}
                                alt="logo"
                                className='w-15 hidden md:block'
                            />
                            <span className='text-4xl font-light text-orange-600'>|</span>
                            <span className='font-bold sm:text-2xl text-green-800'>MaritalDesk</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul
                            className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className='navbar-end '>
                        <div >
                            {
                                user && user.photoURL ? <div className="mr-2 flex items-center gap-2">
                                    <img
                                        src={user.photoURL}
                                        alt="user"
                                        referrerPolicy="no-referrer"
                                        className='rounded-full w-8 h-8' />
                                    <button onClick={handleLogout} className="btn bg-gradient-to-r from-[#013223] to-[#006747] text-white">Logout</button>
                                </div> : <Link to='/auth/login' className="btn bg-gradient-to-r from-[#013223] to-[#006747] text-white">Login</Link>
                            }
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                <div className="bg-base-300 min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-green-900 text-white  shadow-sm is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li className='hover:text-yellow-400'>
                            <Link to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>

                        {/* Our list items */}
                        {/* my content */}
                        <li className='hover:text-yellow-400'>
                            <div className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Marriage Requests">
                                <div >
                                    <HeartHandshake size={18} />
                                </div>
                                <span className="is-drawer-close:hidden">
                                    <NavLink to='/dashboard/marriage-application-form'>Marriage Requests</NavLink>
                                </span>
                            </div>
                        </li>
                        <li className='hover:text-yellow-400'>
                            <div className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Divorce Requests">
                                <div >
                                    <HeartCrack className="my-1.5 inline-block size-4" />
                                </div>
                                <span className="is-drawer-close:hidden">
                                    <NavLink to='/dashboard/marriage-application-form'>Divorce Requests</NavLink>
                                </span>
                            </div>
                        </li>
                        <li className='hover:text-yellow-400'>
                            <div className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Certificates">
                                <div >
                                    <ScrollText className="my-1.5 inline-block size-4" />
                                </div>
                                <span className="is-drawer-close:hidden">
                                    <NavLink to='/dashboard/marriage-application-form'>Certificates</NavLink>
                                </span>
                            </div>
                        </li>
                        <li className='hover:text-yellow-400'>
                            <div className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                                <div >
                                    <User className="my-1.5 inline-block size-4" />
                                </div>
                                <span className="is-drawer-close:hidden">
                                    <NavLink to='/dashboard/marriage-application-form'>Profile</NavLink>
                                </span>
                            </div>
                        </li>

                        {/* List item */}
                        <li className='hover:text-yellow-400'>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span className="is-drawer-close:hidden"> Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;