import React from 'react'
import HomeIntro from "../components/home/HomeIntro";
import AboutUs from "../components/about/AboutUs";
import WhyUs from "../components/home/WhyUs";
import CallToAction from "../components/Reusable/CallToAction";
import BlogBlog from "../components/blog/BlogBlog";
import HomeProgram from "../components/home/HomeProgram";
import HomeGallery from "../components/home/HomeGallery";
import Testimonials from "../components/Reusable/Testimonials";
import reviews from "../data/data";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HomeIntro />
      <AboutUs />
      <WhyUs />
      <HomeProgram />
      <BlogBlog />
      <HomeGallery />
      <Testimonials reviews={reviews} />
      <CallToAction />
    </div>
  );
};

export default Home