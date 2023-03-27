// 클릭의 시작 위치를 가지고 있고 끝나면 끝난 좌표와 비교해서 
// 오른쪽으로 스와이프 죈건지
// 왼쪽으로 스와이프 된건지 확인을 하고
// 인덱스를 기준으로 움직임을 제어해보자

// 마우스 시작 클릭 지점 X좌쵸
let _start;
// 진행중인 인젝스
let _index = 0;
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
    console.log("클릭 시작");
    // 클릭했을때 x좌표 
    console.log(e);
    //클릭한 x의 좌표
    //e.clientX
    _start = e.clientX;
    console.log(_start)
})

_swiper.addEventListener("mouseup", function (e) {
    console.log(e.clientX - _start)
    if (e.clientX - _start <= -50) {
        console.log("끝 좌표가 더 작아")
       
        // 0 1 2 3 4 5
            _index++;  
        swiperMove();
        if (_index == 5) {
            setTimeout(function () {
                _swiperContent.style.transition = '0s';
                _swiperContent.style.left = '-500px';
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
                _swiperContent.style.left = '-2000px';
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
            _swiperContent.style.left = '-2000px';
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
            _swiperContent.style.left = '-500px';
            _index =1;
            
        }, 1000);
        setTimeout(function () {
        _swiperContent.style.transition = '1s';
        }, 1100);

    }

})


// 먼저 4일때(index가 맨 끝일 때!!)  index를 1로 바꿔줌으로서 옮길 수 있겠네

//4 1 2 3 4 1



