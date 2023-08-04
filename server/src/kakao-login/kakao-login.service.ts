
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
// @Injectable()
// export class KakaoLoginService {
//   constructor(
//     private readonly httpService: HttpService,
//     private readonly configService: ConfigService,
//   ) {}

//   async getUserInfo(code: string) {
//     // const client_id = 'abcdefg1234567';
// // const redirect_url = 'http://localhost:2222/kakao-login/userinfo';

//     const client_id = this.configService.get<string>('945261');
//     const redirect_url = this.configService.get<string>('http://localhost:2222/kakao-login/userinfo');
//     const tokenRequestUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_url}&code=${code}`;

//     const tokenResponse = await this.httpService.get(tokenRequestUrl).toPromise();
//     const accessToken = tokenResponse.data.access_token;

//     const userProfileUrl = 'https://kapi.kakao.com/v2/user/me';
//     const { data } = await this.httpService
//       .get(userProfileUrl, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       })
//       .toPromise();

//     return data;
//   }
// }
@Injectable()
export class KakaoLoginService {

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }

  async getUserInfo(code: string) {
    // console.log('service', code)
    const client_id = this.configService.get<string>('ab73463344398ef2f9f175e4c8801d20');
    const redirect_url = this.configService.get<string>('http://localhost:2222/');


    const tokenRequestUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=ab73463344398ef2f9f175e4c8801d20&redirect_uri=http://localhost:2222/&code=${code}`;


    //axios를 화용하여 토큰 데이터를 요청 한다.
    const tokenResponse = await this.httpService.get(tokenRequestUrl).toPromise();
    console.log('tokenResponse',tokenResponse);


    const accessToken = tokenResponse.data.access_token;

    const userProfileUrl = 'https://kapi.kakao.com/v2/user/me';
    const { data } = await this.httpService
      .get(userProfileUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .toPromise();
      // 접근 토큰 데이터
      console.log('data', accessToken);
      // 사용자 정보를 나타내는 데이터
      console.log('data', data);

    return data;
  }
}


