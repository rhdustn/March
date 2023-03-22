let objArr = [];

function main(name,age, sex, content, glasses){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.content = content;
    this.glasses = glasses;
}
function Btn(){
    console.log("내용 등록");
    addArr();
    render();
}

function addArr(){
    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    console.log(inputs[0],value);
    console.log(inputs[1],value);
    console.log(inputs[2],value);
    console.log(inputs[3],value);
    console.log(inputs[4],value);
}
let obj = new main(inputs[0],value, inputs[1],value, inputs[2],value, inputs[3],value, inputs[4],value)
objArr.push(obj);
console.log(objArr);

function render(){
    let text = "";
    objArr.forEach(function(i){
        text += `<li> 이름 : ${i.name} 나이 : ${i.age} 성별 : ${i.sex}  안경 : ${i.glasses}`
    });
    console.log(text);
    document.querySelector('#tables').innerHTML = text;
}
