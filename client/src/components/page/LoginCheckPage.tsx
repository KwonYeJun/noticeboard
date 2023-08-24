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


import React, { useState } from 'react';
import useSWR from 'swr';
import { loginUser } from '../user-auth-login/path-to-login'; // API 요청 함수의 경로를 정확하게 설정해야 합니다.
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

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      // 로그인 성공 처리 및 다음 단계로 진행
    } catch (error) {
      // 에러 처리
    }
  };

  // SWR을 사용하여 데이터 패치
  const { data, error } = useSWR('user', () => loginUser(username, password));

  // 데이터 로딩 중 처리
  if (!data && !error) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <KakaoLoginComponent /> */}
      <div className="loginLayout">
        <div className="loginBorderAnimation"></div>
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

export default LoginCheckPage;
