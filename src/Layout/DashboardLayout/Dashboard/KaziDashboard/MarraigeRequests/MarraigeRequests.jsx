import React, { useState } from "react";
import { Link } from "react-router";

const MarraigeRequests = () => {
    const [requests, setRequests] = useState([
        { id: 1, name: "Rohim", date: "12.12.12", status: "pending", reason: "" },
        { id: 2, name: "Korim", date: "15.12.12", status: "pending", reason: "" },
        { id: 3, name: "Shanto", date: "20.12.12", status: "verified", reason: "" },
        { id: 4, name: "Rina", date: "25.12.12", status: "verified", reason: "" },
        { id: 5, name: "Sadia", date: "30.12.12", status: "rejected", reason: "Incomplete documents" },
    ]);

    const handleVerify = (id) => {
        setRequests(requests.map(req => 
            req.id === id ? { ...req, status: "verified", reason: "" } : req
        ));
    };

    const handleReject = (id) => {
        const reason = prompt("Please enter rejection reason:");
        if (reason) {
            setRequests(requests.map(req => 
                req.id === id ? { ...req, status: "rejected", reason } : req
            ));
        }
    };

    const getStatusColor = (status) => {
        switch(status) {
            case "pending": 
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
            case "verified": 
                return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
            case "rejected": 
                return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
            default: 
                return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
        }
    };

    const getStatusText = (status) => {
        switch(status) {
            case "pending": return "Pending";
            case "verified": return "Verified";
            case "rejected": return "Rejected";
            default: return "Unknown";
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-5 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm dark:shadow-gray-900">
                <main className="flex-1 p-2 md:p-10">
                    <header className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-green-900 dark:text-green-300">Kazi Dashboard</h1>
                    </header>

                    {/* Consolidated Requests Table */}
                    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-semibold text-green-900 dark:text-green-300 mb-6">
                            All Marriage Requests
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
                                    <tr>
                                        <th className="p-3 font-semibold">#</th>
                                        <th className="p-3 font-semibold">Applicant</th>
                                        <th className="p-3 font-semibold">Date</th>
                                        <th className="p-3 font-semibold">Status</th>
                                        <th className="p-3 font-semibold">Reason</th>
                                        <th className="p-3 font-semibold text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((req) => (
                                        <tr key={req.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-900 dark:border-gray-700">
                                            <td className="p-3 dark:text-gray-300">{req.id}</td>
                                            <td className="p-3 font-medium dark:text-gray-200">{req.name}</td>
                                            <td className="p-3 dark:text-gray-300">{req.date}</td>
                                            <td className="p-3">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(req.status)}`}>
                                                    {getStatusText(req.status)}
                                                </span>
                                            </td>
                                            <td className="p-3">
                                                {req.reason ? (
                                                    <span className="text-red-600 dark:text-red-400 italic">"{req.reason}"</span>
                                                ) : (
                                                    <span className="text-gray-400 dark:text-gray-500">-</span>
                                                )}
                                            </td>
                                            <td className="p-3">
                                                <div className="flex justify-center gap-2 min-w-[250px]">
                                                    {/* View Details Button - Always visible */}
                                                    <Link
                                                        to="#"
                                                        className="px-4 py-2 bg-amber-400 dark:bg-yellow-700 text-white rounded hover:bg-yellow-700 dark:hover:bg-yellow-600 text-sm font-medium w-28 text-center transition-colors duration-200"
                                                    >
                                                        View Details
                                                    </Link>
                                                    
                                                    {/* Verify Button - Disabled for verified/rejected */}
                                                    <button
                                                        onClick={() => handleVerify(req.id)}
                                                        disabled={req.status !== "pending"}
                                                        className={`px-4 py-2 rounded text-sm font-medium w-28 text-center transition-colors duration-200 ${
                                                            req.status !== "pending"
                                                                ? "bg-green-300 dark:bg-green-900/50 text-green-700 dark:text-green-600 cursor-not-allowed"
                                                                : "bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-600"
                                                        }`}
                                                    >
                                                        Verify
                                                    </button>
                                                    
                                                    {/* Reject Button - Disabled for verified/rejected */}
                                                    <button
                                                        onClick={() => handleReject(req.id)}
                                                        disabled={req.status !== "pending"}
                                                        className={`px-4 py-2 rounded text-sm font-medium w-28 text-center transition-colors duration-200 ${
                                                            req.status !== "pending"
                                                                ? "bg-red-300 dark:bg-red-900/50 text-red-700 dark:text-red-600 cursor-not-allowed"
                                                                : "bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-600"
                                                        }`}
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Summary Stats */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-lg border border-yellow-200 dark:border-yellow-900/30">
                            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Pending Requests</h3>
                            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                                {requests.filter(req => req.status === "pending").length}
                            </p>
                        </div>
                        <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg border border-green-200 dark:border-green-900/30">
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Verified Requests</h3>
                            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                {requests.filter(req => req.status === "verified").length}
                            </p>
                        </div>
                        <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-lg border border-red-200 dark:border-red-900/30">
                            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Rejected Requests</h3>
                            <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                                {requests.filter(req => req.status === "rejected").length}
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MarraigeRequests;