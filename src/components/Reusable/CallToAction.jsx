import React from "react";
import contact from "../../assets/call.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "50%",
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[50vh]"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity here
        }}
        className="flex flex-col justify-center items-center min-h-[50vh] px-2 sm:px-6 md:px-12 lg:px-20"
      >
        <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl  text-center">
          Empowering Orphans, Uplifting Widows.
        </p>
        <p className="text-white pt-10 text-xl text-center">
          Bringing light to the lives of orphans and widows, empowering them for
          a brighter tomorrow.
        </p>
        <Link to="/contact">
          <div className="flex justify-center items-center mt-10">
            <button className="lg:min-w-[300px] bg-primary hover:text-primary hover:bg-white hover:border-[1px] hover:border-gray-100 py-4 px-10 text-white text-xl rounded-sm">
              Get In Touch
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
