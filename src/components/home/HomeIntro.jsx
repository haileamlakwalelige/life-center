import React from "react";
import contact from "../../assets/contact2.jpg";
import blog from "../../assets/blog.jpg";
import mom from "../../assets/mom.jpg";
import kids from "../../assets/kids.jpg";
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
        className="h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20 py-20"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          // backgroundColor: "rgba(0, 0, 0, 0.5)", 
        }}
      >
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-start">
            Life Center
          </p>
          <p className="text-white mt-4 text-start text-lg md:text-xl lg:text-2xl">
            Illuminating hope for orphans, empowering widows, and reducing
            poverty in Ethiopia with compassion and determination
          </p>
          <div className="flex justify-start items-start gap-10 mt-10">
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
