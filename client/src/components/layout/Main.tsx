import React, { useState } from 'react';
import MainImage from './MainImage';
import MainMeun from './MainMeun';



const Main: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images = ["./test.png", "./test2.png", "./image3.jpg"];

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (

    <main>
      <MainImage currentSlide={currentSlide} images={images} />
      <MainMeun handleNextSlide={handleNextSlide} handlePrevSlide={handlePrevSlide} />
    </main>

  )

}



export default Main;
