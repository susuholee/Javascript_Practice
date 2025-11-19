// 함수 선언하는 방법 3가지
// 1. 함수 선언식
// 2. 함수 표현식

// 함수 선언식(Function Declaration)
// 함수를 선언할때 기본적인 방법
// 함수를 선언하기 전에도 호출할 수 있다
// 호이스팅 발생


// function 함수이름(매개변수) {
//     함수 본문
// }

// 함수 표현식(Function Expression)
// 변수의 값을 할당하는 방식
// 익명함수가 사용된다

// const sayHi = function() {
//     alert("안녕하세요")
// }

// sayHi();


// 콜백 함수
// 나중에 호출하는 함수
// 다른 함수의 인자로 전달되어 적절한 시점에 인자로 전달된 콜백을 호출하는 즉,  대신 실행해주는 함수


// function information(name, age, callback) {
//     console.log(`안녕하세요 저는 ${name} ${age}세`);
//     callback();
// }

// function afterSay() {
//     console.log('라고 합니다. 나중에 호출되는 콜백 함수입니다')
// }

// information('이수호', 25, afterSay)

