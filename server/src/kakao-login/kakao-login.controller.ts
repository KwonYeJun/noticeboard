import { Controller, Get, Req, Query } from '@nestjs/common';
import { KakaoLoginService } from './kakao-login.service';

@Controller('kakao-login')
export class KakaoLoginController {
  constructor(private readonly kakaoLoginService: KakaoLoginService) {}

  @Get('userinfo')
  async getUserInfo(@Query('accessToken') accessToken: string): Promise<any> {
    try {
      if (!accessToken) {
        throw new Error('accessToken not provided.');
      }

      // KakaoLoginService를 통해 카카오 API를 호출하여 사용자 정보를 가져옵니다.
      const userInfo = await this.kakaoLoginService.getUserInfo(accessToken);

      // 사용자 정보를 반환합니다.
      return userInfo;
    } catch (error) {
      throw new Error('Failed to get user information from Kakao.');
    }
  }
}
