const {usersInit,userSelect,userInsert} = require("./usersModels")

usersInit();

module.exports  = {userInsert,userSelect}