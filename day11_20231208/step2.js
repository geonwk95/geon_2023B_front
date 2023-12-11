// p. 131 if조건문
    // 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    // 가장 일반적으로 조건문 : IF
    /*
        형태
        1. 참일때만 실행
            if( boolean 값이 나오는표현식){불 값이 참일 때 실행코드;}
        2.   참 또는 거짓일때 조건 추가
            if( boolean 값이 나오는표현식){불 값이 참일 때 실행코드;}
            else{ 거짓 일때 실행코드; }
        3. 참 또는 거짓일때 조건추가
            if( T/F ){
                if( T/f ){ }
                else{ }
            }else{
                if( T/F ){}
                else{ }
        4. 다수 조건 일때 [결과 1개] 
                if( 조건1 ){ }
                else if( 조건2 ){ }
                else if( 조건3 ){ }
                else if( 조건4 ){ }
                else{ }
        }
    */

// 1.
if( 273 < 100 ){
    console.log( '273 < 100 => true'); // if 시작 ,실행x [ 조건이 false 이므로 ]
}   // if 끝
console.log('1종료') // 실행 [ 조건문과 상관이 없어요. 왜 {} 밖이니까. ]

// 2.
const date = new Date(); // new Date(); 현재시간을 알려주는 코드[클래스 : 미리 만들어진 코드]
    console.log( date );
const hour = date.getHours();   // 현재시간.getHouers() : 현재시간에서 시 만 반환 함수.
    console.log( hour );

    // 1. 만약에 현재 시 가 12보다 작으면 오전
if( hour < 12 ){ console.log('오전입니다.');}
    // 2. 만약에 현재 시 가 12보다 이상이면 오후
if( hour >= 12 ){ console.log('오후입니다.');}

// 3. p. 134

if ( hour < 12 ){ console.log('오전입니다.');}
else{ console.log('오후입니다.');}

// 4. p. 135
if( hour < 11 ) // 11시 미만
{ console.log('아침 먹을 시간입니다.');}
else{ // 11시 이상 [if의 반대]
    if( hour < 15 ){ // 11시 이상이면서 15시 미만.
        console.log('점심 먹을 시간입니다.');
    }else{ // 11시 이상이면서 15시 이상
        console.log('저녁 먹을 시간입니다.')
}   // 두번째 if 끝
}   // 첫번째 if 끝

// 5. p. 137
if( hour < 11 ){ console.log('아침 먹을 시간입니다.');}
else if( hour < 15 ){ console.log('점심 먹을 시간입니다.');} 
else{console.log('저녁 먹을 시간입니다.');} // 결과 1개

    // vs

if( hour < 11 ){ console.log('아침 먹을 시간입니다.');}
if( hour < 15 ){ console.log('점심 먹을 시간입니다.');}
else{console.log('저녁 먹을 시간입니다.');} // 결과 2개





