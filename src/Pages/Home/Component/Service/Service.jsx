import React from 'react';
import useService from '../../../../Data/useService';
import SubHeader from '../../../../Component/Shared/SubHeader';
import Header from '../../../../Component/Shared/Header';
import Card from '../../../../Component/Shared/Card';

const Service = () => {
    const {services} = useService()

    console.log(services);
    

    return (
        <div>
            <div className="my-15">
                <div className="bg-[#1B4B36] w-11/12 mx-auto rounded-3xl p-15">
                    <div className="flex flex-col justify-center items-center text-center text-white gap-5">
                        <SubHeader name={"OUR SERVICES"} color={"text-[#FBDE70]"}></SubHeader>
                        <Header beforeBr={"Specialized electrical services"} afterBr={"for"} yellowText={" every industry"}></Header>
                    </div>
                    <div className="grid grid-cols-3 justify-between gap-8 w-full mx-auto mt-15">
                        {
                            services.map(service =>(
                                <Card card={service}></Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;