import React from 'react';
import '../css/mainMeun.css'
import { motion } from "framer-motion";

const MainMeun: React.FC = () => {

  // 부모 ul 태그의 애니메이션 효과를 주는 영역이라고 생각을 해주면 된다.
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
    <>
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
      </div>
    </>
  )

}



export default MainMeun
