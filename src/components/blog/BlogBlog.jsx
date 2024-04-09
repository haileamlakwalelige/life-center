import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://admin.lifecenterethiopia.com/api/blogs");
        const data = await response.json();
        // console.log(data); // assuming data is JSON
        setBlogs(data); // update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-hidden pt-10 px-2 sm:px-6 md:px-12 lg:px-20">
      <p className="text-primary font-bold text-3xl text-start pt-20 pb-8">
        Blog - Life Center: Empowering Ethiopia.
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-20">
          {blogs.map((items, index) => (
            <div
              key={items.id}
              className="lg:min-w-[400px] min-h-full min-w-[300px] px-2 sm:px-4 md-px-12 border-primary border-[1px]  rounded-xl"
            >
              <p className="font-bold text-secondary">0 {index + 1}</p>
              <img
                src={` https://admin.lifecenterethiopia.com/${items.image}`}
                alt=""
                className="min-h-full min-w-full rounded-xl"
              />
              <p className="text-primary text-2xl font-medium py-4">
                {items.title}
              </p>
              <p className="text-slate-800 line-clamp-4">{items.content}</p>
              <div className="flex gap-2 justify-center items-center my-10">
                <Link to={`/blog/${items.id}`}>
                  <div className="lg:min-w-[200px] bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-xl flex gap-2">
                    <button>Read More</button>
                    <FaArrowRight size={24} className="mt-1.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBlog;
