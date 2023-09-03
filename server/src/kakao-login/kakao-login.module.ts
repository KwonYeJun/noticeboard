import { Module } from '@nestjs/common';
import { KakaoLoginService } from './kakao-login.service';
import { KakaoLoginController } from './kakao-login.controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  
  providers: [KakaoLoginService],
  controllers: [KakaoLoginController],
  exports: [KakaoLoginService], // 필요한 경우 export 해줍니다.
})
export class KakaoLoginModule {}
