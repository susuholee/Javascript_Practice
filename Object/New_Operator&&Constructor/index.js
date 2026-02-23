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

// 문제 2. 
// User라는 생성자 함수를 만들어라.
// 사용자 이름(username)과 나이(age)를 저장한다.
// introduce라는 메서드를 추가한다.
// 실행하면 아래처럼 출력되어야 한다.
// 안녕하세요, 저는 철수이고 20살입니다.
// new를 사용해서 객체를 하나 생성하고
// introduce()를 실행하라.

// 조건
// 반드시 생성자 함수로 만들 것
// new 사용할 것
// this 사용할 것

function User(username, age) {
    this.username = username;
    this.age = age;    
    this.introduce = function() {
        console.log(`안녕하세요 저는 ${this.username}이고 ${this.age}살입니다.`)
    } 
}

let user = new User('철수', 20);
user.introduce();