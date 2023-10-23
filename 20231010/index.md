# token

# ERC20 토큰 

- ERC는 Ethereum Request for Comments 의 약자
- ERC20 에서 20은 특정 제안에 번호를 매긴 토근의 생성이나 발행들의 규칙을 의미
- 이 숫자는 식별하기 위한 숫자 큰 의미 없음

```sh
# 토큰과 토인의차이
# 코인은 메인넷이 있고 토큰은 메인넷이 없는것.
# 토큰을 만들면  네트워크 안에 포함되어 있지만 토큰의 자체의 메인넷이 구현되어 있지 않기 때문에 코인은 아니다

#ERC20
#ERC20은 이더리움 네트워크에서 가장 표준이 되는 토큰. 대체 가능 토큰 가장 기본적인 상호 교환 가능한 토큰의 기능을 정의하고 있다.
# 토큰의 전송 및 잔액조회 토큰의 소유자 등을 관리하기 위한 메서즈와 이벤트가 정의 되어있는 토큰 탈중앙화된 금융 (Defi)등 사용

#soontoken {0x15165:100}

#ERC721
#ERC721 대체 불가능한 토큰을 나타내고
#ERC721 토큰은 각각의 고유한 특성을 가지고 있고 그 토큰의 소유권을 가질 수 있는것, 게임, 미술품, 부동산 등의 소유권을 나타낼 수 있다
# 토큰의 소유권 이전(판매 및 경매), 토큰의 메타데이터 조회 등의 메서드와 이벤트를 정의하고 있다
# {0xfadduisifd:0x15165}
```

```sh
npm i truffle
npx truffle init

npx create-react-app erc20

# 오픈 제플린(프레임워크)에서 제공하는 erc20, erc821 등 표준 토큰을 가지고 상속을 시켜서 토큰을 사용
npm init -y
npm install @openzeppelin/contracts

# 설치가 되면
# node_moudles 폴더 -> @openzeppenlin 안에 token 폴더에 토큰의 내용이 담겨있음

# truffle 로 배포해서 테스트
npx truffle compile
# 토큰의 양을 확인하려면 networkid 도 같은 식별자인데 디폴트 값이 설정될 수 있어 옵션으로 추가
npx ganache-cli --chain.chainId 1337 --chain.networkId 1337
npx truffle migrate

#remix
# 배포및 환경을 지원하는 웹 IDE

# remix 웹 페이지에서 workspance에 우리 잡업 내용 vscode를 가져와서 진행할 수 잇다
npm i -g @remix-project/remixd
remixd -s . --remix-ide https://remix.ethereum.org

# remix ide 페이지에 요청을 받아주길 대기 상태
# connect to localhost

# remix 세번재 탭에 컴파일 버전 확인하고.
```