import React, { useState } from 'react';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What types of electrical services do you offer?",
            answer: "We provide residential and commercial services including wiring, lighting installations, panel upgrades, inspections, and smart home system setups."
        },
        {
            question: "Are your electricians licensed and insured?",
            answer: "Yes, all of our electricians are fully licensed, certified, and insured to ensure the highest level of safety and professionalism."
        },
        {
            question: "Do you provide emergency electrical services?",
            answer: "Absolutely. We offer 24/7 emergency electrical services for urgent issues like power outages, exposed wiring, and faulty circuits."
        },
        {
            question: "How much do your services cost?",
            answer: "Prices vary based on the service type and complexity. Contact us for a free consultation and a transparent quote tailored to your needs."
        },
    ];

    return (
        <div>
            <div className="w-11/12 mx-auto bg-base-300 rounded-4xl py-25">
                <div className="w-9/12 mx-auto">
                    <div className="flex justify-center items-center gap-16">
                        <div className="w-6/12 grid gap-3">
                            <SubHeader name={"FREQUENTLY ASKED QUESTION"} color={"text-[#1B4B36]"} />
                            <Header beforeBr={"Common questions about our"} afterBr={""} yellowText={"services"} />
                        </div>
                        <p className='w-6/12 text-lg text-gray-700'>
                            The feedback from our clients speaks volumes about the quality of our services. Read how we’ve helped them with reliable solutions.
                        </p>
                    </div>

                    <div className="my-8 group flex items-center gap-16">
                        <div className="w-[600px] rounded-3xl overflow-hidden">
                            <img
                                className='duration-500 w-[600px] h-[450px] group-hover:scale-110'
                                src="https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/03/faqs-image.jpg"
                                alt="FAQ"
                            />
                        </div>

                        <div className="w-6/12">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="collapse collapse-arrow border-b border-gray-300 rounded-none text-xl"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <input
                                        type="checkbox"
                                        className="peer hidden"
                                        checked={openIndex === index}
                                        readOnly
                                    />
                                    <div className="collapse-title font-semibold text-xl">
                                        {faq.question}
                                    </div>
                                    <div className="collapse-content text-sm">
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
