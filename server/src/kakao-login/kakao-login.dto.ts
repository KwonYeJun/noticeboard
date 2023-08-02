// kakao-login.dto.ts
import { IsNotEmpty } from 'class-validator';

export class KakaoLoginDto {
  @IsNotEmpty()
  code: string;
}
