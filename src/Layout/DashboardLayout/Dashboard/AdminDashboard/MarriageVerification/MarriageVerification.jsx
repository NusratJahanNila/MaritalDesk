import React from "react";

const MarriageVerification = () => {
    // demo data
    const forms = [
        {
            id: 1,
            groomName: "Rahim ",
            brideName: "Karima Begum",
            kaziName: "Abdul Kazi",
            status: "Pending",
        },
        {
            id: 2,
            groomName: "Kodu mia",
            brideName: "Fatema Akter",
            kaziName: "Jalal Uddin",
            status: "Verified",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-5 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-2xl py-4 px-5 shadow-sm">
                {/* dashboard */}
                <main className="">
                    <header className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-green-900 dark:text-green-300">Admin Dashboard</h1>
                    </header>

                    <section>
                        <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">Marriage Form Submissions</h2>

                        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-900 border border-gray-200 dark:border-gray-700">
                            <table className="min-w-full text-left border-collapse">
                                <thead className="bg-gradient-to-r from-[#013223] to-[#006747] text-white text-sm sm:text-base">
                                    <tr>
                                        <th className="p-2 sm:p-3">#</th>
                                        <th className="p-2 sm:p-3">Groom</th>
                                        <th className="p-2 sm:p-3">Bride</th>
                                        <th className="p-2 sm:p-3 hidden md:table-cell">Kazi</th>
                                        <th className="p-2 sm:p-3">Status</th>
                                        <th className="p-2 sm:p-3 text-center min-w-[300px]">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs sm:text-sm dark:text-gray-300">
                                    {forms.map((form) => (
                                        <tr key={form.id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900">
                                            <td className="p-2 sm:p-3">{form.id}</td>
                                            <td className="p-2 sm:p-3 font-medium dark:text-gray-200">{form.groomName}</td>
                                            <td className="p-2 sm:p-3 font-medium dark:text-gray-200">{form.brideName}</td>
                                            <td className="p-2 sm:p-3 hidden md:table-cell dark:text-gray-300">{form.kaziName}</td>
                                            <td className="p-2 sm:p-3 font-semibold">
                                                <span
                                                    className={`px-2 py-1 rounded text-xs ${form.status === "Verified"
                                                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                                        : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                                                        }`}
                                                >
                                                    {form.status}
                                                </span>
                                            </td>
                                            <td className="p-2 sm:p-3">
                                                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                                                    {/* View Details Button - Always visible */}
                                                    <button className="px-4 py-2 bg-amber-400 dark:bg-yellow-700 text-white rounded hover:bg-yellow-700 dark:hover:bg-yellow-600 w-full sm:w-auto text-sm font-medium transition-colors duration-200">
                                                        View 
                                                    </button>
                                                    
                                                    {/* Conditional Buttons */}
                                                    {form.status === "Pending" ? (
                                                        <>
                                                            <button className="px-4 py-2 bg-green-900 dark:bg-green-800 text-white rounded hover:bg-green-800 dark:hover:bg-green-700 w-full sm:w-auto text-sm font-medium transition-colors duration-200">
                                                                Verify
                                                            </button>
                                                            <button className="px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded hover:bg-red-700 dark:hover:bg-red-600 w-full sm:w-auto text-sm font-medium transition-colors duration-200">
                                                                Reject
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <button className="px-4 py-2 bg-yellow-600 dark:bg-yellow-700 text-white rounded hover:bg-yellow-700 dark:hover:bg-yellow-600 w-full sm:w-auto text-sm font-medium transition-colors duration-200">
                                                            Generate Certificate
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </section>
                </main>
            </div>
        </div>
    );
};

export default MarriageVerification;