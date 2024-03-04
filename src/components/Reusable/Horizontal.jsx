import React, { useState } from "react";
import "./horizontal.css"; // Import the CSS file
import gal1 from "../../assets/gal1.jpg";
import gal2 from "../../assets/gal2.jpg";
import gal3 from "../../assets/gal3.jpg";
import gal4 from "../../assets/gal4.jpg";
import gal5 from "../../assets/gal5.jpg";
import gal6 from "../../assets/gal6.jpg";

// import Image from 'next/image';

const Horizontal = () => {
  const [selectedInput, setSelectedInput] = useState(1); // Default to the first input

  const handleImageClick = (inputNumber) => {
    setSelectedInput(inputNumber);
  };

  const getCarouselItem = (index) => {
    const images = [gal1, gal2, gal3, gal4, gal5, gal6];

    const totalImages = images.length;
    const normalizedIndex = (index + totalImages) % totalImages;

    const isSelected = selectedInput === normalizedIndex;

    return (
      <img
        key={normalizedIndex}
        src={images[normalizedIndex]}
        alt={`Option ${normalizedIndex + 1}`}
        width={400}
        height={450}
        className={`carousel-image ${isSelected ? "selected" : ""}`}
        onClick={() => handleImageClick(normalizedIndex)}
      />
    );
  };

  return (
    <div className="px-20 lg:px-32 flex justify-center items-center py-10">
      <div className="carousel-container carousel carousel-center h-full pt-24 py-5 bod ">
        <div className="image-options carousel-item w-screen h-[500px]">
          {/* {getCarouselItem(selectedInput - 2)} */}
          {getCarouselItem(selectedInput - 1)}
          {getCarouselItem(selectedInput)}
          {getCarouselItem(selectedInput + 1)}
          {/* {getCarouselItem(selectedInput + 2)} */}
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
