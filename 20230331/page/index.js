
window.onscroll = function(){
let posY= document.querySelector('.milky').getBoundingClientRect().top ;
    console.log('스크롤 됨')
    console.log(posY);
    if(posY <0 ){
        document.querySelector('.header').classList.add("isActive");
    }else{
        document.querySelector('.header').classList.remove("isActive");
    }
    let eduY = document.querySelector('.pic').getBoundingClientRect().top;
    if( eduY <0){
        document.querySelectorAll('.content-box2')[0].classList.add("isActive")
        document.querySelectorAll('.content-box2')[1].classList.add("isActive")
        document.querySelectorAll('.content-box2')[2].classList.add("isActive")
    }
}


let _start;
// 진행중인 인덱스
let _index = 1;
let _move = false
let _moveStart;

let _swiper = document.querySelector('.swiper');
let _swiperContent = document.querySelector(".swiper-content");
let { length } = document.querySelectorAll('.swiper-item');
let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");

console.log(length);

//getComputedStyle 적용된 스타일의 값을 가져올 수 있다.
// 적용된 스타일을 가져올 태그를 매개변수로 전달
let _swiperWidth = parseInt(getComputedStyle(_swiper).width);
console.log(_swiperWidth);


_swiper.addEventListener("mousedown", function(e) {
    _move = true;
    _moveStart = e.clientX;
    _start = e.clientX;
})

_swiper.addEventListener("mouseup", function (e) {
    console.log(e.clientX - _start)
    if (e.clientX - _start <= -50) {
       
        // 0 1 2 3 4 5
            _index++;  
        swiperMove();
        if (_index == 5) {
            setTimeout(function () {
                _swiperContent.style.transition = '0s';
                _swiperContent.style.left = '-1200px';
                _index =1;
                
            }, 1000);
            setTimeout(function () {
            _swiperContent.style.transition = '1s';
            }, 1100);
    
    
        }
    } else if (e.clientX - _start >= 50) {
        console.log("끝 좌표가 더 커");
            _index--;1
        swiperMove();


        if (_index == 0) {
            setTimeout(function () {
                _swiperContent.style.transition = '0s';
                _swiperContent.style.left = '-4800px';
                _index =4;
                
            }, 1000);
            setTimeout(function () {
            _swiperContent.style.transition = '1s';
            }, 1100);
    
        }

    }
})

// 인덱스를 기준으로 움직임
function swiperMove() {
    _swiperContent.style.left = -(_index * _swiperWidth) + "px";
}


_prev.addEventListener('click', function () {
    _index--;

    swiperMove()
    if (_index == 0) {
        setTimeout(function () {
            _swiperContent.style.transition = '0s';
            _swiperContent.style.left = '-4800px';
            _index =4;
            
        }, 1000);
        setTimeout(function () {
        _swiperContent.style.transition = '1s';
        }, 1100);


    }

})
_next.addEventListener('click', function () {
    _index++;

    swiperMove()
    if (_index == 5) {
        setTimeout(function () {
            _swiperContent.style.transition = '0s';
            _swiperContent.style.left = '-1200px';
            _index =1;
            
        }, 1000);
        setTimeout(function () {
        _swiperContent.style.transition = '1s';
        }, 1100);

    }

})

//처음 시작 인덱스==0 =>4
//처음 인덱스 ==1 =>1