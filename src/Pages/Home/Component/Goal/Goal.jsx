import React from 'react';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';
import { PiMicroscopeFill } from 'react-icons/pi';
import { IoDiamondOutline } from "react-icons/io5";
import Button from '../../../../Component/Shared/Button';
import { FaPhone } from "react-icons/fa6";

const Goal = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-center items-center gap-10 w-8/12 mx-auto my-20">
                    <div className="w-9/12 flex flex-col gap-8">
                        <div className="flex flex-col gap-5">
                            <SubHeader name={"OUR GOALS"} color={"text-[#1B4B36]"}></SubHeader>
                            <Header beforeBr={"Our goals to deliver top-notch"} afterBr={""} yellowText={"electrical solutions"}></Header>
                            <p className='text-gray-400'>Our goal is to be a leader in providing environmentally conscious electrical <br />services. We focus on energy-efficient solutions and sustainable practices <br />to not only meet industry standards but to exceed them.</p>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <div className="group">
                                <div className="flex flex-col gap-7 border border-gray-200 p-10 rounded-3xl group-hover:bg-[#1B4B36] group-hover:text-white duration-500">
                                    <div className="">
                                        <PiMicroscopeFill className='text-5xl transition-all duration-500  group-hover:rotate-y-180'></PiMicroscopeFill>
                                    </div>
                                    <div className="">
                                        <h1 className='text-xl font-bold'>Commitment To Innovation</h1>
                                        <p className='text-gray-500 group-hover:text-white'>We strive to continuously innovate, incorporating.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex flex-col gap-7 border border-gray-200 p-10 rounded-3xl group-hover:bg-[#1B4B36] group-hover:text-white duration-500">
                                    <div className="">
                                        <IoDiamondOutline className='text-5xl transition-all duration-500  group-hover:rotate-y-180'></IoDiamondOutline>
                                    </div>
                                    <div className="">
                                        <h1 className='text-xl font-bold'>Commitment To Innovation</h1>
                                        <p className='text-gray-500 group-hover:text-white'>We strive to continuously innovate, incorporating.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-20">
                            <Button name={"Know More"}></Button>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#1B4B36] hover:bg-[#FCDE70] hover:text-black duration-500 text-white p-4 rounded-full">
                                    <FaPhone></FaPhone>
                                </div>
                                <p>+880 1648438489</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 w-6/12">
                        <div className="flex flex-col items-center justify-center gap-5 h-full my-auto">
                            <img className='w-[231px] h-[250px] rounded-3xl' src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/03/our-goals-img-1.jpg" alt="" />
                            <img className='w-[231px] h-[250px] rounded-3xl' src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/03/our-goals-img-3.jpg" alt="" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <img className='w-[271px] h-[280px] rounded-3xl' src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/03/our-goals-img-2.jpg" alt="" />
                            <img className='w-[271px] h-[280px] rounded-3xl' src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/03/our-goals-img-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;