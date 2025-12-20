### 객체
> 참조 타입
> 키(key)와 값(value)로 구성된 데이터 집합
> 키에는 모든 문자형, 값에는 모든 자료형이 올 수 있다

## 프로퍼티 
> 여기서 키,값으로 구성된 속성들을 `프로퍼티`라고 부른다

## 리터럴
> {} 중괄호를 이용하여 바로 객체를 만드는 방식을 말합니다

## 객체 접근 방법

```js
let user = {
    age: 32, // age 프로퍼티
    name:"Josh" // name 프로퍼티
}
```
## for ... in 반복문
> 객체 안에 들어 있는 `키(key)`들을 하나씩 꺼내서 반복하는 문법

```js

let user = {
    age: 32, // age 프로퍼티
    name:"Josh" // name 프로퍼티
}

for (let key in user) {
    // 실행할 코드
    console.log(key, user[key]); // 대괄호 표기법
}
```