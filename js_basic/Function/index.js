// 함수 선언

// funcion 함수 이름(매개변수) {
    // 함수 본문 영역
// } 


// 함수 호출
// function a () {
//     let value = 100;
//     console.log(value)
// }
// a() // 100

// 전달할 매개변수가 있는 경우
// function calc (a, b) {
//     return a * b
// }
// const result = calc(100, 20)
// console.log(result); 

// 지역 변수
// 함수 안에서 선언된 변수로, 함수 안에서만 접근 가능하다
// function sayHello() {
//     let a  = 200; // 지역 변수
//     console.log(a) // 접근 가능
// }

// console.log(a) // 접근 불가

// let age = 25;
// let myName = "수호";

// function showMessage () {
//     myName = "이수호"; // 수정

//     let message = `안녕하세요 제 이름은 ${myName} 나이는 ${age}세 입니다`
//     alert(message);
// }
// alert(myName)

// showMessage();

// alert(myName)

// 실행 순서 
// 1. 수호
// 2. 안녕하세요 제 이름은 이수호 나이는 25세 입니다`
// 3. 이수호
// 설명하자면 먼저 전역 변수로 각각 age, myName을 선언하고
// 전역 변수 let myName = "수호" 이므로 수호 출력
// 함수 내부에서 myName은 새로 선언된 변수가 아닌, 재할당이다
// 따라서 전역 변수 값이 수정된다 "수호" -> "이수호
// 함수가 호출되기전에는 "수호" 값으로 유지
// 호출 되고나서는 수정된 값으로 출력

// 전역 변수
// 지역 변수와는 달리 접근할 수 있는 범위가 제한이 없음
// 하지만 변수 이름이 같은 경우가 발생하는 경우가 있음

// let age = 25;
// let myName = "수호";

// function showMessage () {
//     myName = "이수호";

//     let message = `안녕하세요 제 이름은 ${myName} +  나이는 ${age}세 입니다`
// }
// alert(myName)

// showMessage();

// alert(myName)

// function introduce(name, age, address) {
//     name = "수호";
//     age = 25;
//     address = "경기도 남양주시"
//     console.log(`안녕하세요 저는 ${name}입니다. 나이는 ${age}살이고, ${address}에서 거주하고 있습니다`)
// }

// introduce();


// function add(num1, num2) {
//     let result = num1 + num2
//     console.log(result)
// }

// add(1, 5)