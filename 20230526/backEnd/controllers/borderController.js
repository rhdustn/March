const {Border, User} = require("../models");

// 글 보기

let borderId;
exports.viewBorder = async(req,res)=>{
    try {
        const data = await Border.findAll({include:[{model:User}]});
        res.json(data)
    } catch (error) {
        console.log(".viewBorder에서 오류남")
        console.log(error)
    }
}

// exports.viewBorder = async (req,res)=>{
//     const {acc_decoded} =req
//     const {title,content} = req.body
//     const border= await Border.findAll({
//         where:{}
//     }) 
//     // json 형태로 데이터 응답
//     res.json(border)
// }

// 글 등록
exports.createBorder = async(req,res)=>{
   try {
    const {acc_decoded}=req;
    const {title,content} = req.body;
    await Border.create({
        title : title,
        content : content,
        user_id : acc_decoded.id
    })
    res.redirect("http://127.0.0.1:5500/frontEnd/main.html")
   } catch (error) {
    console.log("createBorder에서 오류남")
        console.log(error)
   }
}

// 전체글 보기
exports.allborder = async(req,res)=>{
    try {
        const data = await Border.findAll();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

// 수정 ㅠㅔ이지
exports.updateborder = async(req,res)=>{
    try {
        const {title,content}=req.body;
        const {id} =params
        res.redirect("");
    } catch (error) {
        console.log(error)
    }
}
// 삭제
exports.deleteborder = async(req,res)=>{
    try {
        const {id} = req.params
        await Border.destroy({where:{id}})
        res.redirect("http://127.0.0.1:5500/20230526/border.html");
    } catch (error) {
        
    }
}

exports.toUpdatePage = async (req, res) => {
    try {
      const { id } = req.params;
      borderId = id;
      res.redirect("http://127.0.0.1:5500/20230526/update.html");
    } catch (error) {
      console.log(error);
    }
  };