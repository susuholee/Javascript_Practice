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