### 연산자(Operator)
> 어떠한 값을 가지고 계산이나 처리를 수행하는 기호 및 키워드라고 불리기도 한다
> 사칙연산에 들어가는 +, - , * , / 연산자들이 포함된다

### 피연산자(Operand)
> 연산에 사용되는 값 또는 변수를 뜻함

```js
let a = 10;
let b = 2;
let c = a + b;
console.log(c);
```

### 연산자 종류
1. 덧셈 연산자
2. 뺄셈 연산자
3. 곱셈 연산자
4. 나눗셈 연산자
5. 나머지 연산자
6. 거듭제곱 연산자

### 덧셈 연산자 ( + )
> 사칙연산에서 덧셈 연산자는 말 그대로 어떠한 값을 더할때 사용되는 연산자
```js
let kim = 100
let lee = 200
let result = a + b;
console.log("더한값",result);
```

### 뺄셈 연산자 ( - )
> 사칙연산에서 뺄셈 연산자, 어떠한 값을 빼야할때 사용되는 연산자
```js
let num1 = 100
let num2 = 200
let total = num1 - num2;
console.log("마이너스 값",total);
```

### 곱셈 연산자 ( * )
> 사칙연산에서 곱셈 연산자, 어떠한 곱할때 사용되는 연산자
```js
let num3 = 30;
let num4 = 6;
let num5 = num3 * num4;
console.log("곱한 값",num5);
```

### 나눗셈 연산자 ( / )
> 사칙연산에서 나눗셈 연산자, 어떠한 값을 나눠야 사용되는 연산자
```js
let num6 = 20;
let num7 = 4;
let half =  num6 / num7;
console.log("나눈 값",half)
```

### 나머지 연산자 ( % )
> 사칙연산에서 나머지 연산자, 나머지 값을 구할때 사용되는
연산자
```js
let num9 = 200;
let num10 = 40;
let remainder = num9 % num10;
console.log("나머지 값",remainder);
```

### 거듭제곱 연산자 ( ** )
> 사칙연산에서 거듭제곱 연산자, 어떠한 값을 나눠야 사용되는 연산자
```js
let n1 = 10;
let n2 = 20;                                 
let square = n1 ** n2;
console.log("거듭제곱 값",square);
```

### 증가 연산자 ( ++ )
> ++ 연산자는 값을 1 증가시키는 것을 뜻한다
```js
let conut = 1250;
count++
console.log(count);
```


### 감소 연산자 ( -- )
> -- 연산자는 값을 1 감소시키는 것을 뜻한다
```js
let count2 = 2000;
count2--
console.log(count2);
```
### 전위 연산자
> 값을 먼저 증가,감소한 뒤 값을 반환하는 연산자
```js
let a = 2000;
++a;
console.log(a) // 2001
```

### 후위 연산자
> 값을 먼저 증가, 감소하지 않고 현재 값을 반환한뒤 값을 증가
```js
let b = 3022;
let d = b++;
console.log(b) // 결과는 b = 3022 , d = 3022
```