import UserService from "./service/user.service";
import Strategy from "./strategy/strategy";
import { GoogleAuthenticator } from "./strategy/google.strategy";
import { KakaoAuthentiactor } from "./strategy/kakao.strategy";
import { EmailAuthenticator } from "./strategy/email.strategy";
import UserController from "./user.controller";

// 전략 패턴 객체 생성
const strategy = new Strategy();
// {strategy : {}, set(), login()}

strategy.set("email", new EmailAuthenticator());
// {strategy : {EmailAuthenticator{authentcate}}, set(), login()}

strategy.set("kakao", new KakaoAuthentiactor());
// {strategy : {KakaoAuthentiactor{authentcate}}, set(), login()}

strategy.set("google", new GoogleAuthenticator());
// {strategy : {KakaoAuthentiactor{authentcate}}, set(), login()}
// {strategy : {kakao : {KakaoAuthentiactor}, email : { EmailAuthenticator }, google : {GoogleAuthenticator}, set(), login()}

const userService = new UserService(strategy)
// 유저 로그인 로직 클래스 생성 및 유저 서비스 로직 객체 생성자 매개변수로 전달

const userController = new UserController(userService)

userController.signin("google")

// 1. userController.signin 매개변수 "google" 값 전달
// 2. userService.login 함수 실행 매개변수로 "google" , 유저의 입력값
// 3. strategy.login 함수 실행 "google", 유저의 입력값
// 4. strategy.login 함수 동작은 strategy[key = "google"].authentcate(유저의 입력값)
// 5. 유저의 검증로직을 끝내고 로그인 성공을 반환