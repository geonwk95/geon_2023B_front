

// 0. 전연변수 [ 배열 ]
    // - 속성[상태] 마다 배열 하나씩 만들면 배열이 너무 많아져. 관리 힘들어.
    // 객체지향 나오기전... 여러속성들을 하나의 배열에서 관리하고싶다.
        // 1. boardArray = [ ] 
            // - 단점 : 하나의 서로다른 유형의 4가지의 데이터 저장하면 인덱스 관리 힘들다.
        // 2. boardArray = [ "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용" ]
            // - 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분선이 있어야함 [ 구분 문자는 개발자 마음. ]
            // - 임력 데이터에넌 구분 문자가 포함되면 안된다.
            // - 단점 : 분해를 하고 분해후 순서를 기억해야한다.
    // 배열의 요소 구분 ,
    const boardArray = [ ]



    // 1. [C}글쓰기 [ 글쓰기 버튼을 클릭했을때. ]
    function 글쓰기(){  // 매개변수 : X // 리턴값 : X
    
        // 1. HTML로 부터 입력받은 값 가져오기
        const writer = document.querySelector('#writer').value;
        const password = document.querySelector('#password').value;
        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;
    
        // 2. 배열에 저장하기
        // !!!!! 직접 / 구분해서 하나로 만들었는데 이제는 객체로 하나로 만들기.
        const board = {
            작성자 : writer , 비밀번호 : password , 제목 : title , 내용 : content
        };
        board.조회수 = 0; // 객체내 없는 key을 호출시 key 생성.     // 이제 등록했으니까 조회수는 0부터 시작하자.
        boardArray.push( board );   console.log( boardArray );
    
        // 3. 배열에 HTML에 출력하기
        모든글출력();
        //
        document.querySelector('#writer').value="";
        document.querySelector('#password').value="";
        document.querySelector('#title').value="";
        document.querySelector('#content').value="";
        return;
        
    }
    // 2-1. [R]모든글출력 [ 1.js가 열렸을때 2.글쓰기/글수정/글삭제 처리 할때마다 새로고침.]
    function 모든글출력(){ // 매개변수 : X // 리턴값 : X
    
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
    // 2-2. [R]개별글출력. [ 해당 글을 선택했을때. ]
    function 개별글출력( index ){ // 매개변수 : (대상)보고자하는 식별번호 // 리턴값 : X
    
        console.log( index );
    
        const boardBox = document.querySelector('#boardBox');
    
        console.log( boardArray[index].내용.replaceAll( '\n' , '<br/>'));
        // - replaceAll( '교체할문자열','새로운문자열');
        // - \n 을 <br/>로 변경 : <textarea> 에서 줄바꿈처리하면 \n 으로 저장되고 HTML 출력할때 \n 대신에 <br/> 치환
    
        // * 조회수 증가
        boardArray[index].조회수 += 1 ; 모든글출력();

        let html = `<div> 작성자 : ${boardArray[index].작성자 } 조회수 : ${boardArray[index].조회수}</div>
                    <div> 제목 : ${boardArray[index].제목 }</div>
                    <div> 내용 : ${boardArray[index].내용.replaceAll( '\n' , '<br/>') }</div>
                    <input onclick="글수정( ${index} )" type="button" value="수정" />
                    <input onclick="글삭제( ${index} )" type="button" value="삭제" />
                    `;
    
        boardBox.innerHTML = html;
        return;
    }
    // 3. [U]글수정 [ 글수정 버튼을 클릭했을때. ]
    function 글수정( index ){ // 매개변수 : (대상)수정할 식별번호 // 리턴값 : X
        console.log( index );
    
        // 1. 검증[유효성검사] - 패스워드를 입력받아.. 해당 게시물의 패스워드와 동일하면.
        const checkPw = prompt('비밀번호');
        if( checkPw == boardArray[index].비밀번호 ){
            const updateTitle = prompt('수정할 제목');
            const updateContent = prompt('수정할 내용');
            // 수정처리 [ 기존데이터와 새로운데이터 다시 합쳐서 수정.]
            boardArray[index].제목 = updateTitle;
            boardArray[index].내용 = updateContent;

            alert('수정 성공');
            // 새로고침.
            모든글출력();
            개별글출력(index);
        }else{
            alert('패스워드가 다릅니다. 수정불가.')
        }
    
        return;
    }
    // 4. [D]글삭제 [ 글삭제 버튼을 클리했을때. ]
    function 글삭제( index ){  // 매개변수 : (대상)삭제할 식별번호 // 리턴값 : X
        console.log( index );
        const checkPw = prompt('비밀번호');
        if( checkPw == boardArray[index].비밀번호){
    
            boardArray.splice( index , 1);
            alert('삭제 성공');
            // 새로고침
            모든글출력();
            document.querySelector('#boardBox').innerHTML = '';
        }else{
            alert('패스워드가 다릅니다. 삭제불가.')
        }
    
    
    
        return;
    }
    
    /*
        함수 만들때 고민할점.
            1. 언제 실행하는 함수인지?
            2. 함수 안으로 넣을 매개변수?
            3. 함수 밖으로 반환할 값?
            4. 무엇을 실행 하는지?
    */