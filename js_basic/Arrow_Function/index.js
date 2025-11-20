// 화살표 함수
// ES6 이후 등장한 새로운 함수 표현식
// 기존 함수 선언식보다 간결하게 사용할 수 있음
// this 바인딩을 해결해준다
// this가 바깥 것 그대로 유지됨(새로운 this를 만들지 않는다)
// 그래서 콜백 함수 안에서 this가 갑자기 바뀌지 않는 장점이 있음

const sayHello = (address) => {
    console.log(`안녕하세요 저는 ${address}에 사는 수호입니다`)
}
sayHello("경기도");

// 화살표 함수로 변경하기
// 함수 표현식을 사용해 만든 아래 함수를 화살표 함수로 바꿔보세요.
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  () => { alert("동의하셨습니다."); },
  () => { alert("취소 버튼을 누르셨습니다."); }
);

// 문제 1.

// 다음 코드를 화살표 함수로 바꿔라.

function double(n) {
  return n * 2;
}

const double = (n) =>  n * 2;

// 문제 2.

// 매개변수 name을 받아
// "안녕하세요 name님" 을 출력하는 화살표 함수 greet를 만들어라.

const greet = (name) => {
    console.log(`안녕하세요 ${name}님`)
}
greet("수호")

// 문제 3.

// 매개변수 없이 2025를 반환하는 화살표 함수 getYear를 만들어라.

const getYear = () => 2025;

// 문제 4.

// 다음 코드를 화살표 함수로 바꾸시오.

// const add = function(a, b) {
//   return a + b;
// };

const add = (a,b) => a + b;