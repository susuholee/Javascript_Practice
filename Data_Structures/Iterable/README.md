### 이터러블 객체(iterable)
> 이터레이터를 반환하는 [Symbol.iterator] 메서드를 가진 객체
> 배열의 경우 Array.prototype 의 Symbol.iterator를 상속 받기 때문에 이터러블이다
> 쉽게 표현하면 자료를 반복할 수 있는 객체를 뜻함
> 배열도 마찬가지로 이터러블 객체이다

### 이터레이터  
> {key:value, done : true/false} 형태의 이터레이터 객체를 반환하는 next() 메서드를 가진 객체
> next 메서드로 순환할 수 있는 객체를 뜻함
 
