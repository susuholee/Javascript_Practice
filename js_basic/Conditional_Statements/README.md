### 조건문
> 특정 조건에 따라 코드의 실행을 결정하는 제어문을 뜻한다
> 조건 처리가 필요한 로직이나 반환해야하는 값이 있을때 사용된다
> 대표적으로 if문, if~else, else~if로 구성된다
> 반환 타입은 Boolean true or false

### if 문
> 조건문에 기본적인 구문으로 간단한 조건처리가 가능하다
> if ('조건') {
    실행할 코드 
}
```js
let age = prompt('나이를 입력하세요');
if(age >= 20) alert('성인입니다')
```
### else 문
> if 조건문에서 참이 아닐때 실행하는 코드를 정의한다
> if~else 참일때는 if문에 해당하는 것을 실행하지만, 아닐때는 else문에 해당하는 조건문을 실행
> if ('조건'){
    참일때 실행할 코드
}else{
    거짓일때 실행할 코드
}
```js
const national =  prompt('국가를 입력해주세요');
if(national == '대한민국'){
    alert("안녕하세요 여기는 대한민국입니다")
}else{
    alert("Hello everyone Welcome to the USA")
}
```
### else~if문
> 이전 조건이 false 일때 새로운 조건을 추가하는 것을 뜻한다
> 주로 여러개의 조건이 필요한 상황일때 사용되는 절이다
```js
const score = prompt('점수를 입력해주세요')
if(score >= 90){
    alert("A학점 입니다")
}   else if(score >= 80){
    alert("B학점 입니다")
}   else if(score >= 70){
    alert("C학점 입니다")
}   else if(score >= 60){
    alert("D학점 입니다")
} else {
    alert("F학점 입니다")
}
```



