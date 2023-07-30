import React from 'react';
import './App.css';
import KakaoLoginComponent from './components/KakaoLogin'
import Main from './components/layout/Main'
import Header from './components/layout/Header'

function App() {

  return (
    <>
      <div className="container">
      <Header />
      <Main />
      {/* <KakaoLoginComponent /> */}

      </div>
    </>
  );
}

export default App;
