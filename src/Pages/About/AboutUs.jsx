import React from 'react';
import PageHeader from '../../Component/Shared/PageHeader';
import { FaHardHat, FaTools } from 'react-icons/fa';
import SubHeader from '../../Component/Shared/SubHeader';
import Header from '../../Component/Shared/Header';
import { FaCircleCheck } from "react-icons/fa6";
import Button from '../../Component/Shared/Button';
import { FaPhoneAlt } from "react-icons/fa";
import { LuScanEye } from "react-icons/lu";
import { TbDeviceVisionPro } from "react-icons/tb";

const AboutUs = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <PageHeader name={"About Us"} image={"https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/service-image-6.jpg"}></PageHeader>
                    <div className="md:w-8/12 w-10/12 mx-auto my-16 flex flex-col lg:flex-row justify-center items-start gap-10">
                        {/* Image with badge */}
                        <div className="relative mx-auto md:mb-15 mb-20 lg:mr-30">
                            <img
                                src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/trusted-expert-image.jpg"
                                alt="Worker"
                                className="rounded-3xl md:w-[500px] w-[330px] md:h-auto object-cover"
                            />
                            {/* Badge */}
                            <div className="absolute top-0 -right-30 bg-[#1B4B36] text-white px-3 py-5 rounded-xl flex flex-col items-center shadow-lg">
                                <p className=" rotate-180 text-xl" style={{ writingMode: 'vertical-rl' }}>2017 from our <br /> experience</p>
                                <p className="bg-white text-[#1B4B36] mt-3 px-3 py-1 rounded-xl font-semibold text-lg">
                                    Since
                                </p>
                            </div>
                            {/* Yellow Info Card */}
                            <div className="bg-[#FCDE70] w-60 absolute md:-bottom-27 -bottom-38 -right-30 px-10 py-8 rounded-2xl">
                                <div className="flex flex-col gap-3 border-b border-[#1B4B36] pb-5">
                                    <FaHardHat className='text-5xl text-[#1B4B36]'></FaHardHat>
                                    <p className='text-3xl text-[#1B4B36] leading-5'>500+ <br /><span className='text-lg'>Projects Complete</span></p>
                                </div>
                                <div className="flex flex-col gap-3 mt-5">
                                    <FaTools className='text-5xl text-[#1B4B36]'></FaTools>
                                    <p className='text-3xl text-[#1B4B36] leading-5'>1000+ <br /><span className='text-lg'>Projects Complete</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <SubHeader name={"WHO WE ARE"} color={"text-[#1B4B36]"}></SubHeader>
                            <Header beforeBr={"Trusted experts in electrical"} afterBr={""} yellowText={"services"}></Header>
                            <p className='w-9/12 text-gray-500'>From small repairs to large-scale installations, our experienced electricians provide tailored solutions to power your home.</p>
                            <div className="">
                                <div className="flex items-center gap-2 text-lg font-semibold group">
                                    <FaCircleCheck className=' text-[#1B4B36] group-hover:text-[#FCDE70] duration-300' />
                                    <p className='text-gray-600'>Committed to delivering safe and efficient electrical solutions.</p>
                                </div>
                                <div className="flex items-center gap-2 text-lg font-semibold group">
                                    <FaCircleCheck className=' text-[#1B4B36] group-hover:text-[#FCDE70] duration-300' />
                                    <p className='text-gray-600'>Backed by years of expertise and professional excellence.</p>
                                </div>
                                <div className="flex items-center gap-2 text-lg font-semibold group">
                                    <FaCircleCheck className=' text-[#1B4B36] group-hover:text-[#FCDE70] duration-300' />
                                    <p className='text-gray-600'>
                                        Focused on innovation and customer satisfaction at every step.</p>
                                </div>
                            </div>
                            <div className="flex items-center border border-gray-300 px-6 py-8.5 rounded-3xl">
                                <div className="flex gap-5 items-center group">
                                    <div className="bg-[#FCDE70] text-[#1B4B36] group-hover:bg-[#1B4B36] group-hover:text-[#FCDE70] duration-500 p-4 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M16.0073 14.7858C15.6895 14.9238 15.3467 14.995 15.0002 14.995C14.6537 14.995 14.3109 14.9238 13.993 14.7858L1.77873 9.12863C1.58039 9.02859 1.41371 8.87546 1.29726 8.68629C1.1808 8.49712 1.11914 8.27934 1.11914 8.0572C1.11914 7.83506 1.1808 7.61728 1.29726 7.42811C1.41371 7.23894 1.58039 7.08581 1.77873 6.98577L13.993 1.28577C14.3109 1.14776 14.6537 1.07654 15.0002 1.07654C15.3467 1.07654 15.6895 1.14776 16.0073 1.28577L28.2216 6.94291C28.4199 7.04295 28.5866 7.19608 28.7031 7.38525C28.8195 7.57442 28.8812 7.7922 28.8812 8.01434C28.8812 8.23648 28.8195 8.45426 28.7031 8.64343C28.5866 8.8326 28.4199 8.98573 28.2216 9.08577L16.0073 14.7858Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.9284 15.75L15.857 21.7714C15.5778 21.8988 15.2746 21.9647 14.9677 21.9647C14.6609 21.9647 14.3576 21.8988 14.0784 21.7714L1.07129 15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.9284 22.7144L15.857 28.7358C15.5778 28.8631 15.2746 28.929 14.9677 28.929C14.6609 28.929 14.3576 28.8631 14.0784 28.7358L1.07129 22.7144" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </div>
                                    <p className='text-2xl font-semibold'>We understand that every project.</p>
                                </div>
                                <div className="flex gap-5 items-center group">
                                    <div className="bg-[#FCDE70] text-[#1B4B36] group-hover:bg-[#1B4B36] group-hover:text-[#FCDE70] duration-500 p-4 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M9.64272 27.8572C14.3766 27.8572 18.2141 24.0197 18.2141 19.2858C18.2141 14.5519 14.3766 10.7144 9.64272 10.7144C4.90885 10.7144 1.07129 14.5519 1.07129 19.2858C1.07129 24.0197 4.90885 27.8572 9.64272 27.8572Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.3566 27.8572C25.0905 27.8572 28.928 24.0197 28.928 19.2858C28.928 14.5519 25.0905 10.7144 20.3566 10.7144C15.6227 10.7144 11.7852 14.5519 11.7852 19.2858C11.7852 24.0197 15.6227 27.8572 20.3566 27.8572Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0001 19.2857C19.734 19.2857 23.5716 15.4481 23.5716 10.7143C23.5716 5.98038 19.734 2.14282 15.0001 2.14282C10.2663 2.14282 6.42871 5.98038 6.42871 10.7143C6.42871 15.4481 10.2663 19.2857 15.0001 19.2857Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </div>
                                    <p className='text-2xl font-semibold'>Deliver outstanding contribute.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <Button name={"Know More"}></Button>
                                <div className="flex items-center gap-3 group">
                                    <div className="duration-300 bg-[#FCDE70] group-hover:bg-[#1B4B36] text-[#1B4B36] group-hover:text-[#FCDE70] p-4 rounded-full">
                                        <FaPhoneAlt className='text-2xl' />
                                    </div>
                                    <div className="">
                                        <p className='text-sm text-gray-500'>Call Us 24/7</p>
                                        <p className='text-lg font-semibold'>+880 1648438489</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="bg-[#F5F7F8] p-15 pb-25 w-11/12 mx-auto rounded-3xl">
                        <div className="w-9/12 mx-auto flex justify-between items-center">
                            <div className="">
                                <SubHeader name={"OUR APPROACH"}></SubHeader>
                                <Header beforeBr={"Powering communities with"} afterBr={""} yellowText={"safe & reliable solutions"}></Header>
                                <div className="mt-10 grid gap-5">
                                    <div className="group">
                                        <div className="  w-8/12 p-5 border border-gray-300 rounded-2xl bg-white group-hover:bg-[#1B4B36] duration-300">
                                            <div className="flex items-center gap-5">
                                                <div className="bg-[#FCDE70] p-2.5 rounded-xl">
                                                    <LuScanEye className='text-5xl transform group-hover:rotate-y-180 duration-700 group-hover:text-black' />
                                                </div>
                                                <h1 className='text-2xl font-bold text-gray-600 group-hover:text-white'>Our Mission</h1>
                                            </div>
                                            <p className='text-lg mt-5 text-gray-400 group-hover:text-white'>Our mission is to deliver, reliable and high-quality ensuring efficiency and excellence in every project we undertake.</p>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className=" group-hover:text-white w-8/12 p-5 border border-gray-300 rounded-2xl bg-white group-hover:bg-[#1B4B36] duration-300">
                                            <div className="flex items-center gap-5">
                                                <div className="bg-[#FCDE70] p-2.5 rounded-xl">
                                                    <TbDeviceVisionPro className='text-5xl transform group-hover:rotate-y-180 duration-700 group-hover:text-black' />
                                                </div>
                                                <h1 className='text-2xl font-bold text-gray-600 group-hover:text-white'>Our Vision</h1>
                                            </div>
                                            <p className='text-lg mt-5 text-gray-400 group-hover:text-white'>Our vission is to deliver, reliable and high-quality ensuring efficiency and excellence in every project we undertake.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-fit">
                                <img
                                    className="w-[520px] rounded-3xl"
                                    src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/approach-image-1.jpg"
                                    alt=""
                                />
                                <img
                                    className="w-[520px] rounded-3xl border-8 border-white absolute top-[70%] left-[25%] -translate-y-1/2 -translate-x-1/2"
                                    src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/approach-image-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-8/12 mx-auto my-15 flex justify-center  gap-20">
                        <div className="">
                            <img className='rounded-3xl w-[1000px]' src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/03/why-choose-image.jpg" alt="" />
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <SubHeader name={"WHY CHOOSE US"} color={"text-[#1B4B36]"}></SubHeader>
                                <Header beforeBr={"Powering progress through"} afterBr={""} yellowText={"excellence"}></Header>
                                <p className='text-gray-500 text-justify text-lg w-9/12'>Over the years, we’ve accomplished remarkable milestones in the electrical services industry. From completing complex projects to earning</p>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2 text-lg font-semibold group">
                                    <FaCircleCheck className=' text-[#1B4B36] group-hover:text-[#FCDE70] duration-300' />
                                    <p className='text-gray-600'>Committed to delivering safe and efficient electrical solutions.</p>
                                </div>
                                <div className="flex items-center gap-2 text-lg font-semibold group">
                                    <FaCircleCheck className=' text-[#1B4B36] group-hover:text-[#FCDE70] duration-300' />
                                    <p className='text-gray-600'>Backed by years of expertise and professional excellence.</p>
                                </div>
                            </div>
                            <Button name={"View Our Milestones"}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;