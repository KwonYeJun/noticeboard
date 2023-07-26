import React from 'react';
import KakaoLogin from "react-kakao-login";
import axios from 'axios';
import useSWR from 'swr';

const KakaoLoginComponent: React.FC = () => {
  const kakaoClientId = 'YOUR_KAKAO_JAVASCRIPT_KEY';

  const kakaoOnSuccess = async (data: any) => {
    try {
      console.log(data);
      const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달

      // 요청 보내기
      const response = await axios.get(`/api/some-endpoint?accessToken=${idToken}`);
      
      // SWR을 이용하여 요청 결과를 상태 관리
      const { data: responseData, error } = useSWR(`/api/some-endpoint?accessToken=${idToken}`, (url) => axios.get(url).then((res) => res.data));
      
      if (responseData) {
        // 요청이 성공했을 때 처리할 로직
        console.log('Response:', responseData);
      }

      if (error) {
        // 요청이 실패했을 때 처리할 로직
        console.log('Error:', error);
      }
    } catch (error) {
      console.log(error);
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
