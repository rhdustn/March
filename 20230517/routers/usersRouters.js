const router = require("express").Router()
const {SignUp, LogIn, verifyLogin,BorderInsert,BoderSeclect, DetailBoard,UpDate,Delete} = require("../controllers/usersController")

router.get('/',(req,res)=>{
    res.render('signUp')
})
router.post('/signUp',SignUp)

router.get('/signUpErr',(req,메롱)=>{
    메롱.render("signUpErr")
})

router.get('/logIn',(req,res)=>{
    res.render("logIn") 
})
router.post('/logIn',LogIn)

router.get('/main', verifyLogin, async(req,res)=>{
    const {data} = await BoderSeclect()
    console.log("여기 data")
    console.log(data)
    const {userdata} = await BoderSeclect()
    res.render('main',{data,userdata})
})

router.get('/insert',(req,res)=>{
    res.render('insert')
})

router.post("/insert",BorderInsert)

router.get('/detail/:id',async(req,res)=>{
    const data = await DetailBoard(req,res)
    res.render('detail',{data})
})

router.get('/edit/:id',async(req,res)=>{
    const data = await DetailBoard(req,res)
    res.render('edit',{data})
})

router.post('/edit/:id',UpDate)

router.get("/delete/:id",async(req,res)=>{
    await Delete(req,res)

})

module.exports = router