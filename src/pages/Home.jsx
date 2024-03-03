import React from 'react'
import HomeIntro from "../components/home/HomeIntro";
import AboutUs from "../components/about/AboutUs";
import WhyUs from "../components/home/WhyUs";

const Home = () => {
  return (
    <div>
      <HomeIntro />
      <AboutUs />
      <WhyUs />
    </div>
  );
};

export default Home