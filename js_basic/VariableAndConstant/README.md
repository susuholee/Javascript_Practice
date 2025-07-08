# 변수와 상수

## 변수 
> 정의 : 변할 수 있는 수


## 변수 목적
1. 값을 저장해두다가 나중에 필요할때 꺼내서 사용
2. 데이터를 유연하게 사용할 수 있다.
3. 값에 이름을 의미 부여

### 변수 선언
1. `var` : var 예약어를 사용하여 변수를 선언
> ES6이전에는 `var` 키워드를 사용했지만, ES6 문법이후에는 let, const, 예약어들이 등장하면서 대체 된다
> `var`는 호이스팅이 발생하고, `함수 스코프`를 가진다  
> this 바인딩 가능
> 재선언, 재할당 가능
```js
var test = "var 예약어 사용";
test = "변경";
console.log(test);


// 함수 스코프 예시
function testFn () {
    var a = 30; // var a 가 함수 스코프에 속함
    console.log(a);
}
testFn() // 함수 호출
console.log(a); // 함수 블록 밖에 있는 a는 Reference Error 발생 


// this 바인딩
var data = 231213;
console.log(window.data); // window 객체 안에 있는 data 속성이 있다
console.log(this.data); // 여기서 this 는 상위 객체를 가리켜서 바인딩한다
console.log(data);
```
2. `let` : `let` 예약어를 사용하여 변수 선언
> ES6에서 `let`, `const` 가 추가되어 var 대신 사용중이다.
> var에서는 `함수 스코프`를 가지기 때문에 함수 밖에서도 접근이 가능하여 변수 오염에 문제를 일으킴
> 또한 호이스팅 발생으로 변수 선언이 끌어올리는 현상이 나타난다

## var 에서 호이스팅
```js
console.log(a); // undefiend
var a = 12;

// 자바스크립트 엔진 내부 동작
var a; // 변수 선언을 끌어올림(호이스팅 현상)
console.log(a); // 초기화된 상태
a = 12 // 할당
```
### let 에서 호이스팅 
```js
console.log(x); // TDZ 발생, Reference Error
let x = "안녕하세요";

// 자바스크립트 엔진 내부 동작
let x; // 호이스팅 발생, 초기화는 X
console.log(x); // TDZ에서 접근할시 오류 발생
x = "안녕하세요"; // 할당
```
> 이 코드에서도 보면 `let` 에서도 `호이스팅`이 발생
> 변수 선언은 끌어올리지만 값을 초기화 하지않는다.
> 선언~초기화 사이(TDZ)에 진입하게 되는데
> 값이 초기화하지 않는 상태에서 접근하면 에러 발생

## 해결 방법
> 변수를 선언과 동시에 초기화를 하고, 난뒤 변수에 접근한다.
```js
let test = "자바스크립트 시작";
console.log(test);
```
### let `블록 스코프`
> let은 `{}` 블록 안에서만 변수에 접근할 수 있는 것이다.
```js
{
    let a = 200;
    console.log(a); // 200 출력
}
console.log(a); // ReferenceError가
```
> 코드를 보면 `{}` 블록 내부에 let a = 200; 가 선언되면서 블록 스코프 a 생성
> a는 블록 스코프에서만 유효하므로, 블록 밖에서는 존재하지 않음
> 블록 스코프에 선언된 a는 블록 밖에서 존재하지 않기 때문에 undefined가 아니라 ReferenceError가 발생

## let 재선언, 재할당
```js
// 재선언 불가
let a = 10; 
let a = "안녕";

// 재할당 가능
let a = 20;
a = "값을 변경합니다"
a = 200;
console.log(a);
```
### 다른 변수에 값을 복사 
```js
let say = "안녕하세요~ 나는 홍길동입니다";

let msg;

msg = say; // say변수에 값을 msg 변수에 저장

console.log(say); // 안녕하세요~ 나는 홍길동입니다
console.log(msg); // 안녕하세요~ 나는 홍길동입니다
```


3. const : `const` 예약어를 사용하여 선언
> 유일하게 var, let 말고 상수를 선언할때 사용
> `상수` : 값이 변하지 않는 수
> 한번 값을 할당하면 재할당 할 수 없다.
> 선언과 동시에 초기화해야한다. 
> 블록 스코프를 가진다
> 재선언 불가능, 재할당 불가능
> this 바인딩 불가능, 바인딩 하기 위해서는 함수 내에서 call, bind, apply 메서드를 사용해야함
> 해당 변수의 값이 변하지 않을때 사용해야함

## 재선언 코드
```js
const test = "우와";
const test = 23242; // 재선언 불가능
```

## 재할당 코드
```js
const a = 20; 
a = 30; // 재할당 X 오류 발생
console.log(a);
```



