import React from 'react';
import { motion } from "framer-motion";

const Header: React.FC = () => {

  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      rotate:360,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };


  return (

    <header>
      <motion.ul variants={list} initial="hidden" animate="visible"
        style={{
          display: 'flex' ,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '70%',
          height: '100%',
          borderRadius: 20,
        }}>
        <motion.li variants={item}>item 1</motion.li>
        <motion.li variants={item}>item 2</motion.li>
        <motion.li variants={item}>item 3</motion.li>
      </motion.ul>
    </header>

  )

}



export default Header
