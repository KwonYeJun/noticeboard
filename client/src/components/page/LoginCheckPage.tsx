// import React, { useEffect, useState, useRef } from 'react';
// import KakaoLoginComponent from '../service/KakaoLogin'
// import '../css/loginPage.css';

// const LoginCheckPage: React.FC = () => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = () => {
//     // 로그인 처리 로직을 여기에 구현
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };



//   return (
// <>
//   {/* <KakaoLoginComponent /> */}
//   <div className="loginLayout">
//   <div className="loginBorderAnimation"></div>
//     <img src="../../img/textlogo.png" alt="asd" className='textLogo' />

//     <div className="login-form">
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       {/* <p onClick={}></p> */}

//         <button className="login-button" onClick={handleLogin}>
//           <img src="../../img/test3.png" alt="Login" className="normal-image" />
//     <img src="../../img/singinBtn.png" alt="" className='hover-image' />
//         </button>

//     </div>

//   </div>
// </>
//   );
// };




// export default LoginCheckPage


import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { loginUser } from '../user-auth-login/path-to-login'; // API 요청 함수의 경로를 정확하게 설정해야 합니다.
import KakaoLoginComponent from '../service/KakaoLogin'

import '../css/loginPage.css';
const LoginCheckPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(userId, password);
      // data에는 서버에서 반환한 정보가 들어있습니다.
      if (data.token) {
        // 토큰을 쿠키에 저장 (여기에서는 토큰을 jwtToken이라는 이름으로 저장)
        document.cookie = `jwtToken=${data.token}`;
        // 메인 페이지로 이동
        navigate('/'); // 메인 페이지 경로로 변경하세요
      }
    } catch (error) {
      // 에러 처리
    }
  };

  const navigate = useNavigate(); // useNavigate 초기화



const handleCreateUser = (path: string) =>{
  navigate(path); // 페이지 이동
}

  // SWR을 사용하여 데이터 패치
  const { data, error } = useSWR('user', () => loginUser(userId, password));

  // 데이터 로딩 중 처리
  if (!data && !error) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <KakaoLoginComponent />
      <div className="loginLayout">
        <div className="loginBorderAnimation"></div>
        <img src="../../img/textlogo.png" alt="asd" className='textLogo' />

        <div className="login-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="UserID"
              value={userId}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <p className="gradient-text" onClick={() => handleCreateUser('/user/auth/createUser')}>sing up</p>

          <button className="login-button" onClick={handleLogin}>
            <img src="../../img/test3.png" alt="Login" className="normal-image" />
            <img src="../../img/singinBtn.png" alt="" className='hover-image' />
          </button>

        </div>

      </div>
    </>
  );
};

export default LoginCheckPage;
