
for(let i = 0 ; i < 5 ; i++ ){
// - let i는 0부터 5미만 까지 1씩증가 하면서 console.log 출력할꺼야. [0 1 2 3 4  총 5회 ]   
    console.log(` ${ i }번째 반복입니다.`)
}

let output = 0;
for( let i = 1 ; i <= 100 ; i++){
// - let i는 1부터 100이하 까지 1씩증가 하면서 output에 i를 더하는 반복 실행 [총 100회]
    output += i ; // vs output = output + 1;
    // output에 i를 더한 값을 output에 저장.
    console.log(` ${i}회 output : ${output}`);
}
console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`) // 5050

const todos = ['우유구매' ,'업무 메일 확인하기' ,'필라테스 수업' ]
    // 인덱스 : 0 , 1 , 2 // 길이 : 3
for( let i = 0 ; i < todos.length ; i++ ){
// - i는 0부터 todos배열의 마지막인덱스까지 1씩증가 하면서 console.log 반복 실행.
    console.log(`${i}번째 할 일 : ${todos[i]}`);
    // i는 반복변수 : 현재 반복되고 있는 변수의상태 저장
    // 인덱스 대신에 i 활용.
}

//역순
for( let i = todos.length -1 ; i >= 0 ; i-- ){
// - i는 마지막 인덱스부터 0까지 1씩감소 하면서 console.log 반복 실행.
    console.log(`${i}번째 할 일 : ${todos[i]}`);
}

let outPrint = '';  // 공백이 저장된 변수

for( let i = 1 ; i <= 10 ; i++ ){
    outPrint += ` ${i} `; 
}
console.log( outPrint );


outPrint = ''; // 위에서 사용했던 변수 공백으로 수정.
for( let i = 1 ; i <= 10 ; i++ ){
    outPrint += `<li> ${i} </li>`;
}
document.querySelector('ul').innerHTML = outPrint;


let sum = 0; // 반복전에는 누적합이 0
for( let i = 1 ; i <= 10 ; i++ ){
    sum += i; // i를 sum에 더한후 sum에 대입
}

/*
    반복문 순서도
        초기값 :    i = 1   ,   sum = 0
        for 시작
            i               조건[i<=10]         실행문[sum += i]        sum            증감식[i++]
            i = 1           true                0+1 => 1               sum = 1          i = 2
            i = 2           true                1+2 => 3               sum = 3          i





*/ 


// 1부터 100까지 7배수 누적합계.
    // - 1. i는 0부터 100까지 7씩증가
sum = 0;
for( let i = 0 ; i<=100 ; i+=7){
    sum += i;
}
console.log(`1~100까지 7배수 합 : ${ sum }`);
    // - 2. i는 1부터 100까지 7배수 i%7 == 0
sum = 0;
for( let i = 1 ; i<=100 ; i++){
    if( i % 7 == 0){sum += i ;} // 만약에 i가 나누기 7을 했을때 나머지가 0 이면 i는 7배수.
;}

// for 중첩
for( let 부모 = 1 ; 부모<=5 ; 부모++){
    // - 부모는 1부터 5이하까지 1씩증가 반복    [총 5회전]
    console.log(`===== 부모: ${ 부모 } =====`)
    for( let 자식 = 1 ; 자식<=3 ; 자식++){
        // - 자식은 1부터 3이하까지 1씩증가 반복 [ 총 3회전 => * 상위for => 15회전 ]
        console.log(` ${ 부모 } 의 자식 : ${ 자식 }`);
    } // for2 e

} // for1 e

// 구구단.
    // 1. 2단
const 단 = 2;
for( let 곱 = 1 ; 곱<=9 ; 곱++){
    // - 곱은 1부터 9까지 1씩 증가.
    console.log( ` ${단} X ${곱} = ${ 단*곱 }` );
}

for ( let dan = 2 ; dan<=9 ; dan++){ console.log(`단:${dan}`)} // 단 만들기 2 ~ 9

for( let gob = 1; gob<=9 ; gob++){ console.log(`곱 :${gob}`)}   // 곱 만들기 1 ~ 9

for ( let dan = 2 ; dan<=9 ; dan++){

    for( let gob = 1; gob<=9 ; gob++ ){
        console.log(` ${dan} X ${gob} = ${ dan*gob }`);
    } // 2 for

} // 1 