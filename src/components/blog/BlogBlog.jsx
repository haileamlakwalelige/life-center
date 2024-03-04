import React from "react";
import bl from "../../assets/blog1.jpg";
import { FaArrowRight } from "react-icons/fa6";

const BlogBlog = () => {
  const blogs = [1, 2, 3];
  return (
    <div className="overflow-x-hidden py-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-primary font-bold text-3xl text-center pt-20 pb-8">
          Blog - Life Center: Empowering Ethiopia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-20 px-2 sm:px-6 md:px-12 lg:px-20">
          {blogs.map((items, index) => (
            <div className="lg:min-w-[400px] min-w-[300px] min-h-[400px] px-2 sm:px-4 md-px-12 border-primary border-[1px]  rounded-xl">
              <p className="font-bold text-secondary">0 {index + 1}</p>
              <img src={bl} alt="" className="min-h-[100px] rounded-xl" />
              <p className="text-primary text-2xl font-medium py-4">
                Illuminating Hope
              </p>
              <p className="text-slate-800">
                In the heart of Ethiopia, amidst the bustling streets of Addis
                Ababa and the tranquil landscapes of the Amhara and Oromia
                regions, there exists a beacon of hope known as Life Center
                Ethiopian Residents Charity Organization.
              </p>
              <div className="flex gap-2 justify-center items-center my-10">
                <div className="lg:min-w-[200px] bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-xl flex gap-2">
                  <button>Read More</button>
                  <FaArrowRight size={24} className="mt-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBlog;
