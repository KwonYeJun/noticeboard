import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import '../css/loginPage.css';

const CreateUserPage: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string>('');

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

  const navigate = useNavigate();


  const handleCreateUser = async () => {
    if (usernameError || emailError || passwordError) {
      alert('입력한 정보를 확인해주세요.');
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
    if (!/^[a-zA-Z0-9_-]{4,16}$/.test(userName)) {
      setUsernameError('4~16자의 영문 대소문자, 숫자, 특수기호(-, _)만 사용 가능합니다.');
    } else {
      setUsernameError('');
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


  const handleEmailBlur = () => {
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userEmail)) {
      setEmailError('올바른 이메일 주소를 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(password)) {
      setPasswordError('숫자와 영문자를 포함한 6~20자리의 비밀번호를 입력해주세요.');
    } else {
      setPasswordError('');
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
            {usernameError && <span className="error-message">{usernameError}</span>}
            <input
              type="email"
              placeholder="UserEmail"
              value={userEmail}
              onChange={handleUserEmailChange}
              onBlur={handleEmailBlur}
            />
            {emailError && <span className="error-message">{emailError}</span>}
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
              onBlur={handlePasswordBlur}
            />
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>
          <button onClick={handleCreateUser}>Create User</button>
        </div>
      </div>
    </>
  );
};

export default CreateUserPage;
