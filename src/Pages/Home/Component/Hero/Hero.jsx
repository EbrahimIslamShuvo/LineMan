import React from "react";
import heroImage from "../../../../assets/Image/hero.png";
import Button from "../../../../Component/Shared/Button";
import { MdOutlinePhoneAndroid, MdVideoLibrary } from "react-icons/md";
import r1 from "../Hero/Image/r1.jpg";
import r2 from "../Hero/Image/r2.jpg";
import r3 from "../Hero/Image/r3.jpg";
import r4 from "../Hero/Image/r4.jpg";
import { RiContactsBook3Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

const Hero = () => {
  return (
    <div>
      <div className="mb-20">
        <div className="flex justify-center items-center gap- h-[85vh] w-11/12 mx-auto bg-[#F5F7F8] rounded-4xl">
          <div className="flex flex-col gap-5">
            <h1 className="text-7xl leading-24 font-extrabold">
              Your Trusted Partner for <br />
              All Your Electrical Needs
            </h1>
            <p className="text-lg font-extralight text-gray-400">
              From small repairs to large-scale installations, our experienced
              electricians <br />
              providee tailored solutions to power your home or business
              efficiently and <br />
              safely.
            </p>
            <div className="flex items-center gap-15 py-8">
              <div className="">
                <Button name={"Request a Quota"}></Button>
              </div>
              <div className="flex items-center gap-2 group">
                <MdVideoLibrary className="text-5xl group-hover:text-[#FCDE70] duration-300"></MdVideoLibrary>
                <p>Watch our Work</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <p>Recommanded By: </p>
              <div className="avatar-group -space-x-4">
                <div className="avatar">
                  <div className="w-10">
                    <img src={r4} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src={r3} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src={r2} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src={r1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative">
            <img className="w-120 transform scale-115" src="https://www.zatpatmachines.com/images/Man-with-helmet.png" alt="" />
            <div className=" absolute">
              <div className="flex flex-col justify-center items-center gap-8 bg-[#1B4B36] rounded-4xl p-17 text-center ">
                <p className="text-4xl font-semibold text-white ">
                  Contact our expert <br />
                  handyman today!
                </p>
                <Button name={"Book Now"}></Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-8/12 mx-auto mt-10 flex gap-20">
            <div className="flex flex-col">
              <div className="flex justify-start items-center gap-2">
                <RiContactsBook3Line className="text-4xl"></RiContactsBook3Line>
                <h1 className="text-2xl font-bold">Contact Us</h1>
              </div>
              <div className="p-4">
                <div className="">
                  <p className="text-lg flex gap-3">
                    <span className="font-semibold flex items-center gap-1">
                      <CiMail></CiMail> Email:{" "}
                    </span>
                    <span className="text-gray-400">ebrahimislam2003@gmail.com</span>
                  </p>
                </div>
                <div className="">
                  <p className="text-lg flex gap-3">
                    <span className="font-semibold flex items-center gap-1">
                      <MdOutlinePhoneAndroid></MdOutlinePhoneAndroid> Phone:{" "}
                    </span>
                    <span className="text-gray-400">+880 1648438489</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l border-gray-300 pl-20">
              <div className="flex justify-start items-center gap-2">
                <SlLocationPin className="text-4xl"></SlLocationPin>
                <h1 className="text-2xl font-bold">Our Location</h1>
              </div>
              <div className="p-4 text-gray-400">
                <p>Banashee, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
