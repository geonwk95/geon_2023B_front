글목록();

function 글목록(){ // 매개변수 : X // 리턴값 : X

    
    const boardArray = JSON.parse(localStorage.getItem( 'boardArray' ) );
    console.log(boardArray);
    const tablebody = document.querySelector("table>tbody");

    let html = ''; console.log( html );
    for( let i = 0 ; i < boardArray.length ; i++ ){
        console.log( boardArray[i] );
        // 저장할때 4가지 속성/상태 값들을 "/" 기준으로 하나로 묶었으니까. 다시 "/" 기준으로 분리[ split ] 하자.
        console.log( boardArray[i] );
        html += `<tr onclick="개별글출력( ${i} )" >
        <th>${ i }</th>
        <th>${ boardArray[i].제목 }</th>
        <th>${ boardArray[i].작성자 }</th>
        <th>${ boardArray[i].조회수 }</th>
    </tr>`
    }

    tablebody.innerHTML = html;

    return;
    
}

function 개별글출력( 매개변수 ){
    /* console.log(매개변수) */
    localStorage.setItem( "매개변수" , 매개변수 )
    location.href ="post.html";
}