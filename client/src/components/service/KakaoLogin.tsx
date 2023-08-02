import React, { useEffect } from 'react';
import KakaoLogin from "react-kakao-login";
import axios from 'axios';
import useSWR from 'swr';

const KakaoLoginComponent: React.FC = () => {
  // useEffect(() => {
  //   // 카카오 SDK 초기화
  //   window.Kakao.init("YOUR_APP_KEY");
  // }, []);
  // const handleLogin = () => {
  //   window.Kakao.Auth.login({
  //     success: async (response: { access_token: string }) => {
  //       try {
  //         const { access_token } = response;

  //         const result = await axios.post(
  //           "/kakao-login/userinfo",
  //           { access_token },
  //           { headers: { "Content-Type": "application/json" } }
  //         );

  //         const data = result.data;

  //         if (result.status === 200) {
  //           // 저장 처리 예
  //           localStorage.setItem("token", data.token);
  //           // 사용자 데이터 저장
  //           // ...
  //         } else {
  //           console.log("Error:", data);
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     },
  //     fail: (error:any) => {
  //       console.error(error);
  //     },
  //   });
  // };

  // const handleLogin = () => {
  //   window.Kakao.Auth.login({
  //     success: async ({ access_token }) => {
  //       try {
  //         const response = await fetch("YOUR_SERVER_URL/login", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ access_token }),
  //         });

  //         const data = await response.json();

  //         if (response.ok) {
  //           // 저장 처리 예
  //           localStorage.setItem("token", data.token);
  //           // 사용자 데이터 저장
  //           // ...
  //         } else {
  //           console.log("Error:", data);
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     },
  //     fail: (error) => {
  //       console.error(error);
  //     },
  //   });
  // };

  const meKey = 'ab73463344398ef2f9f175e4c8801d20';
  const Redirect_URL = 'http://localhost:2222/kakao-login/userinfo';
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get('code');

  const code = new URL(window.location.href).searchParams.get("code");

  const handleKakaoLogin = async () => {
    // 카카오 인증 페이지로 리디렉션
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${meKey}&redirect_uri=${Redirect_URL}&response_type=code`;

    window.location.assign(kakaoAuthURL);
  };
  return (
    <div>
      <button onClick={handleKakaoLogin}>Kakao Login</button>
    </div>
  );
};

export default KakaoLoginComponent;
