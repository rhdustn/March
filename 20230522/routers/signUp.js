const router = require("express").Router();
const {signUp} = require("../controllers/singUpContoller")

router.get('/signUp',(req,res)=>{
    res.render('signUp');
})

router.post('/signUp',signUp);

module.exports = router