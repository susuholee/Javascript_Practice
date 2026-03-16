// 문제 1
// 객체에서 name과 age 값을 구조분해 할당으로 꺼내 변수에 저장하세요.

const user = {
    name : "수호",
    age : 26
}

const {name : userName, age}  = user;
console.log(userName);
console.log(age);

// 문제 2
// 객체에서 name 값을 꺼내 userName이라는 변수 이름으로 저장하세요.


// 문제 3
// 배열에서 첫 번째 값과 두 번째 값을 구조분해 할당으로 꺼내 a, b 변수에 저장하세요.

const arr = [10,30,50,200];

const [a , b] = arr;

console.log(a)
console.log(b)
 
// 문제 4
// 배열에서 첫 번째 값 → first  나머지 값 → rest 배열로 구조분해 할당을 사용해 저장하세요.

const arr2 = ["사자", "호랑이", "곰", "뱀"]

const [first, ...rest] = arr2;
console.log(first);
console.log(rest);


// 문제 5
// 객체에서 title과 price 값을 구조분해 할당으로 꺼내 변수에 저장하세요.

const product = {
    title : "두바이 쫀득 쿠키",
    price : 10000
}

const {title, price} = product;
console.log(title);
console.log(price);