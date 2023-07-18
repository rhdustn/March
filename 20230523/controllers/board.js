const {User,Board} = require("../models")


// 글 전체 보기
exports.allBoard = async (req,res)=>{
    const board = await Board.findAll({
        include :[{model:User}]
    })
    const data = board.map((a)=>{
        console.log(a.dataValues.User.dataValues.name)
    return a.dataValues
    });
    res.render("allboard",{data:data})
}

exports.boardMain = async (req,res)=>{
    const {acc_decoded} =req;
    const user = await User.findOne({where:{name:acc_decoded.name}})
    res.render("main",{data : user})
}
// 글 작성하기
exports.createBoard = async (req,res)=>{
    const {acc_decoded}=req;
    const {title,content} = req.body;
    await Board.create({
        title : title,
        content : content,
        user_id : acc_decoded.id
    })
    res.redirect(`/board/view/${acc_decoded.id}`);
}

// 글을 볼수 있는
exports.boardView = (req,res)=>{
    User.findOne(
    {
        where : {id:req.params.id},
        include :[{model:Board}]
    }
    // map : 배열의 요소를 입맛대로 변환해서 ** 반환 **
    ).then((e)=>{
        e.dataValues.Boards = e.dataValues.Boards.map((i)=>i.dataValues);
        const Board = e.dataValues;
        res.render("board",{data:Board})
    })
}

// 글 수정하기
exports.updateBoard = async (req,res)=>{
    const {acc_decoded}=req;
    const{title,content} =req.body;
    const {id} = req.params
    await Board.update({title,content},{where:{id}})
    res.redirect(`/board/view/${acc_decoded.id}`)
    
}

// 글 삭제
exports.deleteBoard = async(req,res)=>{
    await Board.destroy({
        where:{id : req.params.id}
    })
    res.redirect('/board')
}
// 글 디테일
exports.detailBoard = async(req,res)=>{
    const {id} = req.params;
    try {
        const board = await Board.findOne({
            where: { id },
        })
        const user = await User.findOne({
            where: {id:board.dataValues.user_id}
        })

        // const data = board.map((a) => {
        //     return a.dataValues;`
        // });
        res.render("detail", { data: board,user:user});
        
    } catch (error) {
        console.log(error)
    }
}