import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import '../css/loginPage.css';

const CreateUserPage: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };
  const handleUseridChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate(); // useNavigate 초기화

  const handleCreateUser = async () => {
    if (usernameError) {
      alert('아이디를 확인해주세요.');
      return;
    }

    try {
      const response = await fetch('/user/auth/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, userEmail, userId, password }),
      });

      if (response.ok) {
        // 회원가입 성공 처리
        alert('회원가입이 정상적으로 완료되었습니다.');
        navigate('/user/auth/login'); // 회원가입이 성공하면 로그인 페이지로 이동
      } else {
        // 회원가입 실패 처리
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      // 에러 처리
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleUsernameBlur = async () => {
    if (userName.trim() === '') {
      setUsernameError('아이디를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('/user/auth/checkUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userId }),
      });

      if (!response.ok) {
        const data = await response.json();
        setUsernameError(data.message);
      } else {
        setUsernameError('');
      }
    } catch (error) {
      setUsernameError('서버와의 통신 중 오류가 발생했습니다.');
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
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={handleUsernameChange}
        />
        <input
          type="email"
          placeholder="UserEmail"
          value={userEmail}
          onChange={handleUserEmailChange}
        />
        <input
          type="text"
          placeholder="UserId"
          value={userId}
          onChange={handleUseridChange}
          onBlur={handleUsernameBlur}
        />
        {usernameError && <span className="error-message">{usernameError}</span>}
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
