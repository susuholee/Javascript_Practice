#### 문자열 (String)

## 문자열 표현 방식
> "안녕" 큰 따옴표
> '안녕' 작은 따옴표 (싱글 따옴표)
> `안녕` 백틱 (템플릿 리터럴)

## 백틱 (템플릿 리터럴)
> 큰 따옴표, 작은 따옴표 말고도 백틱으로도 문자열을 표현할 수 있습니다. 
> 백틱은 변수 삽입이 가능하고, 여러줄 표현이 가능
> 인덱스 접근이 가능하다 -> 해당하는 문자열이 몇번째 인덱스에 해당하는지
> 문자열의 길이 -> length

### 부분 문자열 찾기 

### str.indexOf()
> str.indexOf(찾을 문자열) 메서드
> 반환값은 찾으면 해당하는 인덱스
> 못 찾으면 -1 

### includes()
> 문자열안에 특정 문자열이 포함되어 있는지 확인하는 메서드
> 반환값은 Boolean
> 위치는 알려주지 않음
> 두 번째인자로는 검색 시작 위치

```js
"hello world".includes("world")   // true
"hello world".includes("abc")     // false
```

### startsWith() 
> 문자열이 특정 문자열로 시작하는지 확인
> 반환값 Boolean

```js
"hello world".startsWith("hello")  // true
"hello world".startsWith("world")  // false
```

### endsWith()
> 문자열이 특정 문자열로 끝나는지 확인
> 반환값 Boolean

```js
"hello world".endsWith("world")   // true
"hello world".endsWith("hello")   // false
```

### 부분 문자열 추출하기

### slice()
> 문자열에서 원하는 부분만 잘라서 새로운 문자열로 반환하는 메서드

```js
str.slice(시작인덱스, 끝인덱스);

let str = "Hello";

str.slice(1, 4);   // "ell"


// 확장자 파일 추출
let str1 = "index.html";
str1.slice(-4); // html
```