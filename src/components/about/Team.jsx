import React from "react";
import mem1 from "../../assets/mem1.jpg";
import mem2 from "../../assets/mem2.jpg";
import mem3 from "../../assets/mem3.jpg";
import mem4 from "../../assets/mem4.jpg";
import mem5 from "../../assets/mem5.jpg";
import mem6 from "../../assets/mem6.jpg";
import mem7 from "../../assets/mem7.jpg";
import mem8 from "../../assets/mem8.jpg";
import mem9 from "../../assets/mem9.jpg";
import mem10 from "../../assets/mem10.jpg";

const Team = () => {
  const images = [
    { name: "Amare Merka", jobTitle: "Deputy Director", image: mem1 },
    {
      name: "Wubshet Bittew",
      jobTitle: "Admin and Finance Officer",
      image: mem2,
    },
    { name: "Hailu Getachew", jobTitle: "Social Worker", image: mem3 },
    { name: "Abel Tadesse", jobTitle: "Social Worker", image: mem4 },
    { name: "Merima Mohammed", jobTitle: "Instructor", image: mem5 },
    { name: "Hiwot Solomon", jobTitle: "Social Worker", image: mem6 },
    { name: "Yordanos Argaw", jobTitle: "Social Worker", image: mem7 },
    { name: "Meles Gerbi", jobTitle: "Social Worker", image: mem8 },
    { name: "Beakal Ayele", jobTitle: "Social Worker", image: mem9 },
    { name: "Haymanot Ashenafi", jobTitle: "Social Worker", image: mem10 },
  ];

  return (
    <div className="bg-back px-2 sm:px-6 md:px-12 lg:px-20">
      <p className="text-3xl lg:text-5xl font-semibold mont text-primary py-10">
        MEET OUR STAFF
      </p>
      <div className="flex  min-h-screen items-center justify-center bg-[#F6FDFE]">
        <div className="grid grid-cols-1 gap-5 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl -mt-28 font-bold text-white">
                  {item.name}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
