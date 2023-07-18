const config = {
    dev :{
        username : process.env.DARABASE_USERNAME,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE_NAME,
        host : process.env.DATABASE_HOST,// 나중에 배포를 하게 된다면 데이터 베이스 주소를 입력하 예정
        dialect : "mysql"
    }
}

module.exports = config;