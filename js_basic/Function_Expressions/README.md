## 함수를 선언하는 방식
> 함수를 선언하는 방식은 총 3가지
1. 함수 선언식(Function Declaration)
2. 함수 표현식(Function Expression)
3. 화살표 함수(Arrow Function)

### 함수 선언식(Function Declaration)
```js
function 함수이름(매개변수) {
    함수 본문
}
```

### 함수 표현식(Function Expression)
> 변수에 값을 할당하는 것처럼 함수를 표현
```js
const sayHi = function() {
    alert("안녕하세요")
}

sayHi();
```

## 콜백함수
> 다른 함수의 인자로 전달되어 적절한 시점에 대신 실행해주는 함수
> 즉, 쉽게 설명하면 다른 함수의 인자(매개변수)로 전달되어 적절한 시점에 인자로 전달된 콜백을 호출하는 함수

```js
function information(name, age, callback) {
    console.log(`안녕하세요 저는 ${name} ${age}세`);
}

function afterSay() {
    console.log('라고 합니다. 나중에 호출되는 콜백 함수입니다')
}

information('이수호', 25, aftersay)
```