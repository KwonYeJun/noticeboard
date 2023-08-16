import React, { useState, useEffect, useRef } from 'react';
import logo from './logo3.json'
import lottie from 'lottie-web';




const Loge: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animationRef.current) {
      const anim = lottie.loadAnimation({
        container: animationRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: logo
      });

      // 두번 렌더링 되는 버그 수정
      return () => {
        anim.destroy(); // Cleanup the animation when the component unmounts
      };
    }
  }, []);

  const handleClick = () => {
    window.open('');
  };


  return (

    <div className="logo" onClick={handleClick} ref={animationRef} style={{
      width: '30%',
      height: '100%'
    }}>
    </div>


  );
};

export default Loge;