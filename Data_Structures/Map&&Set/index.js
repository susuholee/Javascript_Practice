// 배열에서 중복을 제거하세요.

const arr = [1,1,2,3,3,4];

const set = new Set([...arr]);
console.log(set);

// 결과

// [1,2,3,4]

// 힌트
// Set 사용
// 배열로 다시 변환



// 다음 코드에서 Tom이 존재하는지 확인하세요
const users = new Set(["Tom","Jane","Mike"]);

const result = users.has("Tom");

console.log(result);

// 결과

// true




// Set에 "Tom"을 추가하세요.

const users2 = new Set(["Jane","Mike"]);

// 결과

// {"Jane","Mike","Tom"}

const result2 = users2.add("Tom");
console.log(result2);


// Set의 크기(개수)를 구하세요.

const numbers = new Set([1,2,3,4]);

const result3 = numbers.size
console.log(result3)

// 결과


// 다음 배열에서 중복된 값이 있는지 확인하세요.

const arr2 = [1,2,3,4,4];

const result4 = arr2.length !== new Set(arr).size
console.log(result4)

// 결과

// true

// 힌트

// arr.length
// new Set(arr).size