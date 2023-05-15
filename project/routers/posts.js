const express = require("express")

const router = express.Router();

const {ViewPostAll,SelectPost,Insert,Update,Delete} = require("../control/post")

router.get('/',async (req,res)=>{
    try {
        const data = await ViewPostAll(req,res);
        res.render('main',{data})
    } catch (error) {
        console.log("main 화면 오류")
    }
})
// 상세
router.get('/view/:id',async (req,res)=>{
    try {
        const data = await SelectPost(req,res)
        res.render('detail',{data});
    } catch (error) {
        console.log("게시글 상세페이지 에러")
    }
    })

// 추가
router.get('/insert',(req,res)=>{
    res.render("insert")
})
router.post('/insert',async (req,res)=>{
    try {
        await Insert(req,res)
        res.redirect("insert")
    } catch (error) {
        console.log("추가 화면 오류")
    }
})
// 제거
router.get("/delete/:id",async (req,res)=>{
    try {
        const data = await Delete(req,res)
        res.redirect("/posts")
    } catch (error) {
        
    }
})

// 수정
router.get("/edit/:id",async (req,res)=>{
   try {
    const data = await SelectPost(req,res)
    res.render('edit',{data});
} catch (error) {
    console.log("edit 에러남")
}
})
router.post('/edit/:id',async (req,res)=>{
    try {
        await Update(req,res);
        res.redirect("/posts")
    } catch (error) {
        console.log("edit화면 오류")
    }
})

module.exports = router;