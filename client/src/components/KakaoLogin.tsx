import React, { useEffect } from 'react';
import KakaoLogin from "react-kakao-login";
import axios from 'axios';
import useSWR from 'swr';

const KakaoLoginComponent: React.FC = () => {
  const kakaoClientId = 'b9378165b8dd0245624ae217492f4ea6';

  const fetchUserData = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data: responseData, error } = useSWR(`/api/some-endpoint?accessToken=${kakaoClientId}`, fetchUserData);

  useEffect(() => {
    if (responseData) {
      // 요청이 성공했을 때 처리할 로직
      console.log('Response:', responseData);
    }

    if (error) {
      // 요청이 실패했을 때 처리할 로직
      console.log('Error:', error);
    }
  }, [responseData, error]);

  const kakaoOnSuccess = async (data: any) => {
    try {
      console.log(data);
      const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달

      // 요청 보내기
      const response = await axios.get(`/api/some-endpoint?accessToken=${idToken}`);
      console.log('Response:', response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };

  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

export default KakaoLoginComponent;
