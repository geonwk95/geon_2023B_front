/* 
    변수/상수 : 자료를 저장해서 호출을 여러번 가능[재활용]
    함수 : 코드를 저장해서 호출을 여러번 가능[재활용]

*/




// if문 연습문제
    // prompt 대신에 input으로 입력받기
    // 풀이 결과를 console.log 대신에 span 에 출력

    // 참고
    // 1.HTML 마크업을 JS변수로 가져오는 함수.
    // document.querySelector('마크업 또는 #id명 또는 .class명')
    // 2. .value 속성 값 가져오기
    // document.querySelector('마크업 또는 #id명 또는 .class명').value
    // 3. .innerHTML 속성 이용한 HTML에 출력
    // 
// 문제 1 : 3개 점수를 각 input으로 입력받아 총점과 평균 span에 출력하시오.

function 연습버튼을클릭했을때실행되는코드모음상자(){
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input1').value;
    let value3 = document.querySelector('#input1').value;
    let sumValue = value1+value2+value3;
    let avgValue = sumValue/3;
}
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