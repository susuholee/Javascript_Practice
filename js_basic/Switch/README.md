### Switch문
> 조건이 복수일때, 하나를 선택해서 실행하는 조건문
> if~else 처럼 조건이 늘어나게 될때 대체된다
> 하나 이상의 case문으로 구성
> case 뒤에는 비교할 상수 값을 사용
> break문을 만나면 즉시 종료
> break를 쓰지 않으면 다음 case까지 계속 실행
> default는 어떤 case와도 조건이 일치하지 않을때 실행

### 기본 문법
```js
switch (조건식) {
    case 값1:
        실행될 코드
        break;
    case 값2:
        실행될 코드
        break;
    case 값3:
        실행될 코드
        break;
    default:
        실행될 코드
        break;
}
```
