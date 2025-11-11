// 논리 연산자 
// || 연산자
// 둘중 하나라도 조건을 만족할시 로직 처리
// let age = prompt("나이를 입력해주세요")
// let passPort = confirm("여권을 소지하고 계신가요?")
// if(age >= 20 || passPort ){
//     alert("탑승하실 수 있습니다")
// }else {
//     alert("탑승할 수 없습니다")
// }

// && (AND) 연산자
// let age = Number(prompt("나이를 입력해주세요"));
// let passPort = confirm("여권을 소지하고 계신가요?")
// if(age >= 20 && passPort){
//     alert("탑승할 수 있습니다")
// }else {
//     alert("탑승할 수 없습니다")
// }

// ! (NOT) 연산자
// 부정문으로 보면된다, 즉 값을 반대로 바꾸는 것

// let age = Number(prompt("나이를 입력해주세요"));
// let passPort = confirm("여권을 소지하고 계신가요?")
// if(!(age >= 20 && passPort)){
//     alert("탑승할 수 있습니다")
// }else {
//     alert("탑승할 수 없습니다")
// }

// 문제 : 로그인 구현하기 

// 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

// 사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

// 비밀번호 확인 절차는 다음과 같습니다.

// 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
// 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
// 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.

let userName = prompt("사용자 이름을 입력해주세요");
if(userName == "Admin"){
    let passWord = prompt("비밀번호를 입력해주세요");
    
    if(passWord == "TheMaster"){
        alert("환영합니다!")
    }else if(passWord == '' || passWord == null){
        alert("취소되었습니다")
    }else {
        alert("인증에 실패하였습니다")
    }   
}else if(userName == '' || userName == null){
    alert('취소되었습니다')
}else {
    alert('인증되지 않은 사용자 입니다')
}

