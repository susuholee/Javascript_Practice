## `<script>` 태그
> `<script>` 태그는 HTML 문서에 스크립트 파일을 작성하거나, 불러올때 사용하는 태그

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1>스크립트 태그 테스트</h1>

    <script>alert("테스트 중...")</script>

    <h2>스크립트 태그 </h2>
</body>

</html>
```
> 이런식으로 작성이 가능하지만, 보통 `<body> 닫는 태그` 밑에 작성된다.
> 그 이유는 HTML 문서는 위에서 부터 아래로 코드를 읽는데 중간에 
`<script>`태그를 만나면 그 즉시 자바스크립트를 실행할려고 렌더링 과정을 멈추게 되기 때문

### `type` 속성
> type 속성은 스크립트파일의 타입을 지정하는 속성
> HTML4까지는 type을 명시하는게 필수적, HTML5 이후부터는 기본값으로 간주되어서 생략을 해도 무방
```js
// HTML4
<script type="text/javascript"></script>

// HTML5
<script src="./index.js"></script>
```
### `src` 속성
> 외부 스크립트 파일의 URL을 지정하는 속성
> 말 그대로 외부 스크립트 파일을 불러올때 사용

```js
<script src="./index.js">
```

### `defer` 속성
> HTML 문서를 파싱 작업이 끝나면 스크립트 파일 실행

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>defer 속성 테스트</title>
    <script src="./index.js" defer></script>
    <script src="./index2.js" defer></script>
</head>

<body>
    <div>Defer 속성 테스트</div>
</body>
</html>
```
> 위에 코드를 보면 웹 브라우저에서 파일을 가져오면, HTML 문서를 파싱 작업을 하던중 스크립트 파일의 속성이 `defer`가 있으면 HTML 파싱 작업과 동시에 스크립트 파일을 다운을 받게되고, 파싱 작업이 끝나고 나서 스크립트 파일을 실행