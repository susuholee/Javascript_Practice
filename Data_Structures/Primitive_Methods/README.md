### 원시값 
> 더이상 쪼개질 수 없는 값을 말한다

### 원시값 특징
1. 값 자체 저장
2. 불변성

### 원시값 종류
1. string
2. Number
3. Boolean
4. null
5. undefiend
6. symbol
7. bigint

### toUpperCase() 메서드
> 문자열을 대문자로 변환하는 메서드

> 문자열은 원시값이지만,
메서드를 호출하면 자바스크립트가 잠시 String 객체로 감쌉니다.

```js
let str = "hello";

let result = str.toUpperCase();

console.log(result); // "HELLO"
console.log(str);    // "hello"
```
> 코드를 해석한다면, 원본 값은 변하지 않습니다. 
> 그 이유는 원시값 String은 불변성을 가지기 때문

