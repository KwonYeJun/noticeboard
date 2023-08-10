import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../css/mainMeun.css';
interface MainMeunProps {
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}

const MainMeun: React.FC<MainMeunProps> = ({ handleNextSlide, handlePrevSlide }) => {
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
  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  // li자식 아이템 효과를 줄 수 있는 영역이다.
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { rotate: 360, opacity: 1, y: 0 },


  };
  const itemStyle = {
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
  }
  return (
    <div className="mainMeun">
      <motion.div variants={list} initial="hidden" animate="visible"
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
          }}>
          1
        </motion.div>

        <motion.div variants={list} initial="hidden" animate="visible"
          className='mainMeunBox'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '70%',
            height: '20%',
            borderRadius: 20,
            listStyleType: 'none',
          }}>
          1
        </motion.div>
        <motion.div variants={list} initial="hidden" animate="visible"
          className='mainMeunBox'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '70%',
            height: '20%',
            borderRadius: 20,
            listStyleType: 'none',
          }}>
          1
        </motion.div>
      
      
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
        <button onClick={handlePrevSlide}>Previous Slide</button>
        <button onClick={handleNextSlide}>Next Slide</button>
      </motion.div>
      {/* Other menu boxes */}
    </div>
  );
};

export default MainMeun;
