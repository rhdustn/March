const {Login,ViewUser,UploadUser} = require("../contollers/loginContoller")
const {isLogin} = require("../middleware/loginMilldeware")

const router = require("express").Router();

router.post("/",Login);
// 현재 로그인한 유저의 정보
router.get('/view',isLogin,ViewUser)


module.exports = router