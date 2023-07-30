import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.json'
import lottie from 'lottie-web';




const Loge: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      lottie.loadAnimation({
        container: animationRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: logo
      });
    }
  }, []);


  const handleClick = () => {
    window.open('');
  };


  return (
    <div className="header">
      <div className="logo" onClick={handleClick} ref={animationRef}>
      </div>
    </div>

  );
};

export default Loge;