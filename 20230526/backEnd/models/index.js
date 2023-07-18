const Sequelize = require("sequelize");
const config = require("../config")
const User = require('./users')
const Border = require('./border')

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db ={};

db.sequelize = sequelize
db.User = User
db.Border = Border

// 테이블 초기화
User.init(sequelize)
Border.init(sequelize)

module.exports = db