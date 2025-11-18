## 함수(Function)
> 기능을 동작하기 위한 구성요소
> alert, prompt, confirm 내장함수도 포함

### 함수 선언 
> 함수를 선언하는 방법은 `function` 이라는 예약어를 사용
> 함수 본문에는 조건문, 반복문, 연산 로직, 다른 함수 호출, 값 반환 등등 함수의 기능을 정의합니다
```js
function 함수이름(매개변수1, 매개변수2, ...매개변수N){
    // 함수 본문
}
```
### 함수 호출
> 함수를 선언한 뒤 실행하는 것을 의미
> 함수를 호출하는 방법
> 호출할 함수 이름  + 소괄호
```js
function a () {
    let value = 100;
    console.log(value)
}
a() // 100

// 전달할 매개변수가 있는 경우
function calc (a, b) {
    return a * b
}
const result = calc(100, 20)
console.log(result); 
```


### 지역 변수 (Local Variable)
> 함수 안에서 선언된 변수
> 함수 안에서만 접근할 수 있다, 즉 호출할 수 있다
```js
function sayHello() {
    let a  = 200; // 지역 변수
    console.log(a) // 접근 가능
}

console.log(a) // 접근 불가
```

### 전역 변수 (Global Variable)
> 함수 밖에서 선언된 변수
> 지역 변수와는 달리 접근할 수 있는 범위가 제한이 없다
> 하지만 변수 이름이 겹치는 경우가 발생
```js
let age = 25;
let myName = "수호";

function showMessage () {
    myName = "이수호";

    let message = `안녕하세요 제 이름은 ${myName} +  나이는 ${age}세 입니다`
}
alert(myName)

showMessage();

alert(myName)
```
### 매개변수(Parameter)
> 함수를 선언할때 입력값을 받을 변수
> 매개변수는 여러개 받을 수 있다
> 인자로 전달받은 값을 복사해서 사용하는 지역변수 

```js
function introduce(name, age, address) {
    name = "수호";
    age = 25;
    address = "경기도 남양주시"
    console.log(`안녕하세요 저는 ${name}입니다. 나이는 ${age}살이고, ${address}에서 거주하고 있습니다`)
}
introduce();
```

### 인수(argument)
> 함수를 호출할때 실제로 매개변수에 전달되는 값
```js
function add(num1, num2) {
    let result = num1 + num2
    console.log(result)
}

add(1, 5)
```

### 요약
> 함수 선언 시 매개변수를 나열하게 되고, 함수를 호출할 땐 인수를 전달하여 호출