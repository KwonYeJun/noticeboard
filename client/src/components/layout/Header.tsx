import React from 'react';
import { motion } from "framer-motion";
import Logo from './logo'
// import KakaoLoginComponent from '../service/KakaoLogin'
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 초기화
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
    visible: {rotate:360, opacity: 1, y: 0  },


  };
const itemStyle ={
  borderLeft:'none',
  borderRight:'none',
  borderTop:'none',
}

 // 페이지 요청 이벤트 핸들러
 const handlePageRequest = (path: string) => {
  navigate(path); // 페이지 이동
};
  return (

    <header>
      <Logo />

      <motion.ul variants={list} initial="hidden" animate="visible"
        style={{
          display: 'flex' ,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '70%',
          height: '100%',
          borderRadius: 20,
          listStyleType: 'none',
        }}>
        <motion.li style={itemStyle}    whileHover= {{scale :1.1}}
        variants={item}>Home</motion.li>
        <motion.li style={itemStyle}  whileHover= {{scale :1.1}} variants={item}>Home 2</motion.li>
        <motion.li style={itemStyle}  whileHover= {{scale :1.1}} variants={item}>Home 3</motion.li>
        {/* <KakaoLoginComponent /> */}
        <motion.li
          style={itemStyle}
          whileHover={{ scale: 1.1 }}
          variants={item}
          onClick={() => handlePageRequest('/user/auth/login')} // 버튼 클릭 시 이벤트 호출
        >
          Login / auth
        </motion.li>
      </motion.ul>
    </header>

  )

}



export default Header
