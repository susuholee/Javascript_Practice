// 객체 
// key와 value로 이루어진 데이터들의 집합

const car = {
  brand: "KIA",
  model: "쏘렌토",
  year: 2024,
  drive () {
    console.log("쏘렌토 차량입니다")
  }
};

let cat = new Object() // new 키워드 생성자 문법, 보통 클래스에서 사용된다
let dog = {} // 객체 리터럴 문법


const person = { 
  name : "Adam",
  age : 30,
}


for (const key in car) {
  console.log(key, car[key]);
}


// 문제 1
// 다음 각 동작을 한 줄씩, 코드로 작성해보세요.

// 빈 객체 user를 만듭니다.
// user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// name의 값을 Pete로 수정해보세요.
// user에서 프로퍼티 name을 삭제하세요.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// 문제 2
// 객체가 비어있는지 확인하기
// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.
// 아래와 같이 동작해야 합니다.

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) { 
    return false
  }
  return true
}

// 문제 3
// 변하지 않는 객체
// const와 함께 선언한 객체를 변경하는 게 가능할까요? 생각을 공유해주세요!

const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";

// 답 : 실행된다, const는 한 번이라도 값을 할당한 변수가 변경되는 걸 막습니다.
// 변수 user는 객체 참조 값을 저장하고 있는데, const는 이 값이 변경되는걸 막는 것이지, 객체의 프로퍼티를 변경하는 건 막지 않는다.
