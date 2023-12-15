// 전역 자료 [ 함수밖에서 선언 ]
const 할일목록 = [ ];   // 할일의 내용을 저장.
const 상태목록 = [ ];   // 할일의 상태를 저장.
// 지역 자료 [ 함수안에서 선언 ]

// 1. 등록 함수 : 매개변수X , 리턴값
function 등록함수(){
    console.log('등록함수()실행');
    //[1.입력] : HTML INPUT으로 부터 입력된 값을 가져온다.
    const content = document.querySelector('#content').value;   console.log( content );
    //[2.처리] : 입력받은 값을 배열에 저장한다.
    할일목록.push( content ); // true:완료 , false
    상태목록.push( false ); // 할일의 상태를 입력받지 않고 초기값을 임의로 false
    console.log( 할일목록 ); console.log( 상태목록 );

    // - 완료후 입력상자 초기화하고 상자초기화
    document.querySelector('#content').value = ``; alert('등록 성공');
    //[3. 출력]
    출력함수();
    

} // f e

// 2. 변경 함수 : 매개변수=변경할 인덱스 , 리턴값
function 변경함수( 변경할인덱스 ){
    console.log('변경함수()실행'+변경할인덱스);
    //[1.입력] X

    //[2.처리] false -> true / true => false
    상태목록[변경할인덱스] = !상태목록[변경할인덱스]; // 기존에 반대를 대입한다. 
    console.log( 상태목록 );
    //[3.출력] // 현재 위에서
    출력함수();
    
} // f e

// 3. 삭제 함수 : 매개변수=삭제할 인덱스 , 리턴값
function 삭제함수( 삭제할인덱스 ){
    console.log('삭제함수()실행'+삭제할인덱스);
    //[1.입력] X

    //[2.처리] 배열에서 요소 삭제 .splice( )
    할일목록.splice(삭제할인덱스, 1 );   // 할일 목록 1개삭제
    상태목록.splice(삭제할인덱스, 1 );   // 상태 목록 1개삭제
    //[3.출력]
    출력함수();
} // f e

// 4. 출력 함수 [ 등록후 , 변경후 , 삭제후 = 배열의 최신상태를 HTML 대입 ]
function 출력함수(){
     //[3.HTML DIV형식 출력]
        // 1.[어디에] todoBottom에
        const todoBottom = document.querySelector('#todoBottom');
        // 2.[무엇을] 배열에 있는 여러 요소들을      JS입장에서 HTML코드는 문자열
        let html = ``; // 초기값은 빈문자열.

            // 1. 배열내 모든 요소를 하나씩 꺼내기
        for( let i = 0 ; i <할일목록.length ; i++ ){    // i는 0부터 마지막인덱스까지 1씩증가
            // html변수에 여러 div 누계
            html += `<div class="todo ${ 상태목록[i] ? 'success' : ''}">  
            <div class="content"> ${ 할일목록[i]} </div>
            <div class="btnBox">
                <input onclick="변경함수( ${ i } )" type="button" value="변경" />
                <input onclick="삭제함수( ${ i } )" type="button" value="삭제" />
            </div>

        </div>`
        

        }console.log(html)
        // 3.[대입] immerHTML 에 저장된 변수를 대입.
        todoBottom.innerHTML = html ;
}