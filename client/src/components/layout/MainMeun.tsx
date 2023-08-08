import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../css/mainMeun.css';
interface MainMeunProps {
  handleSlideChange: () => void;
}

const MainMeun: React.FC<MainMeunProps> = ({ handleSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);


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
        }}
      >
         <button onClick={handleSlideChange}>Change Slide</button>
      </motion.div>
      {/* Other menu boxes */}
    </div>
  );
};

export default MainMeun;
