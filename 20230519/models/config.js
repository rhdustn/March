const config = {
    dev : {
        username : process.env.USERNAMES,
        password : process.env.PASSWORDS,
        database : process.env.DATABASES,
        host :  process.env.HOSTS,
        // dialect 사용하는 데이터 베이스
        dialect : "mysql"
    }
}

module.exports = config;