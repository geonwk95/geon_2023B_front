// p. 175
const todos = ['우유 구매','업무 메일 확인하기','필라테스 수업']
// 1.
for( let i = 0 ; i < todos.length ; i++ ){
    console.log( todos[i]);
}
// 2. 
for( let i in todos ){ console.log( todos[i] );}
// 3.
for( let v of todos ){ console.log( v ); }

// 4.
//let i = 0;
//while( i < todos.length ){ console.log(todos[i]); i++;}


// p.181 무한루프
// let j = 0; while( true ){ alert(`${j}번째 반복입니다.`); j++; }
// for( let j = 0 ; true ; j++){ alert(`${j}번째 반복ㅇㅂ니다.`); }
// for( ; ; ){ alert(` 번째 반복입니다.`); }
// while( 1 ){ alert(`무한반복`); }

/*
let p = 0;
while( confirm('계속 진행하시겠습니다?') ){
    // 확인 = true , 취소 = false
    alert(`${p}번째 반복입니다.`);
    p++;
}
*/

// p.184
/*
for( let m = 0; true ; m++){
    alert(`${m}번째 반복입니다.`);
    // 조건에 따른 무한루프 종료 break;
    const isContinue = confirm('계속 할까요?');
    if( !isContinue ){break;} // 가장 가까운 for/while 탈출
}
*/

// p. 185
for( let z = 0 ; z < 5 ; z++){
    continue; // 반복 작업을 멈추고 반복문의 처음으로 이동
    alert(z);
}

// p.185 1~10까지 짝수만 누적합계 구하기
let output = 0;
for( let m = 1 ; m <= 10 ; m++ ){
    // 만약에 m번째가 홀수 이면
    if( m % 2 === 1){ continue; } // 다시 반복문으로.
    // 아니면 짝수 값을 누계
    output += m;
}
console.log( output );