let order=999999;
function solution(order) {
    let answer = 0;
    let index = order.toString();
    let str = index.split("")
    let strLength=str.length;
    for(let i =0; i<strLength;i++){
 let pop = str.pop()
   
  if(pop==3||pop==6||pop==9){
   answer++ 
  }
    }
   return answer
  }
  console.log(solution(order))
  