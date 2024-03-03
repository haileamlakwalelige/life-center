import React from 'react'
import Team from "../components/about/Team";
import AboutIntro from "../components/about/AboutIntro";
import CallToAction from "../components/Reusable/CallToAction";
import AboutUs from "../components/about/AboutUs";
import Value from "../components/about/Value";
import Mission from "../components/about/Mission";

const About = () => {
  return (
    <div>
      <AboutIntro />
      <AboutUs />
      <Mission />
      <Team />
      <Value />
      <CallToAction />
    </div>
  );
};

export default About;