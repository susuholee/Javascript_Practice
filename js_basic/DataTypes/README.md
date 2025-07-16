### DataType(자료형) 원시 타입과 참조 타입

## 자료형
> `자료형`: 값의 종류와 형태를 나타내면 변수에 저장할 수 있는 데이터의 타입을 뜻한다

## 자료형의 종류 
1. 원시 타입
2. 참조 타입

## 원시 타입
> `원시 타입`: 값을 저장할때 변수에 저장한 값 그대로 저장되며, 값을 복사할시 그대로 복사, `불변성`을 가지고 있다.

`불변성` : 한번 할당한 원시 값은 변하지 않는 성질을 뜻한다

## 원시 타입 종류
1. Number : 숫자형 데이터 타입
2. String : 문자열 데이터 타입
3. Boolean : 논리형 데이터 타입
4. undefined : 변수에 값이 할당하지 않는 상태
5. null : 값이 없음을 명시적으로 나타냄
6. Symbol(ES6) : 유일하고 변경할 수 없는 타입
7. BigInt(ES11) : 큰 정수를 표현, Number 타입에 제한되는 범위를 극복하기 위해 제한없이 정수를 표현


# Number
> 즉, 숫자형인 데이터들을 나타내는 타입
```js
let integer =  10; // 정수
let float = 3.142322325 // 실수
let negative = -2322323 // 음수
console.log(typeof integer) // Number
console.log(typeof float) // Number
console.log(typeof negative) // Number
```

# String
> 텍스트 데이터들을 나타내는 타입
```js
let str1 = "안녕하세요";
let str2 = '수호';
let str3 = `${str1} 저는 ${str2}입니다!!`;
let str4 = "22323";
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4);
```

# Boolean
> 참(true) 거짓(false)를 나타내기 위한 타입
```js
let isTrue = true
let isFalse = false

console.log(typeof isTrue) // Boolean
console.log(typeof isFalse) // Boolean
```

# undefined
> 변수 선언만 되어있고 값이 할당하지 않은 상태
```js
let data;
console.log(data); // undefined
console.log(typeof data); // undefined

function test () {}
console.log(test())
```
# null
> 개발자가 의도적으로 값이 없음을 명시하는 타입
```js
let a = null
console.log(a) // null
console.log(typeof a); // 타입 검사할 시 Object가 나온다 (자바스크립트 오래된 버그)
```
# Symbol
> 고유하고 변경 불가능한 값을 만들기 위해 나타내는 타입
> ES6 부터 도입
```js
let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1 === sym2); // false

// 설명(label)을 붙일 수 있지만, 값에는 영향 없음
let sym3 = Symbol("id");
let sym4 = Symbol("id");

console.log(sym3 === sym4); // false
```

# BigInt
> Number 타입보다 제한 없는 큰 정수를 나타낼 수 있는 타입
> ES11 부터 도입
```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

let big1 = 2388888888888888888888888888888888888n;

console.log(big1);        
console.log(typeof big1); // Bigint

// BigInt 생성자
let big2 = BigInt("4544444444444444444445323421321321323232");

console.log(big2); // 4544444444444444444445323421321321323232n
```

## 참조 타입
> `참조 타입`: 원시 타입과는 달리  메모리 주소에 저장한다


## 참조 타입 종류
1. Object
2. Array
3. Function

# Object 
> `객체` 라고하는데 Key : value 으로 이루어진 형태를 말한다
```js
let obj1 = { name : "Jerry"}
console.log(obj1); // Object
console.log(typeof obj1) // Object 
let obj2 = obj1; // 메모리 주소 복사(참조 복사)
obj2.name ="Tom"; 

console.log(obj1.name); // 같은 객체를 가리키게된다 , Tom 
```
# Array 
> 배열[] 이라고 불리는 순서가 있는 값들의 집합체를 말합니다
> 인덱스로 접근할 때 사용
```js
const arr = ["a", "b", "c"];

console.log(typeof arr); // object
const test1 = [1,2,3]
const test2 = [1,2,3]
console.log(test1 === test2); // false

```
# function 
> 함수도 참조 타입으로 메모리 주소가 저장
```js
function test() {}
console.log(typeof test()) 


function say() {
  console.log("안녕");
}

const a = say;
const b = a;

b();

```
