import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";

import { FaMobileScreenButton } from "react-icons/fa6";

import { CiInboxIn } from "react-icons/ci";

const ContactIntro = () => {
  return (
    <div className="min-h-[60vh] bg-[#F6FDFE]">
      <div className="flex justify-center items-center min-h-[40vh]">
        <p className="mont text-6xl font-extrabold text-slate-800">Contact</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20 pb-5 gap-10">
        <div className="nemo bg-[#F6FDFE] h-[250px] w-[350px] rounded-xl flex flex-col justify-center items-center ">
          <FaPhone size={80} className="text-primary" />;
          <p className="font-bold text-2xl text-gray-900">Phone Number</p>
          <p className="text-gray-600 mt-4 text-xl text-center px-3">
            +251115573717
          </p>
        </div>

        {/* Email */}
        <div className="nemo bg-[#F6FDFE] h-[250px] w-[350px] rounded-xl flex flex-col justify-center items-center ">
          <MdOutlineMailOutline size={80} className="text-primary" />;
          <p className="font-bold text-2xl text-gray-900">Email</p>
          <p className="text-gray-600 mt-4 text-xl text-center px-3">
            lifecenteret@gmail.com
          </p>
        </div>

        {/* Address */}
        <div className="nemo bg-[#F6FDFE] h-[250px] w-[350px] rounded-xl flex flex-col justify-center items-center ">
          <FaMapMarkerAlt size={80} className="text-primary" />;
          <p className="font-bold text-2xl text-gray-900">Address</p>
          <p className="text-gray-600 mt-4 text-xl text-center px-3">
            {" "}
            Near Temenja Yazh School - Addis Ababa
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 px-2 sm:px-6 md:px-12 lg:px-20 py-20">
        {/* Mobile */}
        <div className="nemo bg-[#F6FDFE] h-[250px] w-[350px] rounded-xl flex flex-col justify-center items-center ">
          <FaMobileScreenButton size={80} className="text-primary" />;
          <p className="font-bold text-2xl text-gray-900">Mobile</p>
          <p className="text-gray-600 mt-4 text-xl text-center px-3">
            +251978131614
          </p>
        </div>

        {/* P.O Box */}
        <div className="nemo bg-[#F6FDFE] h-[250px] w-[350px] rounded-xl flex flex-col justify-center items-center ">
          <CiInboxIn size={80} className="text-primary" />;
          <p className="font-bold text-2xl text-gray-900">P.O Box</p>
          <p className="text-gray-600 mt-4 text-xl text-center px-3">
            101519, Addis Ababa-Ethiopia
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactIntro