import React from "react";
import gal1 from "../../assets/gal1.jpg";
import gal2 from "../../assets/gal2.jpg";
import gal3 from "../../assets/gal3.jpg";
import gal4 from "../../assets/gal4.jpg";
import gal5 from "../../assets/gal5.jpg";
import gal6 from "../../assets/gal6.jpg";

const HomeGallery = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 py-10">
      <p className="text-3xl lg:text-5xl font-bold mont text-primary py-10">
        Our Gallery
      </p>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <img
              src={gal1}
              alt=""
              className="rounded-xl max-h-[350px] min-w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <img
              src={gal2}
              alt=""
              className="rounded-xl min-h-[350px] min-w-full"
            />
            <img
              src={gal3}
              alt=""
              className="rounded-xl min-h-[350px] min-w-full"
            />
          </div>
        </div>

        {/* Section two */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <img
              src={gal4}
              alt=""
              className="rounded-xl min-h-[350px] min-w-full"
            />
            <img
              src={gal5}
              alt=""
              className="rounded-xl min-h-[350px] min-w-full"
            />
          </div>
          <div>
            <img
              src={gal6}
              alt=""
              className="rounded-xl max-h-[350px] min-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
