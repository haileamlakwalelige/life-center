import React from 'react'
import BlogIntro from "../components/blog/BlogIntro";
import BlogBlog from "../components/blog/BlogBlog";
import BlogNews from "../components/blog/BlogNews";
import CallToAction from "../components/Reusable/CallToAction";

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
      <BlogIntro />
      <BlogBlog />
      <BlogNews />
      <CallToAction />
    </div>
  );
};

export default Blog