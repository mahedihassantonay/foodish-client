/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';

const Main = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <Outlet />
            <div className='mt-auto'>
            <Footer />
            </div>
        </div>
    );
};

export default Main;