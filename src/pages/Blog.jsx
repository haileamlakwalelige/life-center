import React from 'react'
import BlogIntro from "../components/blog/BlogIntro";
import BlogBlog from "../components/blog/BlogBlog";
import BlogNews from "../components/blog/BlogNews";

const Blog = () => {
  return (
    <div>
      <BlogIntro />
      <BlogBlog />
      <BlogNews />
    </div>
  );
};

export default Blog