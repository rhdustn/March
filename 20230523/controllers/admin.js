// const {admin} = require("../models/admin")
const {User} = require("../models")
// 유저 목록을 알 수 있는거
exports.userAdmin = async (req,res)=>{
    const users = await User.findAll({        
        where :{grade:0}                                                                                                                                                                                   
    })
    console.log(users)
    const data = users.map((a)=>{
     return a.dataValues
     });
    // 여기서 유저 목록 반환하고 
    return data;
}

exports.changeAdmin = async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    await User.update({grade:1},{where:{id}})
    res.redirect("/admin")
   
}


// 승인 거절 하는 버튼 