### 객체 참조
> 참조라는 것은 `객체가 저장된 메모리 주소를 가리키는 것`을 의미한다.
> 원시 타입은 `값 자체`를 변수에 저장하지만,
> 참조 타입은 변수에 객체가 아니라 그 객체를 가리키는 `주소(참조 값)`이 저장된다.

```js
let user = { name: "John" };

let admin = user; // 참조값을 복사

admin.name = "Suho";
alert(user.name); // Suho 출력
```