let num = 5
function testpromise(text,index){
    return new Promise(function(reslove, reject){
        try {
            if(text.length>10)reject({data : "123"});
            setTimeout(function(){
                reslove(text+index)
            },text.length*5)
        } catch (error) {
            reject(error);
        }
    })
}
testpromise("hello",num).then(function(data){
    console.log(data)
    return testpromise(data);
}).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})