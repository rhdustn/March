// 빌드 폴더 안에 컴파일 된 Counter.json을 가져온다
const Baseball = artifacts.require("Baseball")

module.exports = (deployer)=>{
    // 1_deployer.deploy 메소드로
    // 가져온 json파일 내용으로 배포를 진행
    deployer.deploy(Baseball);
}