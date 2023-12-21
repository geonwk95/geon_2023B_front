function 글쓰기(){  // 매개변수 : X // 리턴값 : X
    
    // 1. HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // 2. 배열에 저장하기
    // !!!!! 직접 / 구분해서 하나로 만들었는데 이제는 객체로 하나로 만들기.
    const board = {
        작성자 : writer , 비밀번호 : password , 제목 : title , 내용 : content , 조회수 : 0
    };
    /* board.조회수 = 0; // 객체내 없는 key을 호출시 key 생성.     // 이제 등록했으니까 조회수는 0부터 시작하자. */
    let boardArray = JSON.parse(localStorage.getItem('boardArray') ) ;   // 기존 배열 생성

    console.log(boardArray);

    if( boardArray == null ){
        boardArray = [];  // 배열을 새로 만들어준다.
    }
    console.log(boardArray);
    boardArray.push(board);

    localStorage.setItem( 'boardArray' , JSON.stringify(boardArray) );
    console.log(boardArray);

    location.href="list.html"
}