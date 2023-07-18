const Sequelize = require("sequelize");

class User extends Sequelize.Model{
    static init(seq){
        return super.init(
            {
                name :{type : Sequelize.STRING(20),allowNull : false},
                user_id :{type :Sequelize.STRING(30),allowNull:true},
                user_pw : {type : Sequelize.STRING(1000),allowNull:true},
                img : {type : Sequelize.STRING}
        },{
            sequelize:seq,
            timestamps:true,
            underscored : false,
            modelName :"User",
            tableName: "users",
            charset : "utf8",
            collate : "utf8_general_ci",
        })
    }
    // static associatie(db){
    //     // db.User.hasMany(db.Post,{foreignKey : "userId",sourceKey : "id"})
    // }
}
module.exports = User