import React from 'react';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';
import feature from "../Feature/Image/feature.jpg"
import { FaPlay } from 'react-icons/fa';

const Feature = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div className="bg-base-200 rounded-3xl flex flex-col justify-center items-center text-center gap-20 p-20">
                    <div className=" flex flex-col items-center">
                        <SubHeader name={"OUR FEATURES"} color={"text-[#1B4B36]"} ></SubHeader>
                        <Header beforeBr={"Features that define our quality"} afterBr={""} yellowText={"and reliability"}></Header>
                    </div>
                    <div className="w-9/12 relative">
                        <img className='rounded-3xl' src={feature} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-[#fbde70] opacity-75 animate-ping w-14 h-14"></div>
                                <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-[#fbde70] hover:bg-[#1B4B36] text-white rounded-full">
                                    <FaPlay className="ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-20 w-10/12">
                        <div className="group flex flex-col justify-center items-center gap-6">
                            <div className=" bg-[#FCDE70] p-4 rounded-full group-hover:bg-[#1B4B36] group-hover:text-white duration-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M6.96415 12.858C10.2187 12.858 12.857 10.2197 12.857 6.96512C12.857 3.71059 10.2187 1.07227 6.96415 1.07227C3.70961 1.07227 1.07129 3.71059 1.07129 6.96512C1.07129 10.2197 3.70961 12.858 6.96415 12.858Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.0354 12.858C26.29 12.858 28.9283 10.2197 28.9283 6.96512C28.9283 3.71059 26.29 1.07227 23.0354 1.07227C19.7809 1.07227 17.1426 3.71059 17.1426 6.96512C17.1426 10.2197 19.7809 12.858 23.0354 12.858Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.96415 28.9302C10.2187 28.9302 12.857 26.2919 12.857 23.0374C12.857 19.7829 10.2187 17.1445 6.96415 17.1445C3.70961 17.1445 1.07129 19.7829 1.07129 23.0374C1.07129 26.2919 3.70961 28.9302 6.96415 28.9302Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.0354 28.9302C26.29 28.9302 28.9283 26.2919 28.9283 23.0374C28.9283 19.7829 26.29 17.1445 23.0354 17.1445C19.7809 17.1445 17.1426 19.7829 17.1426 23.0374C17.1426 26.2919 19.7809 28.9302 23.0354 28.9302Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className="">
                                <h1 className='text-xl font-bold '>24/7 Emergency Services</h1>
                                <p className='text-gray-500'>We're here for you any time, day or <br /> night, to resolve urgent issues.</p>
                            </div>
                        </div>
                        <div className="group flex flex-col justify-center items-center gap-6">
                            <div className=" bg-[#FCDE70] p-4 rounded-full group-hover:bg-[#1B4B36] group-hover:text-white duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M16.0073 14.7858C15.6895 14.9238 15.3467 14.995 15.0002 14.995C14.6537 14.995 14.3109 14.9238 13.993 14.7858L1.77873 9.12863C1.58039 9.02859 1.41371 8.87546 1.29726 8.68629C1.1808 8.49712 1.11914 8.27934 1.11914 8.0572C1.11914 7.83506 1.1808 7.61728 1.29726 7.42811C1.41371 7.23894 1.58039 7.08581 1.77873 6.98577L13.993 1.28577C14.3109 1.14776 14.6537 1.07654 15.0002 1.07654C15.3467 1.07654 15.6895 1.14776 16.0073 1.28577L28.2216 6.94291C28.4199 7.04295 28.5866 7.19608 28.7031 7.38525C28.8195 7.57442 28.8812 7.7922 28.8812 8.01434C28.8812 8.23648 28.8195 8.45426 28.7031 8.64343C28.5866 8.8326 28.4199 8.98573 28.2216 9.08577L16.0073 14.7858Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.9284 15.75L15.857 21.7714C15.5778 21.8988 15.2746 21.9647 14.9677 21.9647C14.6609 21.9647 14.3576 21.8988 14.0784 21.7714L1.07129 15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.9284 22.7144L15.857 28.7358C15.5778 28.8631 15.2746 28.929 14.9677 28.929C14.6609 28.929 14.3576 28.8631 14.0784 28.7358L1.07129 22.7144" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className="">
                                <h1 className='text-xl font-bold '>Advanced Technology</h1>
                                <p className='text-gray-500'>We use state-of-the-art tools and techniques to <br /> deliver efficient.</p>
                            </div>
                        </div>
                        <div className="group flex flex-col justify-center items-center gap-6">
                            <div className=" bg-[#FCDE70] p-4 rounded-full group-hover:bg-[#1B4B36] group-hover:text-white duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M9.64272 27.8572C14.3766 27.8572 18.2141 24.0197 18.2141 19.2858C18.2141 14.5519 14.3766 10.7144 9.64272 10.7144C4.90885 10.7144 1.07129 14.5519 1.07129 19.2858C1.07129 24.0197 4.90885 27.8572 9.64272 27.8572Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.3566 27.8572C25.0905 27.8572 28.928 24.0197 28.928 19.2858C28.928 14.5519 25.0905 10.7144 20.3566 10.7144C15.6227 10.7144 11.7852 14.5519 11.7852 19.2858C11.7852 24.0197 15.6227 27.8572 20.3566 27.8572Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0001 19.2857C19.734 19.2857 23.5716 15.4481 23.5716 10.7143C23.5716 5.98038 19.734 2.14282 15.0001 2.14282C10.2663 2.14282 6.42871 5.98038 6.42871 10.7143C6.42871 15.4481 10.2663 19.2857 15.0001 19.2857Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className="">
                                <h1 className='text-xl font-bold '>Safety First Approach</h1>
                                <p className='text-gray-500'>Your safety is our top priority. We follow strict <br /> industry standards.</p>
                            </div>
                        </div>
                        <div className="group flex flex-col justify-center items-center gap-6">
                            <div className=" bg-[#FCDE70] p-4 rounded-full group-hover:bg-[#1B4B36] group-hover:text-white duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M11.2075 4.82153L12.1289 2.44296C12.2843 2.04024 12.5577 1.69384 12.9133 1.44913C13.2689 1.20442 13.6901 1.07281 14.1218 1.07153H15.8789C16.3106 1.07281 16.7318 1.20442 17.0874 1.44913C17.443 1.69384 17.7164 2.04024 17.8718 2.44296L18.7932 4.82153L21.9218 6.62153L24.4504 6.23582C24.8714 6.17867 25.2999 6.24798 25.6815 6.43494C26.063 6.6219 26.3804 6.91807 26.5932 7.28582L27.4504 8.78582C27.67 9.15942 27.7712 9.59085 27.7406 10.0231C27.71 10.4555 27.549 10.8683 27.2789 11.2072L25.7146 13.2001V16.8001L27.3218 18.793C27.5919 19.1319 27.7528 19.5448 27.7834 19.9771C27.814 20.4094 27.7129 20.8408 27.4932 21.2144L26.6361 22.7144C26.4232 23.0821 26.1059 23.3783 25.7243 23.5653C25.3428 23.7522 24.9142 23.8215 24.4932 23.7644L21.9646 23.3787L18.8361 25.1787L17.9146 27.5572C17.7592 27.96 17.4858 28.3064 17.1302 28.5511C16.7747 28.7958 16.3534 28.9274 15.9218 28.9287H14.1218C13.6901 28.9274 13.2689 28.7958 12.9133 28.5511C12.5577 28.3064 12.2843 27.96 12.1289 27.5572L11.2075 25.1787L8.07892 23.3787L5.55035 23.7644C5.12932 23.8215 4.70079 23.7522 4.31924 23.5653C3.93769 23.3783 3.62033 23.0821 3.40749 22.7144L2.55035 21.2144C2.33071 20.8408 2.22952 20.4094 2.26012 19.9771C2.29073 19.5448 2.4517 19.1319 2.72178 18.793L4.28607 16.8001V13.2001L2.67892 11.2072C2.40884 10.8683 2.24787 10.4555 2.21727 10.0231C2.18666 9.59085 2.28785 9.15942 2.50749 8.78582L3.36464 7.28582C3.57747 6.91807 3.89483 6.6219 4.27638 6.43494C4.65794 6.24798 5.08646 6.17867 5.50749 6.23582L8.03607 6.62153L11.2075 4.82153Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0008 21.4287C18.5512 21.4287 21.4294 18.5505 21.4294 15.0001C21.4294 11.4497 18.5512 8.57153 15.0008 8.57153C11.4504 8.57153 8.57227 11.4497 8.57227 15.0001C8.57227 18.5505 11.4504 21.4287 15.0008 21.4287Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 8.57153V15.0001H21.4286" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.9999 15L10.457 19.5429" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className="">
                                <h1 className='text-xl font-bold '>Customizable Solutions</h1>
                                <p className='text-gray-500'>We provide tailored electrical services designed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;