import { KakaoLoginService } from './kakao-login.service';
export declare class KakaoLoginController {
    private readonly kakaoLoginService;
    constructor(kakaoLoginService: KakaoLoginService);
    getUserInfo(accessToken: string): Promise<any>;
}
