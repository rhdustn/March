const router = require("express").Router();
const {signUp} = require("../controllers/signUp")

router.get('/',(req,res)=>{
    res.render('signUp');
})
router.post('/',signUp);

module.exports = router