const {userInit,userInsert,userList,userSelect,userPwUpdate,userRefresh,userDelete} = require("./usersModel");

userInit();

// async function test(){
//     userDelete("aaa,bbb")
// }
// test()
module.exports = {userInsert,userList,userSelect,userPwUpdate,userRefresh,userDelete}