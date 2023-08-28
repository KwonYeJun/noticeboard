import { Controller, Post, Body, HttpException, HttpStatus,UnauthorizedException  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user/login-user.dto'; // 추가

@Controller('user/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/createUser')
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('CreateUserDto', createUserDto);
    this.authService.createUser(createUserDto);
    return { message: '회원가입이 성공적으로 완료되었습니다.' };
  }

  @Post('/login') // 추가
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(loginUserDto);

    console.log('user',user)
    if (!user) {
      throw new UnauthorizedException('로그인 실패');

    }

    const token = this.authService.generateToken(user);
    return { token, user };
  }


  @Post('/checkUsername')// id중복확인 요청
async checkUsername(@Body() { userId }: { userId: string }) {
  const user = await this.authService.findUserByUserId(userId);
  if (user) {
    throw new HttpException('이미 사용 중인 아이디입니다.', HttpStatus.BAD_REQUEST);
  }
  return { message: '사용 가능한 아이디입니다.' };
}
  
}
