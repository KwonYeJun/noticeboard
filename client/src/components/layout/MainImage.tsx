import React from "react";
import "../css/mainImage.css";

interface MainImageProps {
  currentSlide: number;
  images: { src: string; bgColor: string; }[];
}

const MainImage: React.FC<MainImageProps> = ({ currentSlide, images }) => {
  return (
    <div className="mainImgBox">
      <img src={images[currentSlide].src} alt="asd" id="slider-image" />
    </div>
  );
};

export default MainImage;
