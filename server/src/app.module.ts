import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './page/page.module';
import { KakaoLoginModule } from './kakao-login/kakao-login.module';

@Module({
  imports: [PageModule, KakaoLoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
