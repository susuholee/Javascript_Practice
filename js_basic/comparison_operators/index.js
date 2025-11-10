// 비교 연산자
// 어떠한 값을 비교할때 사용되는 연산자
let a = 200;
let b = 300;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

console.log(5 == "5");   // true  -> 값만 비교 (타입 변환 O)
console.log(5 === "5");  // false -> 값 + 타입 비교 (타입 변환 X)
console.log(0 == false); // true  -> false가 0으로 변환됨
console.log(0 === false); // false -> 타입이 다름 (number vs boolean)
console.log(null == undefined); // true -> 느슨한 동등 비교에서는 같다고 판단
console.log(null === undefined); // false -> 타입 다름
console.log(null === undefined); // false -> 타입 다름