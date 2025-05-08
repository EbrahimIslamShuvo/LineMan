import React from 'react';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';
import Button from '../../../../Component/Shared/Button';
import { FaPhone } from 'react-icons/fa6';

const ContactUs = () => {
    return (
        <div className="relative bg-white">
            {/* Full-screen background container */}
            <div className="relative w-11/12 mx-auto rounded-3xl">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed rounded-3xl"
                    style={{
                        backgroundImage: "url('https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/cta-box-bg.jpg')"
                    }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-55 rounded-3xl"></div>
                </div>

                {/* Content container */}
                <div className="relative z-10 flex items-center justify-center w-10/12 mx-auto pt-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto gap-20 px-4">
                        <div className="flex flex-col gap-5 text-white max-w-[600px]">
                            <SubHeader name={"CONTACT US"} color={"text-[#FCDE70]"} />
                            <Header
                                beforeBr={"We're here to answer your"}
                                afterBr={""}
                                yellowText={"questions and help"}
                            />
                            <p className="text-lg">
                                Whether you're planning a new project or need emergency support, we're
                                available to provide fast and reliable assistance.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 mt-5">
                                <div className="text-black">
                                    <Button name={"Contact Us"} />
                                </div>
                                <p className='font-bold text-lg hidden sm:block'>OR</p>
                                <div className="group flex items-center gap-5 cursor-pointer">
                                    <div className="bg-[#FCDE70] group-hover:bg-[#1B4B36] p-3 rounded-full duration-500">
                                        <FaPhone className='text-xl text-[#1B4B36] group-hover:text-[#FCDE70]' />
                                    </div>
                                    <div>
                                        <p className="text-sm">CALL US ANY TIME</p>
                                        <p className='text-[#FCDE70] font-bold text-lg'>+880 1648438489</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/cta-box-img.png"
                                alt="Support team illustration"
                                className="w-[500px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;