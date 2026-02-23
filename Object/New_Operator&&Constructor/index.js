// 일반 함수 
// 문제 1. 요구사항
// add라는 함수를 만들어라.
// 숫자 두 개를 매개변수로 받는다.
// 두 수의 합을 반환한다.
// 함수 호출 후 결과를 출력하라.

function add(num1, num2) {
    return num1 + num2;
}

let result = add(20, 30);
console.log("결과값:",result);

// 생성자 함수
// Animal이라는 생성자 함수를 만들어라.
// 동물 이름(name)을 저장한다.
// new를 사용해서 객체를 하나 생성하라.
// 이름을 출력하라.

function Animal(name) {
    this.name = name;
}

let animal = new Animal("고양이");
console.log("이름:", animal.name);
