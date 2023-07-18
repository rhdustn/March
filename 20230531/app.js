// 웹 서비스를 개발을 하고 완료되면 배포를 해서  사용자에게 소프트 웨어를 전달해야하는데
// 배포를 하기위해 필요한게 제 3자가 접속할 수 있는 서버 컴퓨터가 필효
// 365일 내내 24시간 켜져있어야 한다

// 서버컴퓨터를 대여해주는 호스팅 업체를 통해 배포를 진행한다
// 호스팅에는 두가지로 나뉘는데 (서버호스팅)(웹 호스팅)
// 서버호스팅은 물리 서버를 단독으로 임대 및 구매
// 웹 호스팅은 서버의 일부 공간을 임대하는 개념(컴퓨토를 잘게 쪼객거라고 보면됨)
// 웹 호스팅의 장점 : 서버나 인프라 구축이 필요가 없고 비용이 저렴
// 단점는 웹 호스팅은 자원이 한정적 단독 서버에 비해 사용량이 제한적이라는 단점

// 웹 호스팅 업체중 하나인 AWS 통해서 서버를 배포할것;

// ㅣaaS : 컴퓨터 자원만 제공하는 형태(AWS) infrasture as a service
//Paas : 헤로큐 등 넷플리파이 등등 기존 환경에서 서비스를 올려주는 형태

// 인스턴스 만들기 전에 리전 확인 서버 컴퓨터가 가깝게 설정

// 인스턴스의 사용 운영 체제 선택

// 우리가 사용할 os 는 우분투 프리티어
// 키페어는 장 보관해놓자 혹시나 전달해야할 경우 저장매체 사용 usb 등

// ssh TCP 프로토콜 포트 범위 22 기본으로 가지고 있는 디폴트 포트라고 생각하면 된다
// 인스턴스에 접근하기 위해서

// 보안그룸 설정  HTTP, HTTPS, MYSQL
// 인스턴스에 mysql 설치
 
// mysql  섵치 명령어

// 업데이트
// sudo apt-get update
// sudo apt-get install mysql-server
// sudo mysql -u root -p

// 데이터 베이스 세팅
// 우리가 사용할 데이터 베이스 만들어 보자
// 쿼리문 그대로 사용
// create database test
// show databases;

// 데이터 베이스를 사용할때 우리가 사용할 유저를 만들어 주자
// create user '여기에 유저의 이름'@'%' identified by '여기에 사용할 비밀번호
// 예) create user 'admin'@'%' identified by 'admin1234'

// 만든 유저에게 권한 설정
// grant all on 데이터 베이스 이름.(데이터 베이스 이름 뒤어 점)* to '유저 이름'@'%';
//예) grant all on test.* to 'admin'@'%';

// 궝ㄴ항니 주어젔는지 확임ㄴ
// show grants for '여기 유저 이름'
//예) show grants for 'admin';

// 외부에서 인스턴스의 mysql에 접속을 하자

// sudo service mysql restart;

// mysql -u admin -p
// admin1234
// 보안그룹에 mysql 을 허용
// sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf

// 파일을 열고 i 를 눌러서 수정모드 진입
// 0.0.0.0
// esc 눌러서 풀고
// :wq! : 저장후 종료
// :q! : 종료
// :w! : 강제저장

// mysql connection 만들기
// 이름을 작성 hostname 에 퍼블릭 IPv4 DNS 복사해서 붙이기 name을 아까저장한 이름으로 저장하기 
// 비밀번호 작설, test Connection 작성하기

// 프로젝트를 설치 받자
// git에 올린 프로젝트를 설치

// node js 설치
// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh

// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash 
// source ~/.bashrc
// nvm list-remote
// nvm install (원하는 버전)

// 포트 초워딩을 해서 80 http로 접속했을때 8080 포트로 재 매핑 시켜주자
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;
// -dport 80 접속했을때 --to-port 8080로 재매핑

// 포트 포워딩 확인 명령어
// sudo iptables -t nat -L --line-numbers

// 포트 포워딩 삭제 명령어
// sudo iptables -t nat -D PREROUTING 인덱스 번호

// http :80 본 포트
// https: 443 포트  

// 그리고 서버대기가 종료되는데
// 백드라운드 서버를 대기시켜서 계속 동작하게
// pm2 설치
// npm i pm2
// pacjage.json 부분에서 실행 스크립트 명령어를 node app.js 로 실행했을텐데
// 서버가 종료 되어도 백드라운드에서 노드 서버 실행
// 서버 종료는 npx pm2 kill : 종료
// 리스트 확인 npx pm2 list : 리스트

// vi package.json
// package json파일을 여는것