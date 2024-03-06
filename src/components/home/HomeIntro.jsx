import React from "react";
import contact from "../../assets/contact2.jpg";
import { Link } from "react-router-dom";

const HomeIntro = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="bg-[#F6FDFE] relative lg:bg-[url(${contact})] lg:bg-cover lg:bg-center min-h-screen  lg:py-0 "
    >
      <div
        className="h-full  flex justify-center w-screen items-center px-2 sm:px-6 md:px-12 lg:px-20 py-20"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="px-10 flex-col flex w-screen text-center justify-center items-center"
        >
          <p className="font-bold text-[40px] md:text-[50px] lg:text-[60px] text-white lg:pt-20">
            Welcome to LIFE CENTER
          </p>
          <p className="text-[20px] text-white pt-10">
            At Life Center, we believe in the power of stories. Our blog is a
            space where we share inspiring tales of resilience, highlight the
            impact of our projects, and keep you informed about our ongoing
            initiatives. Here, you'll find a collection of stories that reflect
            the heart and soul of our organization.
          </p>
          <div className="flex justify-center items-start gap-10 mt-10">
            <Link to="/">
              <button className=" bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-sm">
                Contact
              </button>
            </Link>
            <Link to="/">
              <button className=" hover:bg-primary text-primary bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 hover:text-white text-xl rounded-sm">
                Program
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex flex-col justify-end -mt-14 hidden ml-32">
          {/* <img
            src={blog}
            alt=""
            className="rounded-xl h-[300px] w-[300px] "
            data-aos="zoom-out"
            data-aos-duration="2000"
          />
          <img
            src={kids}
            alt=""
            className="rounded-xl h-[300px] w-[300px] ml-20 -mt-32"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
          <img
            src={mom}
            alt=""
            className="rounded-xl h-[300px] w-[300px] -ml-20 -mt-32"
            data-aos="fade-down-right"
            data-aos-duration="2000"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
