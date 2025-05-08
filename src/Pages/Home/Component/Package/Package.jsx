import React, { useState } from 'react';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';
import MonthlyCards from './Component/MonthlyCards';
import YearlyCards from './Component/YearlyCards';
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";

const Package = () => {
    const [activeTab, setActiveTab] = useState("month");

    const activeStyle = `bg-[#1B4B36] text-white p-3 rounded-xl`;
    const inactiveStyle = `bg-transparent text-black p-3 rounded-xl`;

    return (
        <div>
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto my-5">
                <div className="flex flex-col justify-center items-center">
                    <SubHeader name={"OUR PRICING"} color={"text-[#1B4B36]"} />
                    <Header beforeBr={"High-quality electrical services"} afterBr={"without breaking"} yellowText={"the bank"} />
                </div>

                <div className="flex border border-gray-300 px-5 py-3 gap-5 mt-10 rounded-xl">
                    <p 
                        className={activeTab === "month" ? activeStyle : inactiveStyle}
                        onClick={() => setActiveTab("month")}
                    >
                        Monthly
                    </p>
                    <p 
                        className={activeTab === "year" ? activeStyle : inactiveStyle}
                        onClick={() => setActiveTab("year")}
                    >
                        Yearly
                    </p>
                </div>

                <div className="w-9/12 mx-auto">
                    {activeTab === "month" ? <MonthlyCards /> : <YearlyCards />}
                </div>
                <div className="flex justify-center gap-30 mt-10">
                    <div className="flex items-center gap-2 text-gray-500 text-lg">
                        <FaRegCalendarCheck className='text-3xl'></FaRegCalendarCheck>
                        <p>Get 30 day free trial</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-lg">
                        <AiOutlineDollar   className='text-3xl'></AiOutlineDollar >
                        <p>No any hidden fees pay</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-lg">
                        <MdOutlineWatchLater className='text-3xl'></MdOutlineWatchLater>
                        <p>You can cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
