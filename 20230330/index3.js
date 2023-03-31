// promise  객체
// 비동기 처리를 가능하게 해주는 객체

// nodejs 
// 비동기 처리를 할 때 promise 객체를 사용한다.
   
function testPromise(num){
    // new 키워드로 빈객체를 만들고
    // promise 객체를 생성
    // 전달하는 함수값에
    // resolve, reject 두가지 매개변수를 받는데
    // resolve() ㅎ마수고 처리가 완료되면 반환
    // result() 함수고 처리가 오류나면 반환
    return new Promise(function(res,rej){
        try {
            if(num >10) rej({data : "숫자큼"});
            // if의 중괄호가 없으면 바로 밑코드까지
            //console.log(num);
            // 데이터를 받아온다 가정을 하자.
            // 데이더를 가져오는 시잔이 좀 걸리는데 
            // 데이터를 다 가져오고 작업을 진행시켜야할 때
            setTimeout(function(){
                res(num);
            },num*1000);
        } catch (error) {
            rej(error);
            
        }
    })
}
// testPromise(5).then(function(data){
//     console.log(data)
//     // 데이터를 가져오고 처리할 구문을 여기에 작성하면 된다
//     // 데이터를 가지고 처리해야할 작업ㄴ
//     return testPromise(data);
//     // res를 실행하면 then()메소드가 실행되고
//     // rej를 실행하면 catch()메소드가 실행된다
// }).then(function(data){
//     // 성공
//     console.log(data)
// }).catch(function(err){
//     // 실패
//     console.log(err);
// })

// then이랑 catch를 안쓰면

// 같이써도 작업은 잘 돌아가는데 안좋은 버릇이니 절대로 같이 사용하지 말자
// 같이쓰면 promise 객체응 잘 모르는 것
// async await  구문

async function asyncFun(){
    // try-catch 로 작업의 오류응 례외상황을 잡으면서 작업하자
    try {
        //await 뒤에 
        let temp = await testPromise(11).catch((a)=>{ 
            return a;
        });
        console.log(temp)
        return temp;

        // 기다리고 promise 객테 res 나 rej 이 처리될떄까지
        console.log(temp);
        temp = await testPromise(temp);
        console.log(temp);
        //await + testPromise = promise 를 기자리고 reslove 겂을 반환한다
        //async await는 짝이다
        // 같이 붙어다닌다
    } catch (error) {
        
    }
}
asyncFun().then(function(data){
console.log(data)

}).catch((a)=>{
 console.log(a);
});