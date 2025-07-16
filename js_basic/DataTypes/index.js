// Number 타입

// let integer =  10;
// let float = 3.142322325
// let negative = -2322323
// console.log(typeof integer)
// console.log(typeof float)
// console.log(typeof negative)

// String 타입

// let str1 = "안녕하세요";
// let str2 = '수호';
// let str3 = `${str1} 저는 ${str2}입니다!!`;
// let str4 = "22323";
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

// console.log(typeof str1); // Stirng
// console.log(typeof str2); // Stirng
// console.log(typeof str3); // Stirng
// console.log(typeof str4); // Stirng

// Boolean 타입

// let isTrue = true
// let isFalse = false
// console.log(typeof isTrue) // Boolean
// console.log(typeof isFalse) // Boolean

// undefiend 타입
// let data;
// console.log(data); //undefiend
// console.log(typeof data); // undefiend

// function test () {} 
// console.log(test()) // undefiend

// null 타입

// let a = null
// console.log(a) // null
// console.log(typeof a); // Object 

// Symbol 타입

// let sym1 = Symbol();
// let sym2 = Symbol(); 

// console.log(sym1 === sym2); // false

// let sym3 = Symbol("id");
// let sym4 = Symbol("id");

// console.log(sym3 === sym4); // false

// BigInt
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// let big1 = 2388888888888888888888888888888888888n;

// console.log(big1);        
// console.log(typeof big1); // Bigint

// // BigInt 생성자
// let big2 = BigInt("4544444444444444444445323421321321323232");

// console.log(big2); // 4544444444444444444445323421321321323232n


// Object 타입
// let obj1 = { name : "Jerry"}
// console.log(obj1); // Object
// console.log(typeof obj1) // Object 
// let obj2 = obj1; // 메모리 주소 복사(참조 복사)
// obj2.name ="Tom"; 

// console.log(obj1.name); // 같은 객체를 가리키게된다

// Array 타입
// const arr = ["a", "b", "c"];

// console.log(typeof arr); // object

// const test1 = [1,2,3]
// const test2 = [1,2,3]
// console.log(test1 === test2); // false

// // function
// function say() {
//   console.log("안녕");
// }

// const a = say;
// const b = a;

// b(); // 안녕

// function Intro() {
//   console.log("몰라요");
// }
// Intro.createProperty = "모르겟어요"

// console.log(Intro.createProperty); // 모르겟어요 


