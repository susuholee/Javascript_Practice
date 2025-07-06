### 엄격 모드(strict mode)
> 자바스크립트 실행 환경에서 코드의 오류를 엄격하게 검사하고, 개발자의 실수나 잘못된 관행을 방지하기 위한 목적으로 특별한 모드

> ES5이전에는 엄격 모드가 없어서 느슨한 문법에서 예측 불가능한 코드가 작성되었다
> ES5(2009)부터 엄격 모드가 도입되고 난뒤
> ES6부터는 자동으로 엄격 모드가 내장되도록 설계됨 

### 엄격 모드 문법 
> `use strict`; 
> 최상단에 위치해야한다

```js
"use strict";

a = "우와"
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
</body>
<script src="./index.js"></script>
</html>
```
> 결과 : 에러 내용 : index.js:3 Uncaught ReferenceError: a is not undefined at index.js:3:3

> 이렇게 엄격 모드를 적용하면 오류를 사전에 검출할 수 있고, 컴파일 시 더 안전한 코드를 작성할 수 있다.

> 엄격 모드를 적용하지 않을 경우 브라우저에서 예측할 수 없는 오류가 발생하기때문에 사용한다

