// if문
// let age = prompt('나이를 입력하세요');
// if(age >= 20) alert('성인입니다')

// if~else 
// const national =  prompt('국가를 입력해주세요');
// if(national == '대한민국'){
//     alert("안녕하세요 여기는 대한민국입니다")
// }else{
//     alert("Hello everyone Welcome to the USA")
// }

// else~if
// const score = prompt('점수를 입력해주세요')
// if(score >= 90){
//     alert("A학점 입니다")
// }   else if(score >= 80){
//     alert("B학점 입니다")
// }   else if(score >= 70){
//     alert("C학점 입니다")
// }   else if(score >= 60){
//     alert("D학점 입니다")
// } else {
//     alert("F학점 입니다")
// }

// 문제 : if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성해 보세요.

// 사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.

const value = prompt("자바스크립트의 공식 이름은 무엇일까요?");
if(value == "ECMAScript"){
    alert("정답입니다!")
}else {
    alert("모르셨나요? 정답은 ECMAScript입니다!")
}