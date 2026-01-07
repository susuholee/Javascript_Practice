### 메서드란? 
> 객체에 속하며, 특정 행동이나 동작을 일으키기 위해 정의된 함수


### 그럼 메서드와 함수의 차이는?
> 메서드는 객체에 속하며 프로퍼티로 존재한다
> 그에 비해 함수는 독립적인 코드 블록을 가지고 있다


### 메서드 예시
```js
let person = {
    name : "수호",
    age : 26,

    sayTalk() {
        alert(`안녕하세요 저는 ${this.name}입니다. 나이는 ${this.age}세 입니다`);
    }
}
person.sayTalk(); // 메서드 호출
```

### this란?
> 현재 실행중인 `함수, 또는 메서드를 호출하는 주체`를 가리키는 것을 의미한다.

### 자바스크립트에서 this는 무엇을 가리키는가?
> 호출한 주체에 따라서 this가 가리키는 것이 달라진다
> 브라우저 환경의 전역 컨텍스트에서는 this는 `window`객체를 가리킨다


```js
let person = {
    name : "수호",
    age : 26,

    sayTalk() {
        // 여기서 this는 현재 객체를 가리킴
        alert(`안녕하세요 저는 ${this.name}입니다. 나이는 ${this.age}세 입니다`);
    }
}
person.sayTalk();
```


```js
let person2 = {
    name : "수호",
    age : 26,

    sayHi() {
        // 여기서 this 대신 외부 변수를 참조 
        alert(`안녕하세요 저는 ${person2.name}입니다. 나이는 ${person2.age}세 입니다`);
    }
}
person2.sayHi();
```
> 외부 변수를 참조해서 객체에 접근을 할 수 있습니다
> 하지만 외부 변수를 참조하게 되면 객체 이름이 변경되거나 다른 변수에 할당되는 경우,
메서드가 의도하지 않은 대상을 참조하거나 에러가 발생할 수 있습니다



### 외부 변수를 참조하게 되면 발생하는 문제

```js
let admin = person2;
person2 = null; // person2를 null로 덮어쓴다.

admin.sayHi(); // 에러 발생
```
> 메서드 내부에서 여전히 person2 변수를 참조하고 있기 때문에
> person2가 null이 되면 정상적으로 동작하지 않는다.

