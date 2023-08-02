import { Module } from '@nestjs/common';
import { KakaoLoginService } from './kakao-login.service';
import { KakaoLoginController } from './kakao-login.controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  
  providers: [KakaoLoginService],
  controllers: [KakaoLoginController]
})
export class KakaoLoginModule {}
