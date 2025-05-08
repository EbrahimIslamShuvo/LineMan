import React from 'react';
import UpNav from './Component/UpNav';
import { Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import NavBar2 from './Component/NavBar2';

const Root = () => {
    return (
        <div>
            <UpNav></UpNav>
            <NavBar></NavBar>
            {/* <NavBar2></NavBar2> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;