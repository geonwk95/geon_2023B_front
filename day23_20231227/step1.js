
// [p.331] 키보드 이벤트

// 1. HTML 모두 로드 되었을때.
document.addEventListener('DOMContentLoaded' , function(){
    // 2. 특정 html 요소를 객체로 호출
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');

    // 3. textarea 요소의 이벤트 등록
    textarea.addEventListener( 'keyup' , function( e ){
        // *event/e : 매개변수로 이벤트의 정보('keyup')를 받습니다.
        console.log(e);         
        console.log(e.code);    // 입력한 키의 문자열표시
        console.log(e.keyCode); // 입력하 키의 숫자표시
        console.log(e.altKey);  // [조합키] alt 눌렀는지 불자료형식으로 표시
        console.log(e.ctrlKey); // [조합키] ctrl 눌렀는지 불자료형식으로 표시
        console.log(e.shiftKey);// [조합키] shift 눌렀는지 불자료형식으로 표시
        
        // 4. 글자수
        const length = textarea.value.length;
        // 5. 대입
        h1.textContent = `글자 수:${length}`;
    })
})