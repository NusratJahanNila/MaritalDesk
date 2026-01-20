import React, { useContext, useEffect } from 'react';
import { FaUserCircle, FaEdit, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthContext';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
    // animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl">
                {/* Enhanced Profile Card */}
                <div className="relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#013223] to-[#006747] opacity-10 dark:opacity-20 rounded-3xl"></div>
                    
                    {/* Card Shadow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                        {/* Card Header with Gradient */}
                        <div className="bg-gradient-to-r from-[#013223] to-[#006747] p-8 text-center relative">
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
                            </div>
                            
                            {/* Profile Image Container */}
                            <div className="relative inline-block" data-aos="zoom-in" data-aos-delay="200">
                                <div className="relative">
                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL || ''}
                                            alt="User"
                                            referrerPolicy="no-referrer"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-800 shadow-2xl flex items-center justify-center">
                                            <FaUserCircle className="text-7xl text-gray-300 dark:text-gray-600" />
                                        </div>
                                    )}
                                    
                                    {/* Verification Badge */}
                                    <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 p-2 rounded-full shadow-lg">
                                        <MdVerified className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8">
                            {/* User Info Section */}
                            <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="300">
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                                    {user?.displayName || 'User'}
                                </h2>
                                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                                    <FaEnvelope className="w-4 h-4" />
                                    <p className="text-lg">{user?.email}</p>
                                </div>
                            </div>

                            {/* Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {/* Account Status */}
                                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-green-100 dark:border-green-900/30" data-aos="fade-right" data-aos-delay="400">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                            <MdVerified className="w-6 h-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Account Status</p>
                                            <p className="text-lg font-semibold text-green-700 dark:text-green-300">Verified</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Member Since */}
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-blue-100 dark:border-blue-900/30" data-aos="fade-left" data-aos-delay="400">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <FaCalendarAlt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                                            <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                                                {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Update Profile Button */}
                            <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                                <Link
                                    to='/auth/updateProfile'
                                    className="group relative inline-flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-[#013223] to-[#006747] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Button Shine Effect */}
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    <FaEdit className="mr-3 w-5 h-5" />
                                    Update Profile
                                </Link>
                            </div>

                            {/* Footer Note */}
                            <div className="text-center mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Your information is secured with end-to-end encryption
                                </p>
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-24 h-24">
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-green-500 dark:border-green-400 rounded-tr-2xl"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-24 h-24">
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-green-500 dark:border-green-400 rounded-bl-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;