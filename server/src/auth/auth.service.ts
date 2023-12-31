import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user/login-user.dto'; // 추가
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { KakaoLoginService } from '../kakao-login/kakao-login.service';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private kakaoLoginService: KakaoLoginService, // KakaoLoginService 주입
  ) {}


  async createUser(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10); // 10은 해시 라운드 수를 나타냄
    const createdUser = new this.userModel({
      ...rest,
      password: hashedPassword,
    });
    return createdUser.save();
  }
  async validateUser(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({ userId: loginUserDto.userId });
    console.log(user);
    if (user && (await bcrypt.compare(loginUserDto.password, user.password))) {
      return user;
    }
    return null;
  }

  generateToken(user: User) {
    // 토큰 생성 로직 구현
    const payload = { sub: user.userId, userEmail: user.userEmail }; // 토큰에 넣을 정보 설정
    return this.jwtService.sign(payload);
  }


//아이디 중복 검사
  async findUserByUserId(userId: string) {
    return this.userModel.findOne({ userId });
  }

  //카카오 로그인
  async createKakaoUser(code: string) {
    const kakaoUser = await this.kakaoLoginService.getUserInfo(code);
    console.log('kakaoUser',kakaoUser);
    return this.createUser(kakaoUser);
  }
}
