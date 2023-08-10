import React, { useEffect, useState } from 'react';

import Main from '../layout/Main'
import Header from '../layout/Header'

interface MainPageProps {
  currentBgColor: string;
  setCurrentBgColor: (color: string) => void;
}

const MainPage: React.FC<MainPageProps> = ({ currentBgColor, setCurrentBgColor }) => {
  return (
    <>
      <Header currentBgColor={currentBgColor} />
      <Main currentBgColor={currentBgColor} setCurrentBgColor={setCurrentBgColor} />
    </>
  );
};



export default MainPage
