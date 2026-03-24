// 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기
// user를 JSON 형태의 문자열로 바꾼 다음 이를 다시 객체로 바꾼 후 제2의 변수에 저장해보세요.

// let user = {
//   name: "John Smith",
//   age: 35
// }

// let user2 = JSON.stringify(JSON.parse(user));




// 다음 JSON 문자열을 자바스크립트 객체로 변환하고
// 이름(name)을 출력하세요.

// const json = '{"name":"Tom","age":20,"city":"Seoul"}';


// let obj = JSON.parse(json);
// console.log(obj.name);



// 다음 객체를 JSON 문자열로 변환하세요.

// const user = {
//   name: "Jane",
//   age: 25
// };

// 출력 결과
// {"name":"Jane","age":25}

// let obj2 = JSON.stringify(user);
// console.log(obj2);


// 다음 JSON 데이터를 객체로 변환한 후
// 모든 사람의 name을 출력하세요.

// const json = `
// [
//   {"name":"Tom","age":20},
//   {"name":"Jane","age":25},
//   {"name":"Mike","age":30}
// ]
// `;

// // 출력 결과
// // Tom
// // Jane
// // Mike

// let obj3 = JSON.parse(json);

// for (let i = 0; i < obj3.length; i++) {
//     console.log(obj3[i].name);
// }



// 다음 JSON 데이터를 객체로 변환한 후
// age가 25인 사람의 name을 출력하세요.

// const json = `
// [
//   {"name":"Tom","age":20},
//   {"name":"Jane","age":25},
//   {"name":"Mike","age":30}
// ]
// `;

// let arr = JSON.parse(json);

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i].age === 25){
//         console.log(arr[i].name)
//     }
// }

// 출력 결과
// Jane


// 다음 배열을 JSON 문자열로 변환하세요.

// const arr = ["apple", "banana", "orange"];

// let obj = JSON.stringify(arr);
// console.log(obj);

// 출력 결과
// ["apple","banana","orange"]



// JSON을 객체로 변환
// age를 30으로 변경
// 다시 JSON 문자열로 변환
const json = '{"name":"Tom","age":20}';

let obj = JSON.parse(json);
obj.age = 30;
let newJson = JSON.stringify(obj);
console.log(newJson);

// 최종 결과

// {"name":"Tom","age":30}


// const json = `
// [
//   {"name":"Tom","age":20},
//   {"name":"Jane","age":30},
//   {"name":"Mike","age":40}
// ]
// `;

// 평균 나이를 구해서 출력하세요.
// 출력:
// 30
