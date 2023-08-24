
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import '../css/loginPage.css';


const CreateUserPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate(); // useNavigate 초기화

const handleCreateUser = (path: string) =>{
  navigate(path); // 페이지 이동
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
              type="email"
              placeholder="Useremail"
              value={username}
              onChange={handleUsernameChange}
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
     
          <button>
            createUser
          </button>

        </div>

      </div>
    </>
  );
};

export default CreateUserPage;