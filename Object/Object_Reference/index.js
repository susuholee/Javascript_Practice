// 문제 1
let a = { x: 1 };
let b = a;

b.x = 5;
console.log(a.x); 
// 출력 결과 : 5 



// 문제 2
let c = { y: 10 };
let d = { y: 10 };

console.log(c === d);
// true or false ?  
// false, 이유는 서로 다른 메모리를 가리키는 중이기 때문

// 문제 3
let a1 = { value: 1 };
let b1 = a1;
let c1 = b1;

c1.value = 99;

console.log(a1.value, b1.value, c1.value);
// 출력 결과 : 99, 99, 99
// 이유 : 서로 같은 메모리 주소를 가리킨다


// 문제 4
let a2 = { num: 1 };
let b2 = a2;

b2 = { num: 2 };

console.log(a2.num);

// 출력 결과 : 1
// 이유 : b2 = a2 여기서 b2가 a2 객체를 참조하여 b2가 새로운 주소를 바라보게 된다



