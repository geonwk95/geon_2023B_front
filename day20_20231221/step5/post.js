let 매개변수 = JSON.parse( localStorage.getItem("매개변수"));
console.log(매개변수)
글보기(매개변수);

function 글보기(index){ // 매개변수 : (대상)보고자하는 식별번호 // 리턴값 : X

    let boardArray = JSON.parse(localStorage.getItem('boardArray') ) ;
    

    const boardBox = document.querySelector('#boardBox');
    console.log(boardArray)
    // * 조회수 증가
   

    let html = `<div> 작성자 : ${boardArray[index].작성자 } 조회수 : ${boardArray[index].조회수}</div>
                <div> 제목 : ${boardArray[index].제목 }</div>
                <div> 내용 : ${boardArray[index].내용.replaceAll( '\n' , '<br/>') }</div>
                <input onclick="글수정( ${index} )" type="button" value="수정" />
                <input onclick="글삭제( ${index} )" type="button" value="삭제" />
                `;

    boardBox.innerHTML = html;
    return;
}