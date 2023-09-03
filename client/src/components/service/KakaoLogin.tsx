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
import { useNavigate } from 'react-router-dom'; // 변경

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
//모달창 로딩 설정 하기
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate(); // 변경

  // useSWR 훅 호출을 조건부가 아닌 항상 일정하게 호출되게 수정
  const { data, error } = useSWR(
    authorizationCode ? `/user/auth/kakaologin?code=${authorizationCode}` : null,
    fetcher
  );
  
  // const { data, error } = useSWR(
  //   authorizationCode ? `/kakao-login/userinfo?code=${authorizationCode}` : null,
  //   fetcher
  // );
  const handleKakaoLogin = () => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${meKey}&redirect_uri=${Redirect_URL}&response_type=code`;
    // 모달창이 뜨기 위하여 메서드 수정
    const newPopup = window.open(kakaoAuthURL, 'Kakao Login', 'width=500,height=600');
    setPopup(newPopup);
  };

  const checkPopup = () => {
    if (!popup || popup.closed) {
      setPopup(null);
    }
  };

  useEffect(() => {
    if (data) {
      // 예: 로그인 처리
      localStorage.setItem('token', data.token);
      // 예: 사용자 데이터 저장
      localStorage.setItem('user', JSON.stringify(data.user));
    }
  }, [data]);
  
  useEffect(() => {
    if (error) {
      console.error(error);
      alert('로그인 과정에서 오류가 발생했습니다.');
    }
  }, [error]);
  

  //변경 전 버전
  // useEffect(() => {
  //   window.addEventListener('focus', checkPopup);
  //   window.addEventListener('message', receiveMessage, false);
  //   return () => {
  //     window.removeEventListener('focus', checkPopup);
  //     window.removeEventListener('message', receiveMessage);
  //   };
  // }, [popup]);
  
  // 변경 후: useEffect
useEffect(() => {
  window.addEventListener("message", receiveMessage, false);
  return () => {
    window.removeEventListener("message", receiveMessage);
  };
}, [popup]);

  // 토큰 요청 전에 로딩 상태를 true로 변경
  const receiveMessage = async (event: MessageEvent) => {
    if (event.data === "kakao-login-success") {
      setIsLoading(true);
  
      try {
        const response = await fetch("/kakao-login/token");
        const data = await response.json();
  
        // 서버에서 받아온 데이터를 이용하여 필요한 작업 수행
  
        setIsLoading(false); // 토큰 요청이 완료되면 로딩 상태를 false로 변경
        setPopup(null); // 모달 창 닫기
        navigate('/'); // 메인 페이지(/)로 이동
      } catch (error) {
        console.error("Failed to complete login:", error);
  
        // 에러 발생 시 로딩 상태 역시 false로 변경
        setIsLoading(false); 
        setPopup(null); // 모달 창 닫기
      }
    }
  };
  

  return (
    <div>
      <button onClick={handleKakaoLogin}>Kakao Login</button>
    </div>
  );
};

export default KakaoLoginComponent;