import React, { useState } from 'react';
import MainImage from './MainImage';
import MainMeun from './MainMeun';

interface MainProps {
  currentBgColor: string;
  setCurrentBgColor: (color: string) => void;
}

const Main: React.FC<MainProps> = ({ currentBgColor, setCurrentBgColor }) => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images = [
    { src: "./test.png", bgColor: "#130D17" },
    { src: "./test2.png", bgColor: "#244266" },
    { src: "./image3.jpg", bgColor: "#3498db" },
  ];

  // const [currentBgColor, setCurrentBgColor] = useState<string>(images[0].bgColor);


  const handleNextSlide = () => {
    const newSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(newSlide);
    setCurrentBgColor(images[newSlide].bgColor);
};

const handlePrevSlide = () => {
    const newSlide = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newSlide);
    setCurrentBgColor(images[newSlide].bgColor);
};
  return (

    <main style={{ background: currentBgColor }}>
    <MainImage currentSlide={currentSlide} images={images} />
    <MainMeun handleNextSlide={handleNextSlide} handlePrevSlide={handlePrevSlide} />
  </main>

  )

}



export default Main;
