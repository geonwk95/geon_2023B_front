

// p. 116 자료형 변환 [ prompt() : 입력받은 내용을 반환하는 알람함수 ]

const input = prompt( 'massage ', '_default' );
    // 코드 실행 순서
    // 1. 실행              prompt( 'massage ', '_default' );     : 클라이언트에게 입력받는 알람함수.
    // 2. 실행 결과         prompt() 결과/반환/리턴된 값
    // 3. 실행 결과 저장    const input = 리턴된 값

alert( input );

// p. 119 2. 불 입력   [ confirm() : 확인/취소 를 반환하는 알림함수 ]
const input2 = confirm('수락하시겠습니다?');
alert( input2 );

// 3. 숫자 자료형으로 변환하기 [ Number() : 문자열 자료형을 숫자형으로 변환 함수 ]
console.log(Number("273"));
console.log(Number("a")); // NaN => not a number // 숫자로 표현할수 없다는 뜻
console.log(Number("true")); // true = 1 , false = 0 // 오류 안남 

// 4. 숫자 연산을 사용해 자료형 변환하기 [ *단 숫자+"문자열" : 연결연산자 조심.. ]
console.log("52"-3);    // 49 [ 자바에선 안됨 , 결과의 자료형이 숫자 로 변환 ]
console.log(true - 1);  // 0 
console.log(true + 1);  // 2

// 5. 문자열 자료형으로 변환하기 [ string() : 1. 문자열로 변환 함수 vs 데이터+""]
console.log( String(52.273)); // 52.273 -> "52.273"
console.log( String(true)); // "true"

console.log( 52.273+"");    // 52.273 -> "52.273" [연결연산자 이용]

// 6. 불 자료형으로 변환하기 [ Boolean() : 불 자료형으로 변환 함수 ]
console.log( Boolean(0));  // false
console.log( Boolean(NaN)); // false
console.log( Boolean(""));  // false
console.log( Boolean(null)); // false
let 변수 = 10 ;     // 값이 있으면 true
console.log( Boolean(변수));   // true

// 7. 논리 부정 연산자를 사용해 자료형 변환하기
console.log(!273);      // 0 -> false , 1 -> true , 273 -> true , !273 -> false
console.log(!!0)        // 0 : true -> false

// p. 124 문제
    // 프로그램 기본 : 입력 -> 처리 -> 결과
    // 웹프로그램 기본 : 프론트엔드HTML[<input>] -> 백엔드JAVA -> 프론트엔드HTML[<TABLE>]

// 1. 입력
const rawInput = prompt('inch 단위의 숫자를 입력해주세요.');
// 2. 실행 처리
const inch = Number(rawInput);
const cm = inch * 2.54

//const cm = rawInput * 2.54; // 연산을 통해서 자동으로 자료형이 반환 
// 3. 출력
alert(`${inch}inch는 ${cm}cm 입니다.`)

// 앞으로의 웹개발 방향
function 변환기능코드가지고있는상자(){ 
    const 인치 = document.querySelector('input');
    console.log(인치);
    console.log(인치.value);
            // document : HTML 뜻
            // query    : 질문 / 요청
            // Selector : 선택
                // document.querySelector() : HTML에 요소 선택.
                // HTML 요소를 JS의 변수/객체 로 가져오기 함수
    // -------------> 처리 --------------> java에게 통신으로 보내기
    // 결과 = input에 입력받은 value를 h3에 대입
    document.querySelector('h3').innerHTML = `${인치.value * 2.54}cm`
}
    // function 함수명( 매개변수 ){ 구현할기능코드 }
// 변수 = let , 상수 = const 함수 = function    선언 약속/규칙/문법


// p.125 확인문제 3번
const cm정수 = prompt("cm 단위의 숫자를 입력해주세요.");
const 인치 = Number(cm정수) / 2.54;
console.log(`${cm정수}cm는 ${인치}inch 입니다.`);

//4번 문제
let 반지름 = Number(prompt('원의 반지름을 입력해주세요.'));

console.log(` 원의 넓이 : ${3.14 * 반지름 * 반지름} / 원의 둘레 : ${2 * 3.14 * 반지름} `);

//5번문제
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러*1207;

console.log(`달러 : ${달러} -> 원화 : ${원화}`)

