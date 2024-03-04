import React from "react";
import contact from "../../assets/about.jpg";

const AboutIntro = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-[#F6FDFE] relative lg:bg-[url(${contact})] flex justify-center items-center lg:bg-cover lg:bg-center min-h-screen h-full pt-10 lg:py-0"
    >
      <div
        className="h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20 py-20"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity here
        }}
      >
        <div data-aos="flip-up" data-aos-duration="2000">
          <p className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-start">
            About Us
          </p>
          <p className="text-white mt-4 text-start text-lg md:text-xl lg:text-2xl">
            Welcome to Life Center: Where Hope Ignites, Lives Transform, and
            Ethiopia Thrives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
