import React, { useState, useEffect, useRef } from 'react';
import logo from '../logo.json'
import lottie from 'lottie-web';




const Loge: React.FC = () => {
  const headerTag = document.querySelector('.logo');

  const test = useRef('');
  useEffect(() => {
    if (headerTag) {
      lottie.loadAnimation({
        container: headerTag,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: logo
      });
    }
  }, [test]);


  const handleClick = () => {
    window.open('');
  };


  return (
    <div className="header">
      <div className="logo" onClick={handleClick}>
      </div>
    </div>

  );
};

export default Loge;