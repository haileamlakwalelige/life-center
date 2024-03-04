import React from "react";
import com from "../../assets/com.png";
import ste from "../../assets/ste.png";
import int from "../../assets/int.png";
import love from "../../assets/love.png";
import cre from "../../assets/cre.png";
import det from "../../assets/det.png";
import hon from "../../assets/hon.png";
import emp from "../../assets/emp.png";
import self from "../../assets/self.png";

const ProgramValue = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center items-center gap-6 lg:gap-14 flex-wrap">
        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={com} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Compassion</p>
        </div>
        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={ste} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Stewardship</p>
        </div>
        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={int} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Integrity</p>
        </div>
        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={love} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Love</p>
        </div>

        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={cre} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Creativity</p>
        </div>
        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={det} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Determination</p>
        </div>

        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={hon} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Honesty</p>
        </div>

        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={emp} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Empowerment</p>
        </div>

        <div className="flex flex-col  justify-center items-center gap-4">
          <img src={self} alt="" className="w-[70px] h-[70px]" />
          <p className="font-bold text-slate-800 text-base py-3">Self-reliance</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramValue;
