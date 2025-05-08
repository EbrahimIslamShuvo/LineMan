import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { PiArrowFatLineRight } from 'react-icons/pi';
import logo from '../assets/Image/logo.svg';
import Button from './Shared/Button';

const NavBar = () => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar md:w-8/12  mx-auto px-4 py-4 lg:px-8">
                    {/* Left: Logo */}
                    <div className="navbar-start">
                        <NavLink to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="w-40" />
                        </NavLink>
                    </div>

                    {/* Center: Navigation Links */}
                    <div className="navbar-center hidden lg:flex gap-6 font-semibold">
                        <NavLink end to="/" className={({ isActive }) =>
                            isActive ? "text-black font-bold border-b-2 border-black pb-1" : "hover:text-black"
                        }>Home</NavLink>
                        <NavLink to="/service" className={({ isActive }) =>
                            isActive ? "text-black font-bold border-b-2 border-black pb-1" : "hover:text-black"
                        }>Service</NavLink>
                        <NavLink to="/blog" className={({ isActive }) =>
                            isActive ? "text-black font-bold border-b-2 border-black pb-1" : "hover:text-black"
                        }>Blog</NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "text-black font-bold border-b-2 border-black pb-1" : "hover:text-black"
                        }>Contact Us</NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "text-black font-bold border-b-2 border-black pb-1" : "hover:text-black"
                        }>About Us</NavLink>
                    </div>

                    {/* Right: Call and Book Button */}
                    <div className="navbar-end items-center gap-4 hidden lg:block">
                        <div className="flex justify-end gap-5 items-center">
                            <div className="flex justify-end items-center gap-2 text-sm font-medium">
                                <FaPhone />
                                <p>+880 1648438489</p>
                            </div>
                            <Button name={"Book Now"}></Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center ml-auto">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost bg-[#FCDE70]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>

            {/* Drawer Content for Mobile */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu bg-[#FCDE70] min-h-full w-80 p-4 text-base-content">
                    <h4 className="text-black font-extrabold text-3xl border-b border-gray-500 py-3">MENU</h4>
                    <li className="my-2">
                        <NavLink end to="/" className={({ isActive }) =>
                            isActive ? "font-bold bg-black text-white rounded-md px-3 py-2" : "hover:font-bold"
                        }>Home</NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink to="/service" className={({ isActive }) =>
                            isActive ? "font-bold bg-black text-white rounded-md px-3 py-2" : "hover:font-bold"
                        }>Services</NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink to="/blog" className={({ isActive }) =>
                            isActive ? "font-bold bg-black text-white rounded-md px-3 py-2" : "hover:font-bold"
                        }>Blogs</NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "font-bold bg-black text-white rounded-md px-3 py-2" : "hover:font-bold"
                        }>About Us</NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "font-bold bg-black text-white rounded-md px-3 py-2" : "hover:font-bold"
                        }>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
