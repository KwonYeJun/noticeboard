import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [JwtModule.register({
    // JwtModule 설정
    secret: 'exampleKey', // 시크릿 키 설정
    signOptions: { expiresIn: '1h', algorithm: 'HS256' }, // 생성 옵션 설정
    verifyOptions: { ignoreExpiration: false }, // 검증 옵션 설정
  }),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
