import React from "react";
import bl from "../../assets/blog1.jpg";
import { FaArrowRight } from "react-icons/fa";

const BlogNews = () => {
  const news = [1, 2, 3];
  return (
    <div>
      <div className="overflow-x-hidden">
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary font-bold text-2xl text-center pt-20">
            News - Life Center Transforms Ethiopia.
          </p>
          <div className="flex flex-col">
            {news.map((item, index) => (
              <div className="flex flex-wrap lg:flex-nowrap my-10 items-start gap-10 justify-center border-[1px] rounded-xl mx-2 sm:mx-6 md:mx-12">
                <img
                  src={bl}
                  alt=""
                  className="lg:h-[400px] lg:w-[400px] rounded-l-xl"
                />
                <div className="flex flex-col items-center px-2 sm:px-4">
                  <div>
                    <p className="text-primary text-2xl font-medium py-4">
                      Life Center: Empowering Ethiopia
                    </p>
                    <p className="text-slate-800 justify-between ">
                      Life Center Ethiopian Residents Charity Organization is
                      making waves across Ethiopia with its transformative
                      programs aimed at uplifting orphans, vulnerable children,
                      and widows. Established in 2013, the organization's
                      holistic approach provides essential resources, education,
                      and economic empowerment, fostering resilience and hope in
                      communities nationwide. Through strategic partnerships and
                      unwavering commitment, Life Center continues to illuminate
                      the path towards a brighter future for all Ethiopians.
                    </p>
                    <div className="flex flex-col justify-end text-end items-end text-slate-800 py-4">
                      <p>Apr 12, 2023</p>
                      <div className="flex gap-2 justify-end text-end items-end my-10">
                        <div className="lg:min-w-[200px] bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-xl justify-end items-end flex gap-2">
                          <button>Read More</button>
                          <FaArrowRight size={24} className="mt-1.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex gap-2 justify-end text-end items-end my-10">
                    <div className="lg:min-w-[200px] bg-primary hover:text-primary hover:bg-[#F6FDFE] hover:border-[1px] hover:border-gray-100 py-2 px-10 text-white text-xl rounded-xl justify-end items-end flex gap-2">
                      <button>Read More</button>
                      <FaArrowRight size={24} className="mt-1.5" />
                    </div>
                  </div> */}
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
