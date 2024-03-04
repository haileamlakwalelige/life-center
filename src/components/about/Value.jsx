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

const Value = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 py-10">
      <p className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl py-10 text-start">
        Values
      </p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          {/* Compassion */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={com}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">Compassion</p>
            <p className="px-4">
              Showing empathy and care towards those in need, embodying a deep
              understanding of their struggles.
            </p>
          </div>

          {/* Stewardship */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={ste}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">Stewardship</p>
            <p className="px-4">
              Responsibly managing resources entrusted to them, ensuring maximum
              impact and sustainability.
            </p>
          </div>

          {/* Integrity */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={int}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">Integrity</p>
            <p className="px-4">
              Upholding honesty and transparency in all interactions and
              operations.
            </p>
          </div>

          {/* Love */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={love}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">Love</p>
            <p className="px-4">
              Fostering a nurturing and supportive environment, rooted in
              genuine affection for beneficiaries and stakeholders.
            </p>
          </div>

          {/* Creativity */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={cre}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">Creativity</p>
            <p className="px-4">
              Embracing innovative approaches to address complex challenges,
              continually seeking new solutions.
            </p>
          </div>

          {/* Determination */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={det}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">
              Determination
            </p>
            <p className="px-4">
              Demonstrating unwavering commitment and perseverance in the
              pursuit of their mission.
            </p>
          </div>

          {/* Honesty */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={hon}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">Honesty</p>
            <p className="px-4">
              Practicing truthfulness and authenticity in communication and
              actions.
            </p>
          </div>

          {/* Empowerment */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={emp}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">Empowerment</p>
            <p className="px-4">
              Equipping individuals with the tools and resources they need to
              take control of their lives and futures.
            </p>
          </div>

          {/* Self-reliance */}
          <div className="nemo flex flex-col justify-center items-center rounded-xl border-4 border-primary py-3 px-2">
            <img
              src={self}
              alt=""
              className="h-[100px] w-[100px] text-primary"
            />
            <p className="font-bold text-primary text-2xl py-3">
              Self-reliance
            </p>
            <p className="px-4">
              Encouraging independence and autonomy, empowering individuals to
              become self-sufficient contributors to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
