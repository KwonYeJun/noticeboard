
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CreateUserDto } from '../auth/dto/create-user.dto'; // CreateUserDto import
@Injectable()
export class KakaoLoginService {

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }

  async getUserInfo(code: string): Promise<CreateUserDto> {
    // console.log('service', code)
    const client_id = this.configService.get<string>('ab73463344398ef2f9f175e4c8801d20');
    const redirect_url = this.configService.get<string>('http://localhost:2222/');


    const tokenRequestUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=ab73463344398ef2f9f175e4c8801d20&redirect_uri=http://localhost:2222/&code=${code}`;

    const tokenResponse = await this.httpService.post(tokenRequestUrl, null, {
      params: {
        grant_type: 'authorization_code',
        client_id: client_id,
        redirect_uri: redirect_url,
        code: code,
      },
    }).toPromise();
    


    const accessToken = tokenResponse.data.access_token;

    const userProfileUrl = 'https://kapi.kakao.com/v2/user/me';
    const response = await this.httpService.get(userProfileUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).toPromise();
      // 접근 토큰 데이터
      console.log('data', accessToken);
      // 사용자 정보를 나타내는 데이터
      const userDto: CreateUserDto = {
        userName: response.data.properties.nickname, // 예시입니다. 실제 응답 데이터 구조에 맞게 수정해주세요.
        userEmail: response.data.kakao_account.email, // 예시입니다. 실제 응답 데이터 구조에 맞게 수정해주세요.
        userId: String(response.data.id), // id를 문자열로 변환
        password: 'kakao', // 패스워드 필드가 없으므로 임시 값 할당. 이 부분은 보안상 적절한 처리가 필요합니다.
       };
  
       return userDto;
  }
}


