const router = require("express").Router()
const {isLogin} = require("../middleware/login")
const {userAdmin, changeAdmin} = require("../controllers/admin")

router.get('/',async (req,res)=>{
    const data=await userAdmin(req,res);
    // mysql에서 
    res.render("admin",{data:data})

})

router.post('/:id',changeAdmin)



module.exports = router;