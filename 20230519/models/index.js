const Sequelize = require("sequelize");
const config = require("./config");
const User = require("./users")
const Post = require("./post")

const _sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

// 내보내줄 빈 객체
const db = {};
db.sequelize = _sequelize;
db.User = User;
db.Post = Post;

// 테이블을 초기화하는 부분
User.init(_sequelize)

Post.init(_sequelize);
User.associate(db);
Post.associate(db);

// 단축키
//crl +r: workbench erd 확인
module.exports = db