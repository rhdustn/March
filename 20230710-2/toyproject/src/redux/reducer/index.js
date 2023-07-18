// 리듀서 함수
// 메뉴판

// 초기상태가 필요한데
// 카운트 값 하나 초기로 설정
// 시작은 카운트
let info ={
    count : 0,
    isLogin : false,
    
items :[
    {id : 1, name :"아이스아메리카노", price:"1500"},
    {id : 2, name :"아이스 라떼", price:"3000"},
    {id : 3, name :"바닐라 라떼", price:"3500"}
],

myitems:[

]
}

// 주문받으면 action음식 이름
function reducer(state=info, action){
    
    console.log(action)
    switch (action.type) {
        case "BUY":
            let itemname;
                for (let i = 0; i < info.items.length; i++) {
                    if(info.items[i].id==action.payload){
                        itemname=info.items[i].name
                        break
                    }
                }
console.log(itemname)
            return{...state, myitems: [...state.myitems,itemname ]};

        case "ADD":
            return{...state,count : state.count +1};
        case "REMOVE":
            
           return{...state,count : state.count -1};
        case "LOGIN" :
           
            return{...state,isLogin : action.payload}
            case "LOGOUT" : 
            return{...state,isLogin : action.payload}
        default:
            return{...state};
    }
}


export default reducer