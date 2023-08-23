import React, { useEffect, useState, useRef } from 'react';
import KakaoLoginComponent from '../service/KakaoLogin'
import '../css/loginPage.css';
import lottie from 'lottie-web';
import logoAnimation from '../lottiefile/textLogo.json';

const LoginCheckPage: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // 로그인 처리 로직을 여기에 구현
    console.log('Username:', username);
    console.log('Password:', password);
  };



  return (
    <>
      {/* <KakaoLoginComponent /> */}
      <div className="loginLayout">
        <img src="./test.png" alt="asd" className='textLogo' />
        <div className="login-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {/* <p onClick={}></p> */}
          <div className="button-container">
            <button className="login-button" onClick={handleLogin}>
              <img src="./singinBtn.png" alt="Login" />
            </button>
          </div>
        </div>

      </div>
    </>
  );
};




export default LoginCheckPage
