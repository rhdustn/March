const {User} = require("../models");
// 로그인 bcrypt jsonwebtoken
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.Login = async (req,res)=>{
    try {
        const {user_id, user_pw} = req.body;
        console.log(req.body)
        const user = await User.findOne({where:{user_id}});
        if(user ==null){
            return res.send("가입 안한 아이디입니다")
        }
        const same = bcrypt.compareSync(user_pw, user.user_pw)
        const {name,age,id,userId}=user
        if(same){
            let token = jwt.sign({
                name,
                age,
                id,
                userId
            },
            process.env.ACCESS_TOKEN_KEY,
            {
                expiresIn : "20m"
            });
            req.session.access_token = token;
            // / : 여기서 경로는 백엔드의 도메인 경로 루트
            // 프론트의 경로를 작성해준다
            // 이렇게 리다이렉트를 할께 아니면 프론트에서 응답받은 값으로 조건 분기 처리해서 페이지를 전환 시켜주면 된다
            // return res.send("로그인 완료");

            // 이런경우는 배포된 프론트의 경로
            return res.redirect("http://127.0.0.1:5500/frontEnd/main.html")
        }else{
            return res.send("비밀번호 틀림")
        }
    } catch (error) {
        console.log(error)
    }
    

}

exports.viewUser = async (req,res)=>{
    const {acc_decoded} = req

    console.log(acc_decoded)
    const user= await User.findOne({
        where:{name : acc_decoded.name}
    }) 
    // json 형태로 데이터 응답
    res.json(user)
}

exports.nameChange = async(req,res)=>{
    try {
        const {acc_decoded}=req;
        const {name}=req.body
        await User.update({name},{where : {id : acc_decoded.id}})
        await Border.update({wirter:{user_id:acc_decoded.id}})
        res.redirect("http://127.0.0.1:5500/20230526/mypage.html");
    } catch (error) {
        console.log(error)
    }
}

exports. idChange = async (req, res) => {
    try {
      const { acc_decoded } = req;
      const { user_id } = req.body;
      await User.update({ user_id }, { where: { id: acc_decoded.id } });
      res.redirect("http://127.0.0.1:5500/20230526/mypage.html");
    } catch (error) {
      console.log(error);
    }
  };
  