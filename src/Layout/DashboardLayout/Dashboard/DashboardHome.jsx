import React from 'react';
import UserDashboard from './UserDashboard/UserDashboard';
import KaziDashboard from './KaziDashboard/KaziDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';

const DashboardHome = () => {
    return (
        <div>
            Dashboard home page
            <UserDashboard></UserDashboard>
            <KaziDashboard></KaziDashboard>
            <AdminDashboard></AdminDashboard>
        </div>
    );
};

export default DashboardHome;