const router = require("express").Router();
const {isLogin} = require("../middleware/login")
const {allBoard,boardMain,boardView,createBoard,updateBoard,deleteBoard,detailBoard} = require("../controllers/board")

router.get('/allboard',isLogin,allBoard)

router.get('/',isLogin,boardMain)

router.get('/view/:id',isLogin,boardView)

router.post('/create_board',isLogin,createBoard)

router.post('/view_update/:id',isLogin,updateBoard)

router.get('/del/:id',isLogin,deleteBoard)

router.get('/detail/:id',isLogin,detailBoard)

module.exports = router
