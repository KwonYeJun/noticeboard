// import React, { useEffect } from 'react';
// import useSWR from 'swr';

// // 카카오 앱 키
// const meKey = 'ab73463344398ef2f9f175e4c8801d20';
// // 카카오 등록 url
// const Redirect_URL = 'http://localhost:2222/';
// const urlParams = new URLSearchParams(window.location.search);
// const authorizationCode = urlParams.get('code');

// const fetcher = async (url: any) => {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// };

// const KakaoLoginComponent: React.FC = () => {
//   // useSWR 훅 호출을 조건부가 아닌 항상 일정하게 호출되게 수정
//   const { data, error } = useSWR(
//     authorizationCode ? `/kakao-login/userinfo?code=${authorizationCode}` : null,
//     fetcher
//   );

//   const handleKakaoLogin = async () => {
//     const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${meKey}&redirect_uri=${Redirect_URL}&response_type=code`;
//     window.location.assign(kakaoAuthURL);
//   };

//   // 로그인 처리 및 에러 처리
//   useEffect(() => {
//     if (data) {
//       // 로그인 처리 예
//       localStorage.setItem('token', data.token);
//       // 사용자 데이터 저장
//       // ...
//     } else if (error) {
//       console.error(error);
//     }
//   }, [data, error]);

//   return (
//     <div>
//       <button onClick={handleKakaoLogin}>Kakao Login</button>
//     </div>
//   );
// };

// export default KakaoLoginComponent;

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

const meKey = 'ab73463344398ef2f9f175e4c8801d20';
const Redirect_URL = 'http://localhost:2222/';


const urlParams = new URLSearchParams(window.location.search);
const authorizationCode = urlParams.get('code');

const fetcher = async (url: any) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};


const KakaoLoginComponent: React.FC = () => {
  const [popup, setPopup] = useState<Window | null>(null);
  // useSWR 훅 호출을 조건부가 아닌 항상 일정하게 호출되게 수정
  const { data, error } = useSWR(
    authorizationCode ? `/kakao-login/userinfo?code=${authorizationCode}` : null,
    fetcher
  );
  const handleKakaoLogin = () => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${meKey}&redirect_uri=${Redirect_URL}&response_type=code`;
    const newPopup = window.open(kakaoAuthURL, 'Kakao Login', 'width=500,height=600');
    setPopup(newPopup);
  };

  const checkPopup = () => {
    if (!popup || popup.closed) {
      setPopup(null);
    }
  };



  useEffect(() => {
    window.addEventListener('focus', checkPopup);
    return () => {
      window.removeEventListener('focus', checkPopup);
    };
  }, []);

  return (
    <div>
      <button onClick={handleKakaoLogin}>Kakao Login</button>
    </div>
  );
};

export default KakaoLoginComponent;