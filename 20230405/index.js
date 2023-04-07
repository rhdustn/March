// 프로토 타입
// 자바스크립트의 객페는 프로트타입을 사ㅣㅇ속받는다
// 객체의 원형

//  object.prototype
// function Car(model, color,speed){
//     this.model = model
//     this.color = color
//     this.speed = speed
//     this.accel = function(){
//         this.speed -=10
//     }
// }
// let temp = new Car("벤츠", "흰색",200);
// let temp2 = new Car("모닝", "검정",200);

// console.log(temp);
// console.log(temp2);

// function Car(m,c,s){
//     this.model = m
//     this.color = c
//     this.speed = s
//     this.speedUp = function(){
//         this.speed +=10;
//         return this.speed;
//     }
// }
// let temp = new Car("마티즈", "레드",150)
// //nbattery 키 true  값 추가
// temp.battery = true;
// temp.speedUp = function(){
//     this.speed +=20;
//     return this.speed;
// }
// console.log(temp);
// temp.speedUp()
// console.log(temp)

// // 이런 방식은 객체에 새 속성을 추가할 수 있는데 
// // 원형에 추가는 할 수 없다

function Car(m,c,s){
    this.model = m
    this.color = c
    this.speed = s
    
}
// 프로트 타입의 정의 기본 형식
// 객체명.prototype.메서드 = funtion(){}
// 이 원형을 가진 객체들은 전부 프로트 타입으로 추가한 메소드를 사용할 수 있다
// 생성장에 의한 생성된 모든 객체는 생성자 함수의 모든 속섣과 메소드를 상ㅇ속을 박는다
// 각 객체의 상속된 속성과 메서드를 메모리에 저장해놓고
// 동일한 메서드는 메모리에 저장을 하지 않고 중복벙방을 피한다
// 생성자 함수에 메서드를 정의하지 않고 샐성ㅈ다 외부 병도의 메소드를 정의해서 사용하는 방법이 프로토 타입
// Car.prototype.speedUp = function(){
//     this.speed +=20;
//     return this.speed;
// }

// Car.prototype.speedDown = function(){
//     this.speed -=20;
//     return this.speed;
// }
// let temp = new Car("봉고", '검정',100)
// let temp2 = new Car('다미스',"검정", 100)
// //console.log(temp.speedUp());
// //console.log(temp.speedDown())

// temp.stop = function(){
//     this.speed = 0;
//     return this.speed;
// }
// console.log(temp)


Car.prototype.stop = function(){
    this.speed = 0;
    return this.speed;
}
// 생성자 함수로 만든 객체들에게 전부 메서드를 추가해 줄때4
// ㅡㅍ로트 타입으로 원형에 메서드를 추가해주자
console.log(temp.stop())

String.prototype.replaceOf  = function(){
    console.log(" 나는 프로토 타입으로 추가됐어")
}
// 문자열의 원현능 string 이고
console.log(
"가나다".replace("가","나")
)
