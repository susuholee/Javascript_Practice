// 문제 1
// 객체가 하나 주어졌을 때 모든 프로퍼티의 key만 배열로 추출하시오.
const people = {
    name : "수호",
    age : 26,
}

const key = Object.keys(people);
console.log(key);


// 문제 2
// 객체가 하나 주어졌을 때 모든 value를 배열로 추출하시오.
const people2 = {
    name : "박지성",
    age : "25",
}

const key2 = Object.values(people2);
console.log(key2);



// 문제 3
// 객체가 하나 주어졌을 때 key와 value를 [key, value] 형태의 배열로 변환하시오.
const people3 = {
    name : "이정재",
    jobs : "배우"
}

const key3 = Object.entries(people3);
console.log(key3);

// 문제 4
// 객체의 모든 숫자 value를 전부 더한 합계를 구하시오.

const obj = {
    a : 20,
    b : 30,
    c : 100
}

let sum = 0;

for (let value of Object.values(obj)) {
    sum += value;
}

console.log(sum);

// 문제 5
// 객체에서 value가 30 이상인 항목만 출력하시오.

const obj2 = {
    a : 200,
    b : 30,
    c : 50
}

for (const [key, value] of Object.entries(obj2)) {
    if(value >= 30) {
        console.log(key, value);
    }
}


