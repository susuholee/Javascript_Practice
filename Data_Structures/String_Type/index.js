// 문제 1(indexOf)
// 요구사항
// 문자열 "javascript" 안에
// 문자 "a"가 처음 등장하는 위치를 구하시오.
// 결과값은 숫자로 무엇인가?

let str1 = "javascript";
str1.indexOf("a");
console.log(str1.indexOf("a"));

// 문제2 (includes)
// 요구사항
// 문자열 "frontend developer" 에
// 문자열 "end" 가 포함되어 있는지 확인하시오.
// 반환값은 무엇인가?

let str2 = "frontend developer";
str2.includes("end");
console.log(str2.includes("end")); 


// 문제3️ (startsWith)
// 요구사항
// 문자열 "javascript" 가
// 문자열 "java" 로 시작하는지 확인하시오.
// 반환값은 무엇인가?

let str3 = "javascript";
str3.startsWith("java");
console.log(str3.startsWith("java"));

// 문제4️ (endsWith)
// 요구사항

// 문자열 "hello.js" 가
// 문자열 ".js" 로 끝나는지 확인하시오.

let str4 = "hello.js";
console.log(str4.endsWith(".js"));


// 문제5️ (slice)
// 요구사항

// 문자열 "frontend" 에서
// 앞의 5글자만 잘라내시오.

// 결과 문자열은? -> end

let str5 = "frontend";
console.log(str5.slice(5));


// 문제6️ (slice + 음수)
// 요구사항

// 문자열 "image.png" 에서
// 파일 확장자만 추출하시오.

// 결과 문자열은? -> png


let str6 = "image.png";
console.log(str6.slice(-3))
