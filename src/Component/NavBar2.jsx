import React from 'react';
import { PiArrowFatLineRight } from 'react-icons/pi';

const NavBar2 = () => {
    return (
        <div>
            <div className="">
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="navbar bg-base-300 w-full flex justify-between">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-6 w-6 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="mx-2 flex-1 px-2">Navbar Title</div>

                            <div className='w-4/12'>
                                <p>Menu</p>
                            </div>
                            <div className="hidden flex-none lg:block">
                                <div className="flex items-center gap-2 bg-[#FCDE70] hover:bg-[#1B4B36] p-3 font-semibold rounded-lg hover:text-white duration-300">
                                    <p>Book Now</p>
                                    <PiArrowFatLineRight className='text-xl'></PiArrowFatLineRight>
                                </div>
                            </div>
                        </div>
                        {/* Page content here */}
                        Content
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar2;