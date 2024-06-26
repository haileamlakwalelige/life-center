import React, { useEffect, useState } from "react";
import blog1 from "../assets/blog1.jpg";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({}); // Initialize with an empty object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://admin.lifecenterethiopia.com/api/blogs/${id}`
        );
        const data = await response.json();
        // console.log(data);
        setSingle(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  // Now, you can safely access properties of the single object without encountering errors
  return (
    <div className="mt-32 py-10 flex flex-col justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20">
      {single && (
        <>
          <img
            src={` https://admin.lifecenterethiopia.com/${single.image}`} // Example of accessing properties
            alt=""
            className="max-h-[60vh]  w-[80vw] mt-6 rounded-xl"
          />
          <p className="font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] py-5 mont text-slate-800">
            {single.title}
          </p>
          <p className="text-[16px] md:text-[20px] pb-5">{single.title}</p>
          <p className="text-[16px] text-end">{single.author}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetail;
