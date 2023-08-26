import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/createUser')
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('CreateUserDto',createUserDto)
    this.authService.createUser(createUserDto)
    // return this.authService.createUser(createUserDto);
    return { message: '회원가입이 성공적으로 완료되었습니다.' };

  }

  
}
