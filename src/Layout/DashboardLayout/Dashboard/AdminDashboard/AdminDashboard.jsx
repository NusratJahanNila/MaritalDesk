import React from "react";

const AdminDashboard = () => {
    //  demo data
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
        <div className="max-w-6xl mx-auto py-5">
            <div className="bg-white rounded-2xl py-4 px-5">
                {/* dashboard */}
                <main className="">
                    <header className="border-b border-gray-300 pb-4 mb-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-green-900">Admin Dashboard</h1>
                    </header>

                    <section>
                        <h2 className="text-xl font-medium text-gray-700 mb-4">Marriage Form Submissions</h2>

                        <div className="overflow-x-auto bg-white rounded-lg shadow">
                            <table className="min-w-full text-left border-collapse">
                                <thead className="bg-gradient-to-r from-[#013223] to-[#006747] text-white text-sm sm:text-base">
                                    <tr>
                                        <th className="p-2 sm:p-3">#</th>
                                        <th className="p-2 sm:p-3">Groom</th>
                                        <th className="p-2 sm:p-3">Bride</th>
                                        <th className="p-2 sm:p-3 hidden md:table-cell">Kazi</th>
                                        <th className="p-2 sm:p-3">Status</th>
                                        <th className="p-2 sm:p-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs sm:text-sm">
                                    {forms.map((form) => (
                                        <tr key={form.id} className="border-b hover:bg-gray-100">
                                            <td className="p-2 sm:p-3">{form.id}</td>
                                            <td className="p-2 sm:p-3">{form.groomName}</td>
                                            <td className="p-2 sm:p-3">{form.brideName}</td>
                                            <td className="p-2 sm:p-3 hidden md:table-cell">{form.kaziName}</td>
                                            <td className="p-2 sm:p-3 font-semibold">
                                                <span
                                                    className={`px-2 py-1 rounded text-xs ${form.status === "Verified"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                        }`}
                                                >
                                                    {form.status}
                                                </span>
                                            </td>
                                            <td className="p-2 sm:p-3 text-center space-y-1 sm:space-x-2 flex flex-col sm:flex-row justify-center items-center">
                                                {form.status === "Pending" ? (
                                                    <>
                                                        <button className="px-3 py-1 bg-green-900 text-white rounded hover:bg-green-800 w-full sm:w-auto">
                                                            Verify
                                                        </button>
                                                        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 w-full sm:w-auto">
                                                            Reject
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 w-full sm:w-auto">
                                                        Generate Certificate
                                                    </button>
                                                )}
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

export default AdminDashboard;
