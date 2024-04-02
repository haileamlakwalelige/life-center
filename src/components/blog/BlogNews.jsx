import React, { useEffect, useState } from "react";
import bl from "../../assets/blog1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogNews = () => {
  // const news = [1, 2, 3];
  const [news, SetNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.100.29:8000/api/news");
        const data = await response.json();
        // console.log(data); // assuming data is JSON
        SetNews(data); // update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="overflow-x-hidden mx-2 sm:mx-6 md:mx-12 lg:mx-20">
        <p className="text-primary font-bold text-2xl text-start pt-20">
          News - Life Center Transforms Ethiopia.
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col">
            {news.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-wrap  lg:flex-nowrap my-10 items-start gap-10 justify-center border-[1px] rounded-xl "
              >
                <img
                  src={item.thumbnail}
                  alt=""
                  className="lg:h-[400px] lg:w-[400px] rounded-l-xl"
                />
                <div className="flex flex-col items-center px-2 sm:px-4">
                  <div>
                    <p className="text-primary text-2xl font-medium py-4">
                      {item.title}
                    </p>
                    <p className="text-slate-800 justify-between ">
                      {item.description}
                    </p>
                    <div className="flex flex-col justify-end text-end items-end text-slate-800 py-4">
                      <p>{item.date}</p>
                      <div className="flex gap-2 justify-end text-end items-end my-10">
                        <Link to={`/news/${item.id}`}>
                          <div className="lg:min-w-[200px] bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-xl justify-end items-end flex gap-2">
                            <button>Read More</button>
                            <FaArrowRight size={24} className="mt-1.5" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
