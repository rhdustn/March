const router = require("express").Router()
const {isLogin} = require("../middleware/loginMiddleware")
const {createBorder,mypageBorder,updateBorder,viewBorder} = require("../controllers/borderController")


router.get('/',isLogin,viewBorder)

router.post('/',isLogin,createBorder)

module.exports = router