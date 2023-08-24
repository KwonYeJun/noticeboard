import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import '../css/loginPage.css';

const CreateUserPage: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate(); // useNavigate 초기화

  const handleCreateUser = async () => {
    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail, username, password }),
      });

      if (response.ok) {
        // 회원가입 성공 처리
        navigate('/login'); // 회원가입이 성공하면 로그인 페이지로 이동
      } else {
        // 회원가입 실패 처리
      }
    } catch (error) {
      // 에러 처리
    }
  };

  return (
    <>
      <div className="loginLayout">
        <div className="loginBorderAnimation"></div>
        <img src="../../img/textlogo.png" alt="asd" className="textLogo" />

        <div className="login-form">
          <div className="input-container">
            <input
              type="email"
              placeholder="Useremail"
              value={userEmail}
              onChange={handleUserEmailChange}
            />
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
          <button onClick={handleCreateUser}>Create User</button>
        </div>
      </div>
    </>
  );
};

export default CreateUserPage;
