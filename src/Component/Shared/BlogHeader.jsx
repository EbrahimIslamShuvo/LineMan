import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";

const BlogHeader = ({ name, image, date, category }) => {
    return (
        <div className="relative">
            <div className="w-11/12 mx-auto bg-gradient-to-r from-transparent via-[#1B4B36] to-transparent h-[33vh] rounded-3xl mb-15 relative overflow-hidden">
                {/* Left image */}
                <div
                    className="h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url(${image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for left image */}
                </div>

                {/* Middle Empty Space (can be used for other content if needed) */}
                <div />

                {/* Right image */}
                <div
                    className="h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url(${image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for right image */}
                </div>

                {/* Text over the images */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-white font-extrabold text-4xl text-center">
                        {name}
                    </h1>
                    <div className="flex gap-20 mt-5">
                        <div className="text-white text-xl flex items-center gap-1.5">
                            <FaRegCalendar/>
                            <h4>{date}</h4>
                        </div>
                        <div className="text-white text-xl flex items-center gap-1.5">
                            <IoMdPricetag />
                            <h4>{category}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
