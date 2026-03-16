### 구조 분해 할당
> 배열이나 객체에 있는 값을 꺼내어 변수에 할당하는 문법
> API 응답 처리 구조나, 배열 반환 함수에서 많이 사용

#### ... 스프레드 연산자
> 배열에서 나머지 값들을 가져오고 싶을때 사용되는 연산자
> 객체에서도 키를 기준으로 값을 꺼내올 수 있음

### 객체 구조 분해 할당
```js
// 구조 분해 할당을 안했을때
const user = {
    name :"수호",
    age : 26
}
const name = user.name;
const age = user.age;

// 각 프로퍼티에 접근해야 값을 주시할 수 있었음

// 구조 분해 할당을 적용했을때
const user = {
    name :"수호",
    age : 26
}

const {name, age} = user;
console.log(name); // "수호"
console.log(age); // 26

// 보다 가독성이 있음
``` 

### 변수 이름을 바꿔서 값을 할당하고 싶을때
> 바꾸고 싶은 값 : 변수 이름 
```js
const user = {
    name :"수호",
    age : 26
}

const name = "박지성";
const { name : userName} = user;

console.log(name); // 박지성
console.log(userName); // 수호
```

### 배열 구조 분해 할당
> 인덱스 배열로 값을 꺼낼 수 있다

```js
const arr = ["사과", "배", "복숭아", "포도"]

const [a, b, c, d, e] = arr;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
```