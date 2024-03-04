import React, { useEffect, useState } from "react";
import HomeIntro from "../components/home/HomeIntro";
import AboutUs from "../components/about/AboutUs";
import WhyUs from "../components/home/WhyUs";
import CallToAction from "../components/Reusable/CallToAction";
import BlogBlog from "../components/blog/BlogBlog";
import HomeProgram from "../components/home/HomeProgram";
import HomeGallery from "../components/home/HomeGallery";
import Horizontal from "../components/Reusable/Horizontal";
import Reco from "../components/Reusable/Reco";
// import Testimonials from "../components/Reusable/Testimonials";
// import reviews from "../data/data";

const Home = () => {
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
    <div className="overflow-x-hidden">
      <HomeIntro />
      <AboutUs />
      <WhyUs />
      <HomeProgram />
      <BlogBlog />
      <HomeGallery />
      {isLargeScreen ? <Horizontal /> : <Reco />}
      {/* <Testimonials reviews={reviews} /> */}
      <CallToAction />
    </div>
  );
};

export default Home;
