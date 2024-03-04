import React from "react";

const HomeProgram = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 pt-10">
      <p className="text-3xl lg:text-5xl font-bold mont text-primary pt-10">
        Our Programs
      </p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-[1px] border-b-[1px] border-gray-400 justify-start items-start">
          <div className="flex flex-col min-h-[200px] justify-center items-center  gap-5 m-10 p-10 border-b-[1px] border-primary">
            <p className="text-slate-700 text-center text-lg font-bold">
              Orphans and Vulnerable Children (OVC) Support Program
            </p>
            <p className="text-center text-slate-800 ">
              Providing basic needs, educational facilities, and psychological
              support to orphans and vulnerable children to ensure their
              well-being and stability.
            </p>
          </div>

          {/* Two */}
          <div className="flex flex-col min-h-[230px] justify-center items-center  gap-5 m-10 p-10 border-b-[1px] border-primary">
            <p className="text-slate-700 text-center text-lg font-bold">
              Widows&apos; Empowerment Program
            </p>
            <p className="text-center text-slate-800 ">
              Offering skill development, vocational training, and financial
              support to widows, enabling them to achieve economic independence
              through entrepreneurship and sustainable livelihoods.
            </p>
          </div>

          {/* Three */}
          <div className="flex flex-col min-h-[230px] justify-center items-center  gap-5 m-10 p-10 border-b-[1px] border-primary">
            <p className="text-slate-700 text-center text-lg font-bold">
              Community Development Initiatives
            </p>
            <p className="text-center text-slate-800 ">
              Implementing projects aimed at reducing economic vulnerability and
              contributing to poverty reduction efforts in Ethiopia, benefiting
              vulnerable households and communities.
            </p>
          </div>

          {/* Four */}
          <div className="flex flex-col min-h-[230px] justify-center items-center  gap-5 m-10 p-10 border-b-[1px] border-primary">
            <p className="text-slate-700 text-center text-lg font-bold">
              Education Enhancement Program
            </p>
            <p className="text-center text-slate-800 ">
              Supporting access to quality education for orphans and vulnerable
              children through the provision of educational facilities and
              resources, empowering them to reach their full potential.
            </p>
          </div>

          {/* five */}
          <div className="flex flex-col min-h-[200px] justify-center items-center  gap-5 m-10 p-10  border-primary">
            <p className="text-slate-700 text-center text-lg font-bold">
              Psychological Support Services
            </p>
            <p className="text-center text-slate-800 ">
              Providing counseling and psychosocial support to both
              orphans/vulnerable children and widows, helping them cope with
              trauma, build resilience, and develop self-confidence.
            </p>
          </div>

          {/* Six */}
          <div className="flex flex-col min-h-[200px] justify-center items-center  gap-5 m-10 p-10 border-primary">
            <p className="text-slate-700 text-center text-lg font-bold">
              Livelihood Development Projects
            </p>
            <p className="text-center text-slate-800 ">
              Engaging in initiatives that promote economic empowerment and
              self-reliance among beneficiaries, such as vocational training,
              business skills development, and access to revolving funds for
              income-generating activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProgram;
