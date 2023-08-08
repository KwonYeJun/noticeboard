import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../css/mainMeun.css';

const MainMeun: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images = ['./test.png', './test2.png', './image3.jpg'];
  const colors = ['#ff0000', '#00ff00', '#0000ff'];

  const handleSlideChange = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const listVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5
      }
    }
  };

  return (
    <div className="mainMeun">
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className='mainMeunBox'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '70%',
          height: '35%',
          borderRadius: 20,
          listStyleType: 'none',
          backgroundImage: `url(${images[currentSlide]})`, // Set background image
          backgroundColor: colors[currentSlide], // Set background color
        }}
      >
        <button onClick={handleSlideChange}>Change Slide</button>
      </motion.div>
      {/* Other menu boxes */}
    </div>
  );
};

export default MainMeun;
