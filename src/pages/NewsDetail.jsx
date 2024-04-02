import React, { useEffect, useState } from "react";
import blog1 from "../assets/blog1.jpg";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const [single, setSingle] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.100.29:8000/api/news/" + id
        );
        const data = await response.json();
        console.log(data); // assuming data is JSON
        setSingle(data); // update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-32 flex flex-col justify-center items-center mont px-2 sm:px-6 md:px-12 lg:px-20">
      <img src={blog1} alt="" className="max-h-[80vh]  w-[80vw]" />
      <p className="font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] py-5 mont text-slate-800">
        {single.title}
      </p>
      <p className=" text-[16px] md:text-[20px]">{single.content}</p>
    </div>
  );
};

export default NewsDetail;
