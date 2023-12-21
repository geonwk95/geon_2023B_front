    /* 
        객체 : 속성과 메소드를 가질 수 있는 모든 것
            형태
                객체 선언 const object = { }
                객체내 속성추가 : object.새로운속성명 = 값;
                객체내 속성의 값 호출 : object.속성명
                객체내 속성의 값 변경 : object.기존속성명 = 값;
            - 배열도 객체
            - 함수도 객체
            - 기본자료형( 숫자 , 문자열 , 불) 객체 아니다.
                1. 기본자료형 ---> 객체로 변환 ( 객체 자료형 , 래핑 클래스 )
                    - 왜?? 객체로 활용하려고 ( 속성/메소드를 사용하니까. -- 부가자료--부가기능 첨부 )

                2. 
                    - new : 객체(인스턴스) 를 만들때 사용하는 키워드
                    new Number( 숫자자료형 )
                    new String( 문자자료형 )
                    new boolean( 불 자료형 )
                3. 문자열 타입[ 일시적 승급 ]
                    - 속성을 추가는 할수 없지만. js만든 사람이 제공하는 속성은 사용이 가능하다.
    */

// p. 257
const a = [ ]; // [ ] 대괄호를 사용했으니 배열
a.sample = 10; // 객체.새로운속성명 = 값;   // 객체에 속성추가
console.log(a.sample);
console.log( typeof a);     // typeof 상수/변수 ; 해당 상수/변수 저장된 자료의 타입 확인
console.log( Array.isArray(a) ) // Array.isArray( 상수/변수 ) : 해당 상수/변수에 자료가 배열 자료형인지 확인 

function b(){}
b.sample = 10;

console.log(b.sample);
console.log( typeof b); // 함수는 객체의 특성을 완벽하게 가지고 있음. [ js ]

// p. 258
const c = 273;
c.sample = 10;
console.log( c.sample );    // undefined : 기본자료형[객체가 아니므로] 속성을 추가할수 없다.

const d = '안녕하세요';
d.sample = 10;
console.log( d.sample );     // undefined : 기본자료형[객체가 아니므로] 속성을 추가할수 없다.
console.log( d.length );     // ????????? 일시적 승급( 기본자료형을 객체자료형으로 승급 )

const e = true;
e.sample = 10;
console.log( e.sample );     // undefined : 기본자료형[객체가 아니므로] 속성을 추가할수 없다.

// p. 260
const f = new Number( 273 );
console.log( f );           // 273[x] ---> { 273 }
f.sample = 10;
console.log( f );           // { 273 , sample: 10 }  // 객체는 키와값 = 속성
console.log( f.valueOf() ); // 273  객체명.valueOf()    // 속성이 아닌 값 추출.

// p. 261
console.log( '안녕하세요'.length );
console.log( '안녕하세요'.anchor('aaa') );  // 문자열 기본자료형도 .온점 메소드 사용가능하다.
console.log( '안녕하세요'.bold('aaa') );    

// p. 263
Number.prototype.sample = 10;
const i = 273;
console.log( i.sample );

const j = 100;
console.log( i.sample );
      