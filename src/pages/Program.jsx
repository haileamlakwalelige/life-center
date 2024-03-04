import React, { useEffect, useState } from "react";
import CallToAction from "../components/Reusable/CallToAction";
import HomeGallery from "../components/home/HomeGallery";
import ProgramValue from "../components/program/ProgramValue";
import WhyUs from "../components/home/WhyUs";
import Horizontal from "../components/Reusable/Horizontal";
import Reco from "../components/Reusable/Reco";

const Program = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Update isLargeScreen based on window width
      setIsLargeScreen(window.innerWidth >= 992); // Adjust the width according to your criteria
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <WhyUs />
      <ProgramValue />
      <HomeGallery />
      {isLargeScreen ? <Horizontal /> : <Reco />}
      <CallToAction />
    </div>
  );
};

export default Program;
