import React from "react";

const Mission = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 my-10 ">
      <div className="flex flex-col justify-center items-center">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-2 border-t-2 border-primary py-10 px-4">
          <div>
            <p className="font-bold text-3xl lg:text-4xl text-primary py-5">
              Mission
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-800">
              Our mission is to provide hope and stability to orphans and widows
              in Ethiopia. We equip orphans with essential needs, education, and
              psychological support, empowering them to develop self-confidence
              and achieve their life goals. We also empower widows through skill
              development, vocational training, and financial support, enabling
              them to establish independent businesses. Through compassion,
              integrity, and empowerment, we strive to reduce economic
              vulnerability and contribute to poverty reduction in Ethiopia.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-2 border-primary py-10 px-4 ">
          <div>
            <p className="font-bold text-3xl lg:text-4xl text-primary py-5">
              Vision
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-800">
              We envision a future where orphans and widows in Ethiopia find
              hope and a transformed life. Our vision is to be a guiding light,
              offering support and opportunities to the most vulnerable. We aim
              to create a society where orphans are equipped with the tools they
              need to thrive, and widows are empowered to achieve independence.
              Through our work, we aspire to foster self-reliance, dignity, and
              a brighter future for those we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
