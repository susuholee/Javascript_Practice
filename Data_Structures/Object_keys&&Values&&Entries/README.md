## 일반 객체를 순회하여 배열로 반환하는 메서드

### Object.keys
> 객채의 프로퍼티(키)만 배열로 반환하는 메서드
> 반환값 문자열 배열 -> ["A","B"]

```js
Object.keys(object)
// object : 키를 추출할 객체(대상)

const student = {
    name : "수호",
    age : 26,
    jobs : "developer"
}

const key  = Object.keys(student);
console.log(key);  //  ->  ["name" , "age" , "jobs"]
```
### Object.values
>  Object.keys 메서드와 반대로 객체의 값만 배열로 반환하는 메서드
> 반환값 동일 

```js
const student = {
    name : "수호",
    age : 26,
    jobs : "developer"
}

const key = Object.keys(student);
console.log(key);  //  ->  ["수호" , "26" , "developer"]
```

### Object.entries
> 객체의 key-value를 [key,value] 형태로 묶어서 반환하는 메서드
```js
// 반환 형태
[
    [key1,value1]
    [key2,value2]
    [key3,value3]
    [key4,value4]
]

const student = {
    name : "수호",
    age : 26,
    jobs : "developer"
}

const key = Object.entries(student);
console.log(key);  
// 출력 구조
// [
    ["name", "수호"],
    ["age", "26"],
    ["jobs", "developer"]
// ]
```