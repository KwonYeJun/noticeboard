import React, { useEffect, useState, useRef } from 'react';
import KakaoLoginComponent from '../service/KakaoLogin'
import '../css/loginPage.css';
import lottie from 'lottie-web';
import logoAnimation from '../lottiefile/textLogo.json';

const LoginCheckPage: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      const anim = lottie.loadAnimation({
        container: animationRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: logoAnimation
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

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
          <div className="button-container">
            <div ref={animationRef} style={{ width: '100px', height: '100px' }} />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>

    </>

  )

}



export default LoginCheckPage
