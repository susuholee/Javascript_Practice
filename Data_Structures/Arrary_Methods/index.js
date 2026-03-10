// 1. splice
// 배열에서 index 2에 있는 요소를 제거하세요.
// 결과: [10, 20, 40]
let arr1 = [10, 20, 30, 40];

arr1.splice(2,1);
console.log(arr1);



// 2. splice
// "banana"를 "grape"로 교체하세요.
// 결과: ["apple", "grape", "orange"]
// ================================

let fruits1 = ["apple", "banana", "orange"];

fruits1.splice(1,1, "grape")
console.log(fruits1);


// ================================
// 3. slice
// index 1부터 index 4 직전까지 복사하세요.
// 결과: [20, 30, 40]

let arr2 = [10, 20, 30, 40, 50];

let result = arr2.slice(1,4);
console.log(result);


// ================================
// 4. concat
// 두 배열을 하나로 합치세요.
// 결과: [1,2,3,4,5]
// ================================

let arr3 = [1, 2, 3];
let arr4 = [4, 5];


let results = arr3.concat(arr4);
console.log(results);



// ================================
// 5. forEach
// 배열의 모든 숫자의 합을 구하세요.
// 결과: 10
// ================================

let arr5 = [1, 2, 3, 4];
let sum = 0;

arr5.forEach(num => {
    sum += num;
})

console.log(sum); 




// ================================
// 6. indexOf
// "orange"의 인덱스를 구하세요.
// 결과: 2
// ================================

let fruits2 = ["apple", "banana", "orange"];

let result2  = fruits2.indexOf("orange");

console.log(result2);




// ================================
// 7. includes
// 배열에 "banana"가 있는지 확인하세요.
// 결과: true
// ================================

let fruits3 = ["apple", "banana", "orange"];

let result3 = fruits3.includes("banana");
console.log(result3);


// ================================
// 8. find
// 10보다 큰 첫 번째 숫자를 찾으세요.
// 결과: 12
// ================================

let arr6 = [3, 7, 12, 5, 20];

let result4 = arr6.find((el) => el > 10);

console.log(result4);


// 9. findIndex
// 5보다 큰 첫 번째 숫자의 인덱스를 구하세요.
// 결과: 3
// ================================

let arr7 = [1, 3, 5, 7, 9];

let result5 = arr7.findIndex((el) => el > 5)
console.log(result5);


// ================================
// 10. filter
// 짝수만 배열로 만드세요.
// 결과: [2,4,6]
// ================================

let arr8 = [1, 2, 3, 4, 5, 6];

let result6 = arr8.filter((el) => el % 2 === 0)
console.log(result6)


// ================================
// 11. map
// 모든 숫자를 제곱한 배열을 만드세요.
// 결과: [1,4,9,16]


let arr9 = [1, 2, 3, 4];

let result7 = arr9.map((el) => el * el);
console.log(result7);

// ================================
// 12. sort
// 오름차순 정렬하세요.
// 결과: [1,2,5,9]
// ================================

let arr10 = [5, 2, 9, 1];

let result8 = arr10.sort((a, b) => a - b);
console.log(result8);


// ================================
// 13. reverse
// 배열을 뒤집으세요.
// 결과: ["d","c","b","a"]
// ================================

let arr11 = ["a", "b", "c", "d"];

let result9 = arr11.reverse();

console.log(result9);


// ================================
// 14. split
// 문자열을 콤마 기준으로 나누세요.
// 결과: ["apple","banana","orange"]

let str1 = "apple,banana,orange";

let result10 = str1.split(",");

console.log(result10);

// ================================
// 15. join
// 배열을 공백 기준 문자열로 만드세요.
// 결과: "Hello World"
// ================================

let arr12 = ["Hello", "World"];

let result11 = arr12.join(" ");

console.log(result11);



// ================================
// 16. reduce
// 배열의 모든 숫자의 합을 구하세요.
// 결과: 15
// ================================

let arr13 = [1, 2, 3, 4, 5];

let result12 = arr13.reduce((acc, current) => acc + current, 0)

console.log(result12)


// 17. 문자열 뒤집기
// "hello" -> "olleh"

let str2 = "hello";

let result13 = str2.split("").reverse().join("")

console.log(result13);


