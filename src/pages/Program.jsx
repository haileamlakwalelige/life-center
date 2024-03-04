import React from 'react'
import CallToAction from "../components/Reusable/CallToAction";
import HomeGallery from "../components/home/HomeGallery";
import ProgramValue from "../components/program/ProgramValue";
import WhyUs from "../components/home/WhyUs";

const Program = () => {
  return (
    <div>
      <WhyUs />
      <ProgramValue />
      <HomeGallery />
      <CallToAction />
    </div>
  );
};

export default Program