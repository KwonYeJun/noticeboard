import React, { useEffect } from 'react';
import KakaoLogin from "react-kakao-login";
import axios from 'axios';
import useSWR from 'swr';

const KakaoLoginComponent: React.FC = () => {
  const kakaoClientId = 'YOUR_KAKAO_JAVASCRIPT_KEY';

  const kakaoOnSuccess = async (data: any) => {
    try {
      console.log(data);
      const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달

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

  // 이 부분에서 SWR을 사용하여 요청을 보내도록 수정
  const { data: responseData, error } = useSWR(`/api/some-endpoint`, (url) => axios.get(url).then((res) => res.data));

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
