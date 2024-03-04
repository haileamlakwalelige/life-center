import React from 'react'
import Team from "../components/about/Team";
import AboutIntro from "../components/about/AboutIntro";
import CallToAction from "../components/Reusable/CallToAction";
import AboutUs from "../components/about/AboutUs";
import Value from "../components/about/Value";
import Mission from "../components/about/Mission";
import Testimonials from '../components/Reusable/Testimonials';
import reviews from '../data/data';

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutIntro />
      <AboutUs />
      <Mission />
      <Team />
      <Value />
      {/* <Testimonials /> */}
      <Testimonials reviews={reviews}/>
      <CallToAction />
    </div>
  );
};

export default About;