import React from "react";
import { PiArrowFatLineRight } from "react-icons/pi";

const Button = ({ name }) => {
  return (
    <div>
      <div className="flex justify-end items-center gap-2 bg-[#FCDE70] hover:bg-[#1B4B36] hover:text-white p-3 rounded-lg font-semibold transition duration-300 cursor-pointer  w-max">
        <p>{name}</p>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4401 11.0001C17.0996 11.0001 14.9665 8.77909 14.9665 6.34009V5.34009H13.0465V6.34009C13.0465 8.11409 13.7934 9.77809 14.9656 11.0001H3.12012V13.0001H14.9656C13.7934 14.2221 13.0465 15.8861 13.0465 17.6601V18.6601H14.9665V17.6601C14.9665 15.2211 17.0996 13.0001 19.4401 13.0001H20.4001V11.0001H19.4401Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Button;
