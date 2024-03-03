import React from "react";
import { FaHandPointRight } from "react-icons/fa6";
import contact from "../../assets/blogbg.jpg";

const BlogIntro = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-[#F6FDFE] relative lg:bg-[url(${contact})] flex justify-center items-center lg:bg-cover lg:bg-center min-h-[80vh] py-10 lg:py-0 "
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
        <div>
          <p className="text-primary font-bold text-3xl text-center">
            Explore Life Center
          </p>
          <p className="text-white mt-4 text-center text-lg">
            Life Center Ethiopian Residents Charity Organization, established in
            2013, is dedicated to uplifting orphans, vulnerable children, and
            widows across Ethiopia. Through comprehensive programs, including
            support for basic needs, education, and economic empowerment, they
            embody compassion and hope in their mission to reduce poverty and
            empower communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogIntro;
