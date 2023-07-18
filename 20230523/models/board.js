const Sequelize = require("sequelize")
class Board extends Sequelize.Model{
    static init(sequelize){
       return super.init({
            title : {
                type : Sequelize.STRING(30),
                allowNull : false
            },
            content : {
                type : Sequelize.STRING(200)
            },
            comment :{
                type : Sequelize.STRING(250)
            }
       },{
        sequelize,
        timestamps : true,
        modelName : "Board",
        tableName : "board",
        paranoid : false,
        charset : "utf8",
        collate : "utf8_general_ci"
       })
    }
    static associate(db){
        db.Board.belongsTo(db.User,{foreignKey : "user_id",targetKey : "id"})
    }
}
module.exports = Board