const {posts} = require('../models');

exports.ViewPostAll = async function(){
    try {
        const data = await posts.viewPostAll()
        return data
    } catch (error) {
        
    }
}
exports.SelectPost = async function(req,res){
    const { id } = req.params
    try {
        const data = await posts.selectPost(id)
        return data
    } catch (error) {
        console.log("SelectPost 에러남")
    }
}
exports.Insert = async function(req,res){
    const {title,content}=req.parmas
    try {
        await posts.insert(title,content)
    } catch (error) {
        console.log("Insert 에러남")
    }
}
exports.Delete = async function(req,res){
    const {id}=req.params
    try {
        await posts.delete(id)
    } catch (error) {
        console.log(" Delete에러남")
    }
}
exports.Update = async function(req,res){
        const {id}=req.params
        const {title,content}=req.body
        try {
            await posts.update(id,title,content)
        } catch (error) {
            console.log(" Update에러남")
        }
}