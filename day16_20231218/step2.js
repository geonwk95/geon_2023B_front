/*
    JS 자료형
        1. 숫자             1   vs  2   vs  3
        2. 문자열           " "  vs  ' '  vs  ` `
        3. 불               true    vs  false
        4. undefined        자료데이터 없다.    undefined   vs  " " vs 0
        5. 배열(array)      [ 자료 , 자료 , 자료 ]
                            - 1. [ 숫자 , 문자열 , 불 , 배열 ]
                            - 2. [ 숫자 , 문자열 , 불 , 배열 , 변수 , 상수 , 함수 ]
        6. 함수             function
                            - 1. const/let 변수명 = function(){ }
                            - 2. function 함수명(){ }
        7. 객체(object)     { key : value , key : value , key : value }
                            - 1. {
                                key : 1,
                                key : "유재석"
                                key : true
                                key : []
                                key : function(){}
                                key : {}
                            }
*/ 

// p.246
console.log( { } ); // object
// 1. object 객체를 만들어서 상수에 대입
const product = { 
    제품명 : '7D 건조 망고' , // key '제품명' , value '7D 건조 망고' = 속성 propert 프로페티
    유형 : '당절임' ,
    성분 : '망고 , 설탕 , 메타중아황산나트륨 , 치자황색소',
    원산지 : '필리핀'
}

// 2. 객체 호출
console.log(product);

// 3. 객체내 속성 호출  객체명['keyName'] vs 객체명.keyName : 해당하는 키의 값을 호출
console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);

console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);


// p. 248
const 객체2 ={
    number : 273,
    string : '구름',
    boolean : true,
    array : [52, 273, 103, 32],
    method : function(){ },
    객체3 : { method2 : function(){ }}
}
console.log( 객체2 );   // console.객체 내 log속성에 함수 호출.
// document.querySelector();    // document : 객체네 querySelector속성에 함수 호출
// .(온점) : 접근연산자 : 객체내 속성에 접근.
객체2.method();         // 객체내 속성(메소드) 호출

객체2.객체3.method2();  // 객체내 속성(객체내 속성(메소드2) ) 호출

// p. 249
const pet = {
    name: '구름',
    eat: function(food){
        alert(`${this.name}은/는 ${food}을/를 먹습니다.`);
    },           // this란 ??? 함수내 에서 현재객체내 속성을 호출할때 사용하는 키워드.
                // this.key
    eat2(food){ }   // 함수명이 속성명을 대신한다. 
    
}                
pet.eat('밥');
pet.eat('까르보나라');

// p. 249~250
const student = {}
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'

console.log(student);

// p. 251 : 속성제거
delete student.장래희망;
console.log( student);