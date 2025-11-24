import React, { useEffect } from "react";
import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollText, User } from "lucide-react";

const UserDashboard = () => {
    // animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);
    return (
        <div className="max-w-6xl mx-auto py-5">
            <div className="bg-white rounded-2xl p-4">
                {/* dashboard */}
                <main className="flex-1 p-4 md:p-10">
                    <header className="border-b border-gray-300 pb-4 mb-6">
                        <h1 className="text-3xl font-bold text-green-900">Dashboard</h1>
                    </header>

                    <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-left">
                            <h3 className="font-medium text-gray-800 mb-2 flex gap-2 items-center"><FaWpforms />My Applications</h3>
                            <p className="text-sm text-gray-600">
                                View and track your marriage or divorce application status.
                            </p>
                            <Link
                                to='/dashboard/marriage-application-form'
                                className="mt-4 px-4 py-2 btn bg-gradient-to-r from-[#013223] to-[#006747] text-white">
                                View Applications
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-left" data-aos-delay="100">
                            <h3 className="font-medium text-gray-800 mb-2 flex gap-2 items-center"><ScrollText />Certificates</h3>
                            <p className="text-sm text-gray-600">
                                Download or verify your issued certificates.
                            </p>
                            <button className="mt-4 px-4 py-2  btn bg-gradient-to-r from-[#013223] to-[#006747] text-white">
                                View Certificates
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-left" data-aos-delay="200">
                            <h3 className="font-medium text-gray-800 mb-2 flex gap-2 items-center"><User />Profile</h3>
                            <p className="text-sm text-gray-600">
                                Manage your personal information and account settings.
                            </p>
                            <Link to={'/profile'} className="mt-4 px-4 py-2  btn bg-gradient-to-r from-[#013223] to-[#006747] text-white">
                                Edit Profile
                            </Link >
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
};

export default UserDashboard;
