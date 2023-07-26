import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KakaoLoginService {

  private readonly kakaoBaseUrl = 'https://kapi.kakao.com';

  async getUserInfo(accessToken: string): Promise<any> {
    try {
      const response = await axios.get(`${this.kakaoBaseUrl}/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to get user information from Kakao.');
    }
  }

}
