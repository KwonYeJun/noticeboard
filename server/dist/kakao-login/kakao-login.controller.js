"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoLoginController = void 0;
const common_1 = require("@nestjs/common");
const kakao_login_service_1 = require("./kakao-login.service");
let KakaoLoginController = exports.KakaoLoginController = class KakaoLoginController {
    constructor(kakaoLoginService) {
        this.kakaoLoginService = kakaoLoginService;
    }
    async getUserInfo(accessToken) {
        try {
            if (!accessToken) {
                throw new Error('accessToken not provided.');
            }
            const userInfo = await this.kakaoLoginService.getUserInfo(accessToken);
            return userInfo;
        }
        catch (error) {
            throw new Error('Failed to get user information from Kakao.');
        }
    }
};
__decorate([
    (0, common_1.Get)('userinfo'),
    __param(0, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KakaoLoginController.prototype, "getUserInfo", null);
exports.KakaoLoginController = KakaoLoginController = __decorate([
    (0, common_1.Controller)('kakao-login'),
    __metadata("design:paramtypes", [kakao_login_service_1.KakaoLoginService])
], KakaoLoginController);
//# sourceMappingURL=kakao-login.controller.js.map