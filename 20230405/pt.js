let range = {
    from :1,
    to:5
};
range[Symbol.inter] = function(){
    return{
        current : this.from,
        last : this.to,

        next(){
            if(this.current<=this.last){
                return{done: false, value:thi.current++};
            }else{
                return{done:ture}
            }
        }
    }
}
let result = range.next();
console.log(result.done, result.value)