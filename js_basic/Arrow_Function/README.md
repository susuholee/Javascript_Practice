## 화살표 함수 (Arrow Function)
> ES6 이후 등장한 새로운 함수 표현식
> 기존 함수 선언식보다 간결하게 사용할 수 있음
> this 바인딩을 해결해준다

### 기본 문법
```js
const 함수이름 = (매개변수) => {
  실행문;
};

const sayHello = (address) => {
    console.log(`안녕하세요 저는 ${address}에 사는 수호입니다`)
}
sayHello("경기도");



// 매개변수가 없을시 빈괄호로 냅둔다
const getProfile = () => 20; 


// 한 줄로 가독성을 높일 수 있습니다
// {} 중괄호를 안해도 자동으로 반환한다
const status = (num1, num2) => num1 + num2;
```