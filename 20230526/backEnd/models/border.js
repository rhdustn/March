const Sequelize = require("sequelize")

class Border extends Sequelize.Model{
    static init(seq) {
        return super.init(
            {
            title :{
               type: Sequelize.STRING(20),
            },
            content :{
                type : Sequelize.STRING(250)
            },
            comment :{
                type : Sequelize.TEXT
            },
            writer: { type: Sequelize.STRING(20),
                 allowNull: false },
        },{
            sequelize : seq,
            timestamps : true,
            underscored : false,
            modelName : "Border",
            tableName : "borders",
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
    static associate(db) {
        db.Border.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
      }
}
module.exports=Border;