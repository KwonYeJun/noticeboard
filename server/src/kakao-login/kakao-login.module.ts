import { Module } from '@nestjs/common';
import { KakaoLoginService } from './kakao-login.service';
import { KakaoLoginController } from './kakao-login.controller';

@Module({
  providers: [KakaoLoginService],
  controllers: [KakaoLoginController]
})
export class KakaoLoginModule {}
