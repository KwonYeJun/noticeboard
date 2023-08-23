import React, { useEffect, useState, useRef } from 'react';
import KakaoLoginComponent from '../service/KakaoLogin'
import '../css/loginPage.css';

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
        <img src="../../img/textlogo.png" alt="asd" className='textLogo' />
        
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
      
            <button className="login-button" onClick={handleLogin}>
              <img src="../../img/test3.png" alt="Login" className="normal-image" />
        <img src="../../img/singinBtn.png" alt="" className='hover-image' />
            </button>
        
        </div>

      </div>
    </>
  );
};




export default LoginCheckPage
