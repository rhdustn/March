const InsertCollection = require("../models/insert")

exports.InSert = async function(req,res){
    const {title,content}=req.body
    try {
        const data = await InsertCollection.insert(title,content)
    } catch (error) {
        
    }
}