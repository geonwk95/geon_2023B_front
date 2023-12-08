//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
          
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력

//문제 3 
function 문제3함수(){ //f 시작
    // 입력
    let value1 = Number(document.querySelector('#input1').value); console.log(value1);
    let value2 = Number(document.querySelector('#input2').value); console.log(value2);
    let value3 = Number(document.querySelector('#input3').value); console.log(value3); 
    // 처리
    let max = value1; // 첫번째 값을 가장 크다고 가정.
    // 만약에 max의 값보다 value2의 값이 더 크면 max에 value2 값을 대입/수정
    if( max < value2 ){ max = value2; }
    if( max < value3 ){ max = value3; } // 위에 조건을 충족해도 현재 조건도 검사를 해야 하
    // 출력
    document.querySelector('#result').innerHTML = `${max}`
} // f 끝 [ 3번문제 함수 끝 ]

//문제 4 
function 문제4함수(){ // f 시작
    // 입력
    let value1 = Number(document.querySelector('#input1').value); console.log(value1);
    
    // 처리
    let result = '';
    if( value1 >= 90 ){ result = '합격';} // 만약에 입력받은 값이 90보다 이상이면
    else{ result = "불합격" }             // 90보다 미만이면
    // 출력
    document.querySelector('#result').innerHTML = `${ result }`
} // f 끝

//문제 5
function 문제5함수(){ // f 시작
    // 입력
    let value1 = Number(document.querySelector('#input1').value); console.log(value1);
    // 처리
    let result = '';
    if( value1 >= 90 ){ result = 'A등급'}
    else if( value1 >= 80 ){ result = 'B등급'}
    else if( value1 >= 70 ){ result = 'C등급'}
    else{ result = '재시험'};
    
    // 출력
    document.querySelector('#result').innerHTML = `${ result }`
} // f 끝