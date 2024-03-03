import React from "react";
import { FaHandPointRight } from "react-icons/fa6";
import contact from "../../assets/contact2.jpg";

const ContactGetInTouch = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // className="min-h-screen h-[100%] py-10 lg:py-0 lg:min-h-[70vh]"
      className="bg-[#F6FDFE] relative lg:bg-[url(${contact})] lg:bg-cover lg:bg-center min-h-screen py-10 lg:py-0 "
    >
      <div
        className="h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20 py-20"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity here
        }}
      >
        <div className="hidden md:block">
          <p className="text-3xl  font-bold mont py-3 ml-10 text-primary text-start">
            Our Programs
          </p>
          <div className="flex gap-4 my-3">
            <FaHandPointRight className="text-secondary mt-3  mr-2" size={40} />
            <p className=" text-white font-medium text-2xl text-start py-2 font-mono">
              Orphans and Vulnerable Children (OVC) Support
            </p>
          </div>
          <div className="flex gap-4 my-3">
            <FaHandPointRight className="text-secondary mt-3  mr-2" size={40} />
            <p className=" text-white font-medium text-2xl text-start py-2 font-mono">
              Widows&apos; Empowerment
            </p>
          </div>
          <div className="flex gap-4 my-3">
            <FaHandPointRight className="text-secondary mt-3  mr-2" size={40} />
            <p className=" text-white font-medium text-2xl text-start py-2 font-mono">
              Community Development
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
              <div>
                <p className="text-white">First Name</p>
                <input
                  type="text"
                  className="min-w-[300px] py-2 rounded-xl mt-3 focus:outline-none outline-none pl-2 placeholder:text-gray-600 placeholder:pl-2"
                  placeholder="Your First Name"
                />
              </div>
              <div>
                <p className="text-white">Last Name</p>
                <input
                  type="text"
                  className="min-w-[300px] py-2 rounded-xl mt-3 focus:outline-none outline-none pl-2 placeholder:text-gray-600 placeholder:pl-2"
                  placeholder="Your First Name"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="text-white">Email</p>
              <input
                type="email"
                className="min-w-[300px] lg:min-w-[610px] py-2 rounded-xl mt-3 focus:outline-none outline-none pl-2 placeholder:text-gray-600 placeholder:pl-2"
                placeholder="Your First Name"
              />
            </div>
            <div className="mt-10">
              <p className="text-white">Message</p>
              <textarea
                cols={30}
                rows={4}
                type="text"
                className="min-w-[300px] lg:min-w-[610px] py-2 rounded-xl mt-3 focus:outline-none outline-none pl-2 placeholder:text-gray-600 placeholder:pl-2"
                placeholder="Your First Name"
              />
            </div>
            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                className="lg:min-w-[300px] bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactGetInTouch;
