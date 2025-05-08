import React from 'react';
import { MdDone } from "react-icons/md";


const YearlyCards = () => {
    return (
        <div>
            <div className="flex gap-15 mt-15">
                <div className="">
                    <div className="border border-gray-200 rounded-3xl py-8 px-10 flex flex-col gap-5 w-105">
                        <div className=" border-b border-gray-200 pb-3 grid gap-3">
                            <h1 className='text-3xl font-bold'>Basic Package</h1>
                            <p className='text-gray-500'>Perfect for homeowners or small business needing occasional</p>
                        </div>
                        <div className="bg-base-300 p-4 rounded-xl">
                            <p className='text-4xl font-bold text-center'>$119.99<span className='text-sm'>/per month</span></p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p>Electrical System inspection</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p>Minor repairs (up to 2 hours)</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p>Priority scheduling</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p> 24/7 support hotline</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-[#FCDE70] w-full p-3.5 text-2xl rounded-xl duration-300 hover:bg-[#1B4B36] hover:text-white">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border border-gray-200 rounded-3xl py-8 px-10 flex flex-col gap-5 w-105 bg-[#1B4B36] text-white">
                        <div className=" border-b border-gray-200 pb-3 grid gap-3">
                            <h1 className='text-3xl font-bold'>Standard Plan</h1>
                            <p className=''>Ideal for those who require more frequent maintenance and energy.</p>
                        </div>
                        <div className="bg-[#FCDE70] text-black p-4 rounded-xl">
                            <p className='text-4xl font-bold text-center'>$159.99<span className='text-sm'>/per month</span></p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 ">
                                <div className="bg-[#FCDE70] rounded-full p-0.5">
                                    <MdDone className='text-black' />
                                </div>
                                <p>Everything in the Basic Plan</p>
                            </div>
                            <div className="flex items-center gap-3 ">
                                <div className="bg-[#FCDE70] rounded-full p-0.5">
                                    <MdDone className='text-black' />
                                </div>
                                <p>Electrical panel maintenance</p>
                            </div>
                            <div className="flex items-center gap-3 ">
                                <div className="bg-[#FCDE70] rounded-full p-0.5">
                                    <MdDone className='text-black' />
                                </div>
                                <p>Installation of standard fixtures</p>
                            </div>
                            <div className="flex items-center gap-3 ">
                                <div className="bg-[#FCDE70] rounded-full p-0.5">
                                    <MdDone className='text-black' />
                                </div>
                                <p>Energy-saving consultation</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="w-full p-3.5 text-2xl rounded-xl duration-300 
                            text-black bg-white hover:bg-[#FCDE70] hover:text-black">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border border-gray-200 rounded-3xl py-8 px-10 flex flex-col gap-5 w-105">
                        <div className=" border-b border-gray-200 pb-3 grid gap-3">
                            <h1 className='text-3xl font-bold'>Premium Plan</h1>
                            <p className='text-gray-500'>Designed for large project or business with ongoing electrical ned.</p>
                        </div>
                        <div className="bg-base-300 p-4 rounded-xl">
                            <p className='text-4xl font-bold text-center'>$899.99<span className='text-sm'>/per month</span></p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p>Everything in the Standard Plan</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p>Full electrical system audit</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p>Unlimited repairs & installations</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="bg-[#1B4B36] rounded-full p-0.5">
                                    <MdDone className='text-white' />
                                </div>
                                <p>Emergency response within 1 hour</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-[#FCDE70] w-full p-3.5 text-2xl rounded-xl duration-300 hover:bg-[#1B4B36] hover:text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YearlyCards;