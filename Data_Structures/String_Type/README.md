### 숫자형(Number)
> 1, 3.14, 등 정수, 실수, 부동소수점에 대한 자료 형태

### NaN이란?
> 숫자 연산을 했는데 결과를 숫자로 표현할 수 없을 때 나오는 값


```js
Number("hello")   // "hello" -> String형  NaN
parseInt("abc")   // "abc" -> String형   NaN
```

### isNaN
> 값이 NaN인지 확인

### isFinite
> 값이 유한한 값인지 확인 (무한한 값이 없는 값)
> 끝이 있는 숫자

### parseInt
> 문자열에서 정수만 추출하는 전역 함수

```js
parseInt("100px"); // 100
```

### parseFloat
> 문자열에서 실수만 추출하는 전역 함수
> 소수점 두번째 까지만 허용
```js
parseFloat("3.14em"); // 3.14
```

