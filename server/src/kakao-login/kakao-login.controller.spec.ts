import { Test, TestingModule } from '@nestjs/testing';
import { KakaoLoginController } from './kakao-login.controller';

describe('KakaoLoginController', () => {
  let controller: KakaoLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KakaoLoginController],
    }).compile();

    controller = module.get<KakaoLoginController>(KakaoLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
