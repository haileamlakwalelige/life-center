import React from "react";
import gal1 from "../../assets/gal1.jpg";
import gal2 from "../../assets/gal2.jpg";
import gal3 from "../../assets/gal3.jpg";
import gal4 from "../../assets/gal4.jpg";
import gal5 from "../../assets/gal5.jpg";
import gal6 from "../../assets/gal6.jpg";

// import Image from 'next/image';

const Reco = () => {
  return (
    <div>
      <div className="carousel rounded-box py-10">
        <div className="carousel-item px-2">
          <img src={gal1} width={400} height={450} alt="Burger" className="rounded-2xl"/>
        </div>
        <div className="carousel-item px-2">
          <img src={gal2} width={400} height={450} alt="Burger" className="rounded-2xl"/>
        </div>
        <div className="carousel-item px-2">
          <img src={gal3} width={400} height={450} alt="Burger" className="rounded-2xl"/>
        </div>
        <div className="carousel-item px-2">
          <img src={gal4} width={400} height={450} alt="Burger" className="rounded-2xl"/>
        </div>
        <div className="carousel-item px-2">
          <img src={gal5} width={400} height={450} alt="Burger" className="rounded-2xl"/>
        </div>
        <div className="carousel-item px-2">
          <img src={gal6} width={400} height={450} alt="Burger" className="rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Reco;
