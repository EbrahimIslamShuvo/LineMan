import React from "react";
import Header from "../../../../Component/Shared/Header";
import SubHeader from "../../../../Component/Shared/SubHeader";
import award1 from "../Award/Image/awards-1.png";
import award2 from "../Award/Image/awards-2.png";
import award3 from "../Award/Image/awards-3.png";
import award4 from "../Award/Image/awards-1 (1).png";

const Award = () => {
  return (
    <div>
      <div className="">
        <div className="w-8/12 mx-auto mb-15">
          <div className="flex justify-between items-center">
            <div className="w-7/12">
              <SubHeader
                name={"AWARDS AND CERTIFICATION"}
                color={"text-[#1B4B36]"}
              ></SubHeader>
              <Header
                beforeBr={"Awards and certifications that"}
                afterBr={"reflect"}
                yellowText={" our commitment"}
              ></Header>
            </div>
            <div className="w-5/12">
              <p className="text-gray-400">
                Over the years, we’ve earned awards and accreditations that
                underscore our unwavering focus on quality, safety.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-7 ">
            <div className="flex items-center gap-10 p-5 border-b border-r border-gray-300">
              <div className="">
                <img className="w-70" src={award1} alt="" />
              </div>
              <div className="">
                <h1 className="text-xl font-extrabold">Certified Master Electrician Accreditation</h1>
                <p className="text-gray-400">
                  Awarded to our lead electricians for demonstrating superior
                  technical expertise and industry knowledge
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10 p-5 border-b border-gray-300">
              <div className="">
                <img className="w-75" src={award2} alt="" />
              </div>
              <div className="">
                <h1 className="text-xl font-extrabold">
                  Best Residential Electrician Service (2023)</h1>
                <p className="text-gray-400">
                  Awarded to our lead electricians for demonstrating superior
                  technical expertise and industry knowledge
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10 p-5 border-r border-gray-300">
              <div className="">
                <img className="w-70" src={award3} alt="" />
              </div>
              <div className="">
                <h1 className="text-xl font-extrabold">
                  Industry Excellence Certificate by IEC</h1>
                <p className="text-gray-400">
                  Awarded to our lead electricians for demonstrating superior
                  technical expertise and industry knowledge
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10 p-5">
              <div className="">
                <img className="w-70" src={award4} alt="" />
              </div>
              <div className="">
                <h1 className="text-xl font-extrabold">
                  Emergency Service Provider Recognition</h1>
                <p className="text-gray-400">
                  Awarded to our lead electricians for demonstrating superior
                  technical expertise and industry knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
