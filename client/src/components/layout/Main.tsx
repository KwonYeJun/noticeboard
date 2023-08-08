import React, { useState } from 'react';
import MainImage from './MainImage';
import MainMeun from './MainMeun';



const Main: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images = ["./test.png", "./test2.png", "./image3.jpg"];

  const handleSlideChange = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (

    <main>
      <MainImage currentSlide={currentSlide} images={images} />
      <MainMeun handleSlideChange={handleSlideChange} />
    </main>

  )

}



export default Main;
