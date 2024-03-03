import React from "react";
import aboutus from "../../assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-[80vh] bg-[#F6FDFE]">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
          <div className="m-10">
            <img src={aboutus} alt="" className="rounded-xl min-h-[500px]" />
          </div>
          <div className="flex flex-col justify-center items-start  gap-5 m-10">
            <p className="text-black text-lg font-bold">About Us</p>
            <p className="text-3xl lg:text-5xl font-bold mont text-primary">
              We are here to help <br /> orphans and hopeless
            </p>
            <p className="text-start text-slate-800 ">
              Life Center, established in 2013, shines as a beacon of hope in
              Ethiopia. We empower orphans for stable, fulfilling lives and
              support widows in achieving independence through skill
              development. Our dedication illuminates pathways to brighter
              futures, impacting communities across Ethiopia. Through
              partnerships with organizations and government bodies, we maximize
              our reach and effectiveness. Join us in our journey of
              transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
