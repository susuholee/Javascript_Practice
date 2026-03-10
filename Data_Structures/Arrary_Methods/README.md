### 배열 메서드 

### splice
> 주어진 배열의 원하는 위치에서 요소를 제거, 추가, 교체할 수 있는 메서드
> 삭제된 요소들을 반환
> 원본 배열 변경됨

splice 매개변수 
1. 시작할 인덱스 위치
2. 삭제할 요소 갯수
3. 추가할 요소

```js
arr.splice(index,[deleteCount, element1, ...]);
```


### slice
> 배열의 일부분을 잘라서 새로운 배열을 복사하는 메서드
> 새로운 배열을 반환
> 원본 배열이 변경되지 않음

```js
arr.slice([index], [end])
```
slice 매개변수
1. 복사를 시작할 인덱스 
2. 복사를 끝낼 인덱스 직전까지

### concat
> 배열이나 문자열을 이어 붙여서 새로운 값을 만드는 메서드
> 새로운 배열을 반환
> 원본 배열을 변경하지 않음

```js
arr.concat(value1, value2, ..., valueN)
```
concat 매개변수
1. 붙일 배열 또는 값

### forEach
> 배열의 각 요소를 순회하면서 함수를 실행하는 메서드
> 반환값 없음 

```js
arr.forEach(function(item, index, array){

});
```
forEach 매개변수
1. item : 현재 요소
2. index : 인덱스
3. 원본 배열

## 배열에서 무언가를 찾을때 사용되는 메서드

### indexOf
> 배열에서 특정 값의 위치를 찾는 메서드
> 값을 찾으면 1반환, 못 찾으면 -1반환

```js
arr.indexOf(value);
```
value : 찾을 값

### lastIndexOf
> 배열에서 특정 값의 마지막 위치를 찾는 메서드
> 반환값은 indexOf 메서드와 동일

```js
arr.lastIndexOf(value);
```

### includes
> 배열에서 특정 값이 있는 확인하는 메서드
> 반환값은 Boolean

```js
arr.includes(vlaue);
```

### find
> 배열에서 조건에 맞는 첫 번째 요소를 구하는 메서드
> 반환값은 찾으면 첫 번째 값 반환, 못 찾으면 undefined

```js
arr.find(function(item, index, array) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환
    // // 조건에 해당하는 요소가 없으면 undefined를 반환
});
```
find 매개변수 
1. item : 함수를 호출할 요소
2. index : 요소의 인덱스
3. array : 원본 배열

### findIndex
> find 메서드와 마찬가지로 같은 동작을 함
> 차이점은 반환 값, findIndex는 해당하는 첫 번째 인덱스

```js
array.findIndex(function(item, index, array) {
});
```

### filter
> 배열에서 조건에 맞는 요소들을 모두 찾아서 새로운 배열로 반환
> 반환값은 배열, 못찾으면 빈 배열 반환 

```js
arr.filter(function(item, index, array) {
});
```

filter 매개변수
1. item : 함수를 호출할 요소
2. index : 요소의 인덱스
3. array : 원본 배열

## 배열을 변형하는 메서드

### map 
> 배열을 순회하면서 각 값을 변형하면서 새로운 배열로 반환하는 메서드
> 반환값은 배열
> return 해야할 값이 있어야함, 없으면 undefiend가 들어간 배열로 반환

```js
arr.map(function(item, index, array) {
    return // 반환해야할 값
})
```

### sort 
> 배열의 요소를 정렬하는데 사용되는 메서드
> 콜백을 전달하는데 그 이유는 sort 메서드가 두 값을 계속 비교하면서 정렬하기 때문
> 반환값은 재정렬된 배열이 반환
> 문자열 기준 오름차순으로 정렬
> 정렬 기준을 잡을거면 바교 함수를 만들어서 작업

```js
arr.sort(); 

// 오름차순으로 정렬
arr.sort((a,b) => a - b);

// 내림차순으로 정렬
arr.sort((a,b) => b - a);
```

### reverse
> 배열의 요소를 역순으로 바꾸는 메서드
> 원본 배열이 변경됨
> 뒤집은 배열을 반환

```js
let arr = ["지금", "어디인가", "공부"];

let result = arr.reverse();

console.log(arr); // 원본 배열이 변경됨
console.log(result); // 뒤집힌 배열
```

### split 
> 특정 문자열을 잘라서 새로운 배열을 반환하는 메서드
> 원본 배열이 변경되지 않음

```js
string.split("문자열을 나눌 기준", "반환할 배열의 갯수")

let str = "apple,banana,orange";

let result = str.split(","); // , 콤마 기준으로 나뉜다  -> 배열 생성[] -> ["", "", ""] 이런 형태가 나옴

console.log(result); // ["apple", "banana,", "orange"]
```
### join
> 배열의 여러 요소를 하나의 문자열로 합치기 위한 메서드
> 반환값은 문자열 String

```js
let arr = ["안녕하세요" ,"저는" , "이수호", "입니다"]

let result = arr.join(" "); 

conosle.log(arr); // 원본 배열이 변경되지 않음
console.log(result); // 빈 공백을 기준으로 문자열을 합쳐서 반환 -> "안녕하세요 저는 이수호 입니다"
```

### reduce
> 가장 어려운 메서드
> 배열의 모든 요소를 누적(계산, 합계)해서 하나의 결과값을 구하는 메서드
> 배열을 하나의 값으로 줄인 결과를 반환
> 배열이 될 수도있고, 문자열이 될 수 도 있고 등등
> 기본적으로 콜백을 전달하는데 이유는 배열을 순회하면서 계산을 누적하기 때문에 콜백 함수를 전달받아야함

```js
// 기본 구조
array.reduce(callback, initialValue)

// 전체 구조
array.reduce(function(accumulator, currentValue) {
  return accumulator와 currentValue를 이용한 계산;
}, initialValue);

let arr = [1, 2, 3, 4];

let result = arr.reduce((acc, cur) => acc + cur, 0);

console.log(result);
```

rudece 매개변수
1. accumulator - 누적값
2. currentValue - 현재 요소
3. currentIndex - 현재 인덱스
4. array - reduce를 호출한 원본 배열