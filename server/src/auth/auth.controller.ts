import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/createUser')
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('CreateUserDto',createUserDto)
    return this.authService.createUser(createUserDto);
  }
}
