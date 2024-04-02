import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { FaYoutube, FaLinkedin, FaTelegram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-[60vh] bg-white">
      <div className="min-h-[60vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-start py-10 lg:py-20 px-2 sm:px-6 md:px-12 lg:px-20">
        {/* Section one */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="Life Center Ethiopian Residents Charity Organization Logo"
          />
          <p className="text-primary text-xl text-center font-semibold">
            Life Center Ethiopian Residents Charity Organization
          </p>
          <p className="mt-5 text-center">
            Life Center Ethiopian Residents Charity Organization: Lighting hope
            for orphans, empowering widows, and transforming lives, contributing
            to poverty reduction in Ethiopia.
          </p>
        </div>

        {/* Section Two */}
        <div className="flex flex-col justify-center items-center md:mt-20">
          <p className="font-bold text-2xl md:text-3xl text-primary">
            Quick Link
          </p>
          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <Link
              to="/"
              className="text-lg font-medium text-gray-600 hover:text-secondary"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-gray-600 hover:text-secondary"
            >
              About
            </Link>
            <Link
              to="/program"
              className="text-lg font-medium text-gray-600 hover:text-secondary"
            >
              Program
            </Link>
            <Link
              to="/blog"
              className="text-lg font-medium text-gray-600 hover:text-secondary"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-gray-600 hover:text-secondary"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col justify-center items-center md:mt-20">
          <p className="font-bold text-2xl md:text-3xl text-primary">
            Get In Touch
          </p>
          <div className="flex flex-col justify-center pl-5 lg:pl-10 items-start gap-2 mt-4">
            <p className="text-base font-medium text-gray-600 ">
              Phone: +251115573717
            </p>
            <p className="text-base font-medium text-gray-600 ">
              E-mail: lifecenteret@gmail.com
            </p>
            <p className="text-base font-medium text-gray-600 ">
              P.O.Box: 101519, Addis Ababa-Ethiopia
            </p>
            <p className="text-base font-medium text-gray-600 ">
              Mobile: +251978131614 - Near Temenja Yazh School - Addis Ababa
            </p>
          </div>
          <div className="mt-6 flex justify-start items-start gap-10">
            <Link to="">
              <FaFacebook size={30} className="hover:text-[#0075FB]" />
            </Link>
            <Link to="">
              <FaLinkedin size={30} className="hover:text-[#0A66C2]" />
            </Link>
            <Link to="">
              <FaTelegram size={30} className="hover:text-[#29ABEE]" />
            </Link>
            <Link to="">
              <FaYoutube size={30} className="hover:text-[#FF0F1C]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
