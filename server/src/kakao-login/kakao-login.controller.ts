// import { Controller, Get, Res, Redirect, Req ,Query} from '@nestjs/common';
// import { KakaoLoginService } from './kakao-login.service';

// @Controller('kakao-login')
// export class KakaoLoginController {
//   constructor(private readonly kakaoLoginService: KakaoLoginService) {}



//   @Get('kakao')
//   @Redirect('https://kauth.kakao.com/oauth/authorize?client_id=카카오_클라이언트_ID&redirect_uri=리다이렉트_URI&response_type=code')
//   kakaoLogin() {}


//   @Get('userinfo')
//   async getUserInfo(@Query('accessToken') accessToken: string): Promise<any> {
//     try {
//       if (!accessToken) {
//         throw new Error('accessToken not provided.');
//       }

//       // KakaoLoginService를 통해 카카오 API를 호출하여 사용자 정보를 가져옵니다.
//       const userInfo = await this.kakaoLoginService.getUserInfo(accessToken);

//       // 사용자 정보를 반환합니다.
//       return userInfo;
//     } catch (error) {
//       throw new Error('Failed to get user information from Kakao.');
//     }
//   }
// }

// kakao-login.controller.ts
import { Body, Controller, HttpCode, HttpStatus, Post , Get ,Query} from '@nestjs/common';
import { KakaoLoginService } from './kakao-login.service';
import { KakaoLoginDto } from './kakao-login.dto';

@Controller('kakao-login')
export class KakaoLoginController {
  constructor(private readonly kakaoLoginService: KakaoLoginService) {}

  @Get('userinfo')
  @HttpCode(HttpStatus.OK)
  async getUserInfo(@Query('code') code: string) {
    return await this.kakaoLoginService.getUserInfo(code);
  }
}
