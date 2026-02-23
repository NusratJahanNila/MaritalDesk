import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Header/Banner';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <title>Home | MaritalDesk</title>
            <Navbar></Navbar>
            
            <main className='min-h-[50vh] '>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;