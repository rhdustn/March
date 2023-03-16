// let y = {
//     map : function(callBack){
//         if(callBack.length == 1)
//         {
//             let a = 2;
//             console.log("나는 map 함수야 매개변수를 한개받았어" + a +"결과야")
//             callBack(a);
//         }else if(callBack.length==2);
//             let a= 2;
//             let b = 3;
//             console.log("나는 map 함수야 매개변수를 두개받았어")
//             callBack(a,b);
//     }
// }

// y.map(function(a, b){
//     console.log("나는 콜백 함수야 전달받은 매개변수는", a* b ,"야")
// });

// function test1(callBack){
//     if(callBack.length == 1){
//         let gg = "2단"
//     }else if(callBack.length == 2){
   
//     }else if(callBack.length == 3){
        
//     }else if(callBack.length == 4){
        

//     }
// }
function myFunction(){
    return this;
}
console.log(myFunction());

var num = 0;
function addNum(){
    this.num =100;
    num++;
    console.log(num); // 101
  console.log(window.num); // 101
  console.log(num === window.num); // true
}
 
// addNum();
console.log(this);
//기본적으로 this=window
let obj={
a:function () {
    let b=()=> {
        console.log(this);
    }
    b();
}
}
obj.a();
