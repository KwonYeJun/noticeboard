import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './page/page.module';
import { KakaoLoginModule } from './kakao-login/kakao-login.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  HttpModule,KakaoLoginModule, AuthModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
