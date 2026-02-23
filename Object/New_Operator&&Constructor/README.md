### New 연산자
>  {} 빈 객체를 생성하고, 생성된 그 객체를 생성자 함수의 this와 연결하여
생성자 함수를 실행하고 값을 초기화 한뒤에 최종 완성된 객체를 반환한다




### 일반 함수 VS 생성자 함수 차이점


## 일반 함수 
> 일반적으로 함수를 호출 </br> 
> 값을 계산하거나 해당하는 로직을 실행 </br>
> return 문이 있음, 즉 값을 반환</br>
> 함수 첫글자 소문자로 시작 (관례에 따름)
> this는 전역객체 or undefined

```js
function add(num1, num2) {
    return num1 + num2 
}
add(30, 59)
```

## 생성자 함수
> 생성자 함수는 여러 개의 객체를 생성하기 위해 사용하는 함수 

### 생성자 함수 기본 형태 
1. 함수 이름 첫글자는 대문자로 시작
2. `this`를 사용
3. new 연산자 사용

```js
function Student(age) {
    this.속성 = 값;
}
let student = new Student(20);
console.log("나이:",student)
```



```js
function Animal(name) {
    this.name = name;
}

let animal = new Animal("고양이");
console.log("이름:", animal.name);
```
> 여기서 생성자 함수는 new 연산자와 함께 호출되는 함수

