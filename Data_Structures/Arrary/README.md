### 배열(Arrary)
> 여러 개의 값을 하나로 묶은 자료 구조 
> [] 이렇게 나타낸다

### 배열 선언 방식
```js
let arr = new Array();
let arr = [];
```
> 대부분 두 번째 방법으로 배열을 생성

### 배열의 인덱스 접근
```js
let city  = ["파리", "서울", "오사카", "LA"]; 

// 현재 배열의 길이는 총 

console.log(city[0]); // 0 번째 인덱스 배열
console.log(city[1]); // 0 번째 인덱스 배열
console.log(city[2]); // 0 번째 인덱스 배열
console.log(city[3]); // 0 번째 인덱스 배열
console.log(city[4]); // undefiend 

console.log(city.length); // 4
```

### 배열에서 스택구조로 쉽게 이해하기

### push
> 배열에서 맨 뒤에 요소를 추가한다
> 반환값 : 새로운 길이를 반환


### pop
> 배열에서 맨 뒤에 요소를 제거한 뒤 반환
> 반환값 : 제거된 요소 

### 스택 
> 한쪽에서 넣고 한쪽에서는 제거하는 구조

### LIFO(Last In First Out)
> 나중에 들어간 값이 먼저 나오는 구조
> pop + push가 같이 쓰이면 LIFO 구조이다

## Shift (pop 반대로 생각)
> 배열 맨 앞 요소 제거한뒤 제거된 값 반환


## unshift (push와 반대로 생각)
> 배열 맨 앞 요소 추가 
> 반환값 : 새로운 길이

### 배열의 반복문

## for..of
> 배열의 요소 값(value)을 하나씩 꺼냄
> 배열에 적합

```js
let arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}

```

## for..in
> 배열의 인덱스(key)를 꺼냄
> 객체에 적합
```js
let arr = [1, 2, 3];

for (let index in arr) {
  console.log(index);
}

```

