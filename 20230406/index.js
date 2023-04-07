// 이터러블 이터레이터


// Set, Map
// Set 은 배열에 중복되지 낳은 값을 저장할 수 있다.
// 중복되지 않은 유일한 값들
// 배열에는 중복값을 저장할 수 있는데 set은 중복이 안되는 값을 저장할 수 있다
// 배열은 요소에 순서에 의미가 있는데 set은 없다
// 배열은 인젝스로 접근을 하는데 set은 접근이 안된다

// Set : ES6  값으로만 이루어져있거 중복값은 허용하지 않는다.

// Set 

const s = new Set();
// 요소를 추가하는 방법

// 메서드 이용
s.add('one');
s.add('one');
// 중복값은 허용하지 않는다.
s.add('two');
s.add('three');
console.log(s);

const arr = [1,2,3,4,5];
// 생성단계에서 생성자함수에 전달 배열을 
const ss = new Set(arr);
console.log(ss);

// 값을 가지고 있는지 확인하는 메소드
console.log

//요소를 제거하는 메소드
// ss.delete(2);
// console.log(ss);

// 값을 재고 모든 값을 제거하는 메소드
// ss.clear();
// console.log(ss);

// foreach 이터러블 반복자
ss.forEach(function(i){
    console.log(i);
})

// SetIterator 객체를 반환
// 이터러블에 이터레이터를 반환 시켜준다
const temp = ss.entries();
console.log(temp.next().value);


// Map 키와 value를 저장하는데
// 키값을 객체로도 할 수 있다.

// Map : ES6ㅂㅌ 추가됬다. 키와 벨류를 한쌍으로 저장하고
// 중봊괸 키값을 허용하지 않는다
// iterartor를 통해 Map  객체 내부를 순회할 수 있다.

//Map

const map = new Map();

// 값을 추가
//Map 은 값을 추가할 떄 키와 같이 한쌍으로 추가를 해줘야 한다

// set 메소드를 통해 키와 값을 저장
// 중복되는 키를 허용하지 않는다
map.set("one",1);
map.set("one",2);
map.set("one",3);
// one 키에 값에 마지막으로 값을 저장한 2가 뜸
map.set("two",2);
console.log(map);

// 키를 왜 지정하는가 : 키로 저장된 값을 호출하기 위해

// map은 get 이라는 메소드로 값을 호출할 수 있다
console.log(map.get("one"))
console.log(map.get("two"))

// 값을 저장하면 삭제방법
// delete 메소드는 삭제할 해당 키값을 매개변수로 전달
// map.delete("one")
// console.log(map);

// map의 사이즈 확인 map에 저장된 요소가 몇개인지?
// map에 저장된 요소의 갯수를 확인할 수 있다.
console.log(map.size);

// map에 저장된 키값들을 전부 반환해주는 메소드
const keys = map.keys();
console.log(keys);

// map 에 저장된 벨류들을 반환해주는 메소드
const values = map.values();
console.log(values);

// entries() : [키 : 값]형태의 정보들을 모아서 MapIterarior 객체로 반환.
const iter = map.entries();
console.log(iter);

// console.log(iter.next().value);

// 키 정보만 출력 시키게 forof 문으로 작성

for (const iterator of keys) {
    // 이터레이터 요소가 끝날떄 까지 반복하면서 요소를 보여준다
    console.log(iterator);
}

// 값만 보여주자
for (const iterator of values) {
    console.log(iterator);
}

// 키랑 ㄱ밧을 다 출력
for (const[key,value] of iter) {
    console.log(`키는 ${key} 값은 ${value}이다`)
}

// 키와 값을 호출 
map.forEach(function(value,key){
    console.log(`키는 ${key} 값은 ${value}이다`)
});