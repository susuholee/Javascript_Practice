#### Date 내장 객체
> 날짜 정보를 저장할 수 있고, 날짜와 관련된 메서드를 제공하는 내장 객체라고 할 수 있다.

### Date 객체 생성
```js
let date = new Date();
console.log(date);
// 인수 없이 호출하게 되면 현재 날짜와 시간이 저장된 객체를 반환
```

### 타임스탬프
> 1970년 첫날을 기준으로 흘러간 밀리초 시간을 나타내는 정수를 `타임스탬프`라고 한다.
> 타임스탬프를 사용하면 날짜를 숫자형태로 나타낼 수 있다.

### 날짜 구성요소 얻기
> Date 객체의 포함된 메서드를 사용하면 날짜 관련 정보를 가져올 수 있다

> 날짜 정보 가져오는 메서드
1. gerFullYear() : 년도를 반환하는 메서드 4자리 숫자를 반환
2. getMonth() : 해당 월 값을 반환
3. getDate() : 해당하는 날짜(일)를 반환
4. getHours(), getMinutes(), getSeconds(), getMilliseconds() : 시간, 분, 초, 밀리초
5. getDay() : 요일을 반환

```js
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getDay());
```
