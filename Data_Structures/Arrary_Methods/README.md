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

