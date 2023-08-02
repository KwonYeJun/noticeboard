
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class KakaoLoginService {

    constructor(
      private readonly httpService: HttpService,
      private readonly configService: ConfigService,
    ) {}

    async getUserInfo(code: string) {
      const client_id = this.configService.get<string>('KAKAO_CLIENT_ID');
      const redirect_url = this.configService.get<string>('KAKAO_REDIRECT_URI');
      const tokenRequestUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_url}&code=${code}`;
  
      const tokenResponse = await this.httpService.get(tokenRequestUrl).toPromise();
      const accessToken = tokenResponse.data.access_token;
  
      const userProfileUrl = 'https://kapi.kakao.com/v2/user/me';
      const { data } = await this.httpService
        .get(userProfileUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .toPromise();
  
      // 데이터 처리 및 저장 작업 수행
      // ...
      
      return data;
    }

  // private readonly kakaoBaseUrl = 'https://kapi.kakao.com';

  // async getUserInfo(accessToken: string): Promise<any> {
  //   try {
  //     const response = await axios.get(`${this.kakaoBaseUrl}/v2/user/me`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     throw new Error('Failed to get user information from Kakao.');
  //   }
  // }

}
