import React, { useState, useEffect } from 'react';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';
import Button from '../../../../Component/Shared/Button';

const testimonials = [
    {
        text: "We hired them to handle the complete electrical setup for our office renovation, and they delivered flawlessly. From designing the layout to installing .",
        author: "David Lee",
        image: "https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/author-2.jpg"
    },
    {
        text: "Their professionalism was impressive. They not only understood our requirements but also suggested better alternatives to optimize energy usage. Highly recommended!",
        author: "Sarah Miller",
        image: "https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/author-1.jpg"
    },
    {
        text: "Prompt, efficient, and skilled — we couldn’t be happier with the outcome of their electrical work. The office feels upgraded and safe.",
        author: "David Lee",
        image: "https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/author-2.jpg"
    },
    {
        text: "Their professionalism was impressive. They not only understood our requirements but also suggested better alternatives to optimize energy usage. Highly recommended!",
        author: "Sarah Miller",
        image: "https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/author-1.jpg"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const { text, author, image } = testimonials[currentIndex];

    return (
        <div style={{ backgroundImage: "url('https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/03/testimonial-bg.png')" }}>
            <div className="w-8/12 mx-auto flex justify-center items-center gap-20 py-30">
                <div className="flex flex-col gap-6">
                    <SubHeader name={"TESTIMONIALS"} color={"text-[#1B4B36]"} />
                    <Header beforeBr={"Testimonials that reflect our"} yellowText={"consistent efforts"} />
                    <p className='text-xl text-gray-500'>The feedback from our clients speaks volumes about the quality of our services. Read how we’ve helped them with reliable solutions.</p>
                    <Button name={"View All Testimonials"} />
                </div>

                {/* Testimonial Box */}
                <div className="bg-base-200 px-20 py-10 rounded-3xl w-350 h-100 flex flex-col justify-between">
                    <div className="flex flex-col gap-10 border-b border-gray-400 pb-10 mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M7.83366 29.4998C6.16699 27.6665 5.16699 25.6665 5.16699 22.3332C5.16699 16.4998 9.33366 11.3332 15.167 8.6665L16.667 10.8332C11.167 13.8332 10.0003 17.6665 9.66699 20.1665C10.5003 19.6665 11.667 19.4998 12.8337 19.6665C15.8337 19.9998 18.167 22.3332 18.167 25.4998C18.167 26.9998 17.5003 28.4998 16.5003 29.6665C15.3337 30.8332 14.0003 31.3332 12.3337 31.3332C10.5003 31.3332 8.83366 30.4998 7.83366 29.4998ZM24.5003 29.4998C22.8337 27.6665 21.8337 25.6665 21.8337 22.3332C21.8337 16.4998 26.0003 11.3332 31.8337 8.6665L33.3337 10.8332C27.8337 13.8332 26.667 17.6665 26.3337 20.1665C27.167 19.6665 28.3337 19.4998 29.5003 19.6665C32.5003 19.9998 34.8337 22.3332 34.8337 25.4998C34.8337 26.9998 34.167 28.4998 33.167 29.6665C32.167 30.8332 30.667 31.3332 29.0003 31.3332C27.167 31.3332 25.5003 30.4998 24.5003 29.4998Z" fill="currentColor"></path></svg>
                        <p className='text-lg text-gray-500'>{text}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img className='rounded-full' src={image} alt="author" />
                            <p className='text-2xl font-semibold'>{author}</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div onClick={prevTestimonial} className="cursor-pointer border-2 border-[#345F4C] p-4.5 text-[#345F4C] hover:bg-[#345F4C] hover:text-white duration-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.07992 5.99985C3.42042 5.99985 5.55352 3.77884 5.55352 1.33984V0.339844H7.47352V1.33984C7.47352 3.11384 6.72662 4.77784 5.55442 5.99985H17.3999V7.99985H5.55442C6.72662 9.22185 7.47352 10.8859 7.47352 12.6599V13.6599H5.55352V12.6599C5.55352 10.2209 3.42042 7.99985 1.07992 7.99985H0.119923V5.99985H1.07992Z" fill="currentColor"></path></svg>
                            </div>
                            <div onClick={nextTestimonial} className="cursor-pointer border-2 border-[#345F4C] p-4.5 text-[#345F4C] hover:bg-[#345F4C] hover:text-white duration-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4401 5.99985C14.0996 5.99985 11.9665 3.77884 11.9665 1.33984V0.339844H10.0465V1.33984C10.0465 3.11384 10.7934 4.77784 11.9656 5.99985H0.120117V7.99985H11.9656C10.7934 9.22185 10.0465 10.8859 10.0465 12.6599V13.6599H11.9665V12.6599C11.9665 10.2209 14.0996 7.99985 16.4401 7.99985H17.4001V5.99985H16.4401Z" fill="currentColor"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;
