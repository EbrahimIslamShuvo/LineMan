import React from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const UpNav = () => {
    return (
        <div>
            <div className="border-b border-gray-200 shadow">
                <div className="flex justify-between w-11/12  md:w-7/12 mx-auto md:py-4 py-2" >
                    <div className="flex items-center md:gap-10 justify-between md:justify-start text-[12px] gap-15">
                        <div className="flex items-center gap-1.5 text-gray-600">
                            <CiLocationOn className='md:text-2xl'></CiLocationOn>
                            <p>Banasree, Dhaka, Bangladesh</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                            <CiMail className='text-2xl'></CiMail>
                            <p>ebrahimislam2003@gmailo.com</p>
                        </div>
                    </div>
                    <div className=" hidden md:block">
                        <div className="flex items-center">
                            <div className="">
                                <FaInstagram className='text-xl mr-3 duration-300 hover:text-[#FCDE70]'></FaInstagram>
                            </div>
                            <div className="border-x border-gray-300 px-1">
                                <FaFacebookF className='text-xl duration-300 hover:text-[#FCDE70]'></FaFacebookF>
                            </div>
                            <div className="">
                                <FaTwitter className='text-xl ml-3 duration-300 hover:text-[#FCDE70]'></FaTwitter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNav;