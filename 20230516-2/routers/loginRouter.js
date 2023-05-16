const router = require("express").Router();
const {LogIn} = require('../controllers/usersController')

router.get('/',(req,res)=>{
    res.render('login')
})
router.post('/',LogIn)


module.exports = router