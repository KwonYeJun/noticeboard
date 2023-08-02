import React, { useEffect, useState } from 'react';
// import { Extractor } from 'react-color-extractor';
import '../css/mainImage.css'

const MainImage: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<string>('#ffffff');

  const handleColors = (colors: string[]) => {
    // 추출된 색상 중에서 가장 많이 등장한 색상을 선택합니다.
    if (colors && colors.length > 0) {
      setCurrentColor(colors[0]);
    }
  };


  return (

      <div className="mainImgBox" >
        <img src="./test.png" alt="asd" id="slider-image" />
     </div> 
  
  )

}   



export default MainImage
