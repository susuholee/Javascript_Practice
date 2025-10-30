## Alert 
> Alert는 웹 브라우저에서 사용자에게 경고 표시를 위한 함수로, 사용자가 확인 또는 ESC키를 입력하지 않은 이상 경고 메세지를 화면에 나타내주는 함수, 알림 표시로도 사용

```js
alert("회원가입 되었습니다")

document.getElementById('talk').addEventListener('click', function () {
    alert("제 이름은 이수호 입니다")
})
```

## Confirm
> confirm은 사용자에게 질문하고 반환값으로 true or false를 받는 함수이며 주로 선택해야하는 질문으로 많이 사용

```js
document.getElementById('talk').addEventListener('click',function () {
 const answer = confirm("나이가 몇살이세요?")

 if (answer) {
    alert("25세 입니다")
 } else {
    alert("비밀입니다")
 }
});
```

## Prompt
> prompt는 사용자의 입력을 받을 수 있는 함수로, 즉 어떠한 값을 사용자에게서 입력을 받을때 사용되는 함수이다. 

```js
document.getElementById('talk').addEventListener('click',function () {
 const answer = prompt("무엇을 좋아하세요?")

 if (answer) {
    alert(`저는 ${answer}를 좋아합니다`)
 } else {
    alert("좋아하지 않습니다")
 }
});
````
