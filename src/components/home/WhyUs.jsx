import React from "react";
import emp from "../../assets/emp.png";
import com from "../../assets/com.png";
import free from "../../assets/free.png";
import impa from "../../assets/impa.png";

const WhyUs = () => {
  return (
    <div className="min-h-[50vh] py-10">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="flex flex-col justify-center items-start  gap-5 m-10 px-10"
          >
            <p className="text-black text-lg font-bold">Why Us</p>
            <p className="text-3xl font-bold mont text-primary">
              Empowering Lives: <br /> Compassion, Integrity, <br /> and
              Self-Reliance in Action{" "}
            </p>
            <p className="text-start text-slate-800 ">
              With our focus on compassion, integrity, and self-reliance, we
              stand out as the organization that truly understands the needs of
              orphans and widows, working tirelessly to transform lives and
              reduce poverty.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-10 justify-center items-center">
              <div className="mt-20 flex flex-col gap-4">
                <div className="max-w-[200px] border-2 border-primary  flex flex-col justify-center items-center rounded nemo p-5">
                  <img src={emp} alt="" className="w-[50px] h-[50px]" />
                  <p className="font-bold text-primary text-2xl py-3">
                    Empower
                  </p>
                  <p>
                    Discover how we empower lives through our dedicated support
                    and guidance.
                  </p>
                </div>

                <div className="max-w-[200px] border-2 border-primary  flex flex-col justify-center items-center rounded nemo p-5 ">
                  <img src={com} alt="" className="w-[50px] h-[50px]" />
                  <p className="font-bold text-primary text-2xl py-3">
                    Compassion
                  </p>
                  <p>
                    Experience our unwavering compassion and commitment to
                    making a difference.
                  </p>
                </div>
              </div>
              <div className="-mt-20 flex flex-col gap-4">
                <div className="max-w-[200px] border-2 border-primary  flex flex-col justify-center items-center rounded nemo p-5">
                  <img src={free} alt="" className="w-[50px] h-[50px]" />
                  <p className="font-bold text-primary text-2xl py-3">
                    Freedom
                  </p>
                  <p>
                    Join us in breaking the chains of poverty for a brighter
                    future.
                  </p>
                </div>

                <div className="max-w-[200px] border-2 border-primary  flex flex-col justify-center items-center rounded nemo p-5 ">
                  <img src={impa} alt="" className="w-[50px] h-[50px]" />
                  <p className="font-bold text-primary text-2xl py-3">Impact</p>
                  <p>
                    Make a lasting impact by supporting our mission of
                    transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
