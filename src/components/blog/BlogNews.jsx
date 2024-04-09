import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogNews = () => {
  // const news = [1, 2, 3];
  const [news, SetNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://admin.lifecenterethiopia.com/api/news"
        );
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
          <div className="flex flex-col justify-center items-center">
            {news.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10  border-primary border-[1px]  rounded-xl p-3 min-w-full gap-10"
              >
                <div className="col-span-1">
                  <img
                    src={` https://admin.lifecenterethiopia.com/${item.thumbnail}`}
                    alt=""
                    className="min-h-full min-w-full rounded-xl"
                  />
                </div>
                <div className="col-span-1 lg:col-span-2 flex flex-col justify-start">
                  <p className="text-primary text-2xl font-medium py-4">
                    {item.title}
                  </p>
                  <p className="text-slate-800 line-clamp-4">
                    {item.description}
                  </p>
                  <p className="text-end justify-end items-end flex-end pt-2">
                    {item.date}
                  </p>
                  <div className="flex gap-2 justify-end items-end my-10">
                    <Link to={`/news/${item.id}`}>
                      <div className="lg:min-w-[200px] bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-xl flex gap-2">
                        <button>Read More</button>
                        <FaArrowRight size={24} className="mt-1.5" />
                      </div>
                    </Link>
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
