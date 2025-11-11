### 논리 연산자 (Logical_Operator)
> 여러 조건을 결합하거나 반대로 바꾸는 연산자
> || (OR), AND(&&), !(NOT)으로 구성되어 있다
> 여기서 ! 연산자만 조건을 처리할때 값을 반대로 바꾸는 역할을 한다

### || (OR) 연산자
> 조건문이나 비교문에서 많이 사용되는 연산자
> 둘중 하나라도 참(true)일시 조건을 충족하게 된다
```js
let age = prompt("나이를 입력해주세요")
let passPort = confirm("여권을 소지하고 계신가요?")
if(age >= 20 || passPort ){
    alert("탑승하실 수 있습니다")
}else {
    alert("탑승할 수 없습니다")
}
```

### && (AND) 연산자
> 둘다 참이어야만 조건을 충족하게 된다
```js
let age = Number(prompt("나이를 입력해주세요"));
let passPort = confirm("여권을 소지하고 계신가요?")
if(age >= 20 && passPort){
    alert("탑승할 수 있습니다")
}else {
    alert("탑승할 수 없습니다")
}
```
### ! (NOT) 연산자
> 참은 거짓으로, 거짓은 참으로 반대로 뒤집는 연산자
```js
let age = Number(prompt("나이를 입력해주세요"));
let passPort = confirm("여권을 소지하고 계신가요?")
if(!(age >= 20 && passPort)){
    alert("탑승할 수 있습니다")
}else {
    alert("탑승할 수 없습니다")
}

```