// 이터러블 객체
const nums = [10, 20, 30];  // 배열은 iterable 객체를 뜻함

// 이터레이터 생성
const it = nums[Symbol.iterator]();  // Array.prototype에 Symbol.iterator를 상속 받음

// next()로 값 하나씩 꺼내기
console.log(it.next()); // { value: 10, done: false }
console.log(it.next()); // { value: 20, done: false }
console.log(it.next()); // { value: 30, done: false }
console.log(it.next()); // { value: undefined, done: true }