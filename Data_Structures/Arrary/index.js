let city  = ["파리", "서울", "오사카", "LA"]; 

// 현재 배열의 길이는 총 

console.log(city[0]); // 0 번째 인덱스 배열
console.log(city[1]); // 0 번째 인덱스 배열
console.log(city[2]); // 0 번째 인덱스 배열
console.log(city[3]); // 0 번째 인덱스 배열
console.log(city[4]); // undefiend 

console.log(city.length); // 4


// 문제 1️ (push)
// 요구사항

// 배열 [10, 20] 을 만든다.

// 숫자 30을 push()로 추가한다.

// 최종 배열을 출력하시오.

let arr1 = [10, 20];
arr1.push(30);
console.log(arr1);


// 문제 2️ (pop)
// 요구사항

// 배열 [5, 6, 7] 을 만든다.

// pop()을 한 번 실행한다.

// pop()의 반환값을 출력한다.

// 변경된 배열도 출력한다.

let arr2 = [5,6,7];

let result = arr2.pop();

console.log(result);
console.log(arr2);



// 문제3️ (push + pop)
// 요구사항

// 빈 배열을 만든다.

// "A", "B", "C"를 차례대로 push() 한다.

// pop()을 한 번 실행한다.

// 최종 배열을 출력하시오.

let arr3 = [];

arr3.push("A");
arr3.push("B");
arr3.push("C");

arr3.pop();

console.log("최종 배열",arr3);


// 문제 1️(shift)
// 요구사항

// 배열 [100, 200, 300] 을 만든다.

// shift()를 한 번 실행한다.

// shift()의 반환값을 출력한다.

// 변경된 배열도 출력한다.

let arr4 = [100, 200, 300];

let result2 = arr4.shift();

console.log(result2);
console.log(arr4);


// 문제2️ (unshift)
// 요구사항

// 배열 [2, 3, 4] 을 만든다.

// unshift(1)을 실행한다.

// unshift()의 반환값을 출력한다.

// 변경된 배열을 출력한다.

let arr5 = [2, 3, 4];

let result3 = arr5.unshift(1);

console.log(result3);
console.log(arr5);


// 문제 3️ (for..of)
// 요구사항

// 배열 ["사과", "바나나", "포도"] 의
// 모든 값을 for..of 문으로 하나씩 출력하시오.

let arr6 = ["사과", "바나나", "포도"];

for (let fruit of arr6) {
    console.log(fruit);
}


// 문제4️ (for..in)
// 요구사항

// 배열 ["A", "B", "C"] 의
// 모든 인덱스를 for..in 문으로 출력하시오.

let arr7 = ["A", "B", "C"];

for (const key in arr7) {
    console.log(key);
}