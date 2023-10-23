# 컨트랙트 복습

```sh
npx react-create-app test
npm i truffle
npm i web3
npm i ganache-cli


# npx truffle init
```

- contracts 폴더에 sol파일에 컨트랙트 코드 작성하고

- 컴파일 진행 후

- migrations폴더애
- 배포 내용 코드 파일 츄가
- 파일명 = [번호]_[내용]_[파일명].js
- 1_deploy_Counter.js

- truffle congif 파일 내용에 지정한 네트워크로 배포 진행
```sh
npx truffle migrate
```

- 0xfFC4303260b31261499999aBcF938e9fb867b61f

- ca를 잊어버리면
- truffle console 활성화

```sh
npx truffle console
#배포한 컨트랙트 이름
# CA조회

Counter.address
# 배포한 컨트랙트 Counter 마지막으로 배포한 CA가 나온다
```


# 계약을 작성

# 숫자 야구게임

