import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  async createUser(createUserDto: CreateUserDto) {
    // 실제 회원가입 로직을 구현하고 데이터베이스에 사용자 정보를 저장하는 등의 처리를 진행
    // createUserDto는 클라이언트로부터 받은 사용자 정보를 담고 있을 것입니다.
  }
}
