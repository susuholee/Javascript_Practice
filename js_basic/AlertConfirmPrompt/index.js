
// Alert 실습
// button 태그에 해당하는 ID를 가져와서 클릭 이벤트를 할당하여 alert 함수를 호출

// document.getElementById('talk').addEventListener('click', function () {
//     alert("제 이름은 이수호 입니다")
// })

// confirm 실습
// answer 변수에 confirm 함수를 사용하여 사용자에게 메시지를 전달하고, 조건문으로 true일때와 false일때 반환값을 받는다. 

// document.getElementById('talk').addEventListener('click',function () {
//  const answer = confirm("나이를 맞추고 싶어요 알려주실건가요?")

//  if (answer) {
//     alert("25세 입니다")
//  } else {
//     alert("비밀입니다")
//  }
// });

// prompt
// 사용자가 직접 입력값을 입력받아서 화면에 출력한다

document.getElementById('talk').addEventListener('click',function () {
 const answer = prompt("무엇을 좋아하세요?")

 if (answer) {
    alert(`저는 ${answer}를 좋아합니다`)
 } else {
    alert("좋아하지 않습니다")
 }
});