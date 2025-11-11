### 병합 연산자 (??)
> 왼쪽 피연산자가 Null 또는 undefiend일때 오른족 값을 반환하고, 그렇지 않을때는 왼쪽 피연산자를 반환
> 주로 값이 없을때 대체할 값으로 사용
```js
let bitrhDay = null
let myBirthDay=  birthDay ?? 2001-05-23
console.log(myBirthDay)
```
### 반복문
> 같은 코드를 여러번 반복해서 실행하는 구문

### 반복문 종류
1. while
2. do...while
3. for

### while문
> 조건이 참(true)인 동안 반복해서 코드를 실행하는 구문
> 기본적인 문법
```js
while(조건){
    실행할 코드
}

let a = 1;

while(a <= 10){
    console.log(a);
    a++
}
```
### do..while문
> while문과 다르게 조건을 나중에 검사
> 실행될 코드는 조건식이 처음부터 false라도 무조건 한번은 실행된다
> 기본 문법
```js
do {
    // 실행될 코드(무조건 한번은 실행됨)
}while(조건)

let name;

do {
    name = prompt("이름을 입력하세요")
} while (name !== "수호")
alert('로그인 성공!!')

```
### for문
> 정해진 횟수까지 코드를 반복적으로 실행하는 구문
> 반복적으로 호출해야할때 사용
> 예를 들면 사용자의 정보를 표시할때 주로 사용
> 기본적인 문법
```js
for(초기식; 조건식; 증감식;){
    // 반복적으로 실핼될 코드
}

// 구구단 2단 출력
for(let i = 1; i < 9; i++){
    console.log(`2 x ${i} = ${2 * i}`)
}

```
