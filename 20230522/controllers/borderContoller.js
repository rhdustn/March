const {User,Post} = require("../models")

exports.borderMain = async(req,res)=>{
    // 해당 유저의 마이페이지
    const {acc_decoded}=req;
    const user = await User.findOne({where : {name : acc_decoded.name}})
    res.render("main",{data : user});
}

exports.createBorder = async (req,res)=>{
    const {acc_decoded} = req;
    const {user_post} =req.body;
    //Post table에 글 추가
    await Post.create({
        msg : user_post,
        user_id : acc_decoded.id

    });
    // 해당 유저가 작성한 글을 볼 수 있는 페이지로 이동
    res.redirect(`/border/view/${acc_decoded.id}`)
}

exports.borderView = (req,res)=>{
    User.findOne(
        {
        where : {id : req.params.id},
        include :[{model:Post}]
    }
    ).then((e)=>{
        //회살표 함수는 {} 괄호가 빠지면 바로 반환시킨다, return문 생략 가능
        e.dataValues.Posts= e.dataValues.Posts.map((i)=>i.dataValues);
        const Post = e.dataValues;
        res.render("border",{data:Post})
    })
}

exports.updateBorder = async (req,res)=>{
    const {acc_decoded}=req;
    const {msg} =req.body;
    const {id}=req.params;
    // 수정 메소드 사용
    // update메서드 수정힐때 사용할 메소드
    // 첫번째 매개변수는 객체오 수정할 값
    // 두번째 배개변수는 객체로 조건 수정할 내용을 찾아서
    await Post.update({msg},{where : {id}})
    res.redirect(`/border/view/${acc_decoded.id}`)
}

exports.deleteBorder = async (req,res)=>{
    // 삭제메소드 사용
    await Post.destroy({
        where : {id : req.params.id}
    });
    res.redirect('/border')
}