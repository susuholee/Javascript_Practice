// 암시적 형 변환 (Implicit Type Conversion)
// 자바스크립트 엔진이 자동으로 타입을 변환해주는 것을 뜻함

// 문자열 변환
"안녕하세요" +  23;  // 안녕하세요23
true + 123;  // true123
null + "빈값"; // null빈값

// 숫자형 변환
"23" - 2 // 21
"40" * "3" // 120 

"15" > 10    // true   
"6" < "15"  // true 

// 불리언 변환
if ("hello") console.log("실행됨");  // true
if (0) console.log("실행 안 됨");     // false
if ([]) console.log("배열은 true");   // true
if ({}) console.log("객체도 true");   // true

// 명시적 형 변환 (Explicit Type Conversion)
// 개발자가 의도적인 목적을 가지고 데이터 타입을 변환하는 것을 뜻함


// 숫자형 변환
// 숫자형 타입으로 변환하는 함수 
// 1. Number
// 자바스크립트 내장 함수
// 괄호안의 값을 숫자형 타입으로 변환 해주는 함수
// 반드시 숫자여야함 
console.log(Number(2323))  // 2323 반환
console.log(Number('74')); // 74 반환
console.log(Number(0.2)); // 0.2 반환 
console.log(Number(-1900)); // -1900 반환
console.log(Number(true)); // 1 반환
console.log(Number(false)); // 0 반환
console.log(Number(null)); // 0  반환
console.log(Number(undefined)); // NaN 반환
console.log(Number({})); // 객체는 변환 불가
console.log(Number([20])); // 20 반환, 배열은 여러개는 변환 불가


// 2. parseInt()
// parseInt() 함수는 문자열을 정수형으로 변환하는 전역 함수
// parseInt(String, redix)
// 첫 번째 인자로는 문자열, 두 번째 인자는 진수(몇 진수로 변환할건지(선택))
parseInt("10");    // 10
parseInt("10.9");  // 10  (소수점 이하 버림)
parseInt(" 20 ");  // 20  (앞뒤 공백 무시)



// 3. parseFloat()
// parseFloat() 함수는 문자열을 실수(부동소수점)로 변환하는 함수
parseFloat("3.14");      // 3.14
parseFloat("10");        // 10
parseFloat("10.23.2534");      // 10.23 그 이후 .이후는 무시
parseFloat(" 5.5 ");  // 5.5 (공백 무시)

parseFloat("10.5px");    // 10.5  (숫자까지만 읽음)
parseFloat("12.34.56");  // 12.34 (두 번째 '.' 이후는 무시)
parseFloat("abc123");    // NaN   (숫자로 시작 안 함)

// 문자열 변환
// 문자열 타입으로 변환하는 함수 및 메서드

// 1. String()
// 괄호안에 Value를 문자열로 반환하는 함수
// String(Value)
String(12321124); // "12321124"
String(true);  // "true"

// 2. value.toString()
// String과 혼동이 올 수 있지만  String 함수는 전역 함수로 어디서든 사용할 수 있다는 점
// toString은 객체 안에 속해 있는 메서드이며, 전역 함수처럼 사용할 수 없음

let num = 252525252 
console.log(num.toString());

// 3. toFixed()
// 지정한 소수점 자릿수까지 반올림해서 문자열로 반환하는 메서드
// num.toFixed(자릿수)

let num2 = 3.141592;

num2.toFixed(2);  // "3.14"
num2.toFixed(4);  // "3.1416" (4번째 자리에서 반올림)
num2.toFixed(0);  // "3" (소수점 제거)

// 불리언 변환
// true or false 참, 거짓으로 변환하는 것을 뜻함

// Boolean(값)   // 함수로 변환
// !!값          // 이중 부정으로 변환

Boolean(1);     // true
Boolean(0);     // false
Boolean("안녕");  // true
Boolean("");    // false
Boolean(null);  // false


!!"hello";      // true
!!0;            // false
!!undefined;    // false

