const router = require("express").Router()
const {isLogin} = require("../middleware/login")
const {borderMain,borderView,createBorder,updateBorder,deleteBorder}=require("../controllers/borderContoller")

router.get('/',isLogin,borderMain);

router.get('/view/:id',isLogin, borderView);

router.post('/create_border',isLogin,createBorder)

router.post('/view_update/:id',isLogin,updateBorder)

router.get('/del/:id',isLogin,deleteBorder)
module.exports = router