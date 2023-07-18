const Sequelize = require("sequelize");
const config = require("../config");
const User = require("./user");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);
const db ={}

db.sequelize = sequelize
db.User = User
User.init(sequelize);

// User.associatie(db);
module.exports = db
