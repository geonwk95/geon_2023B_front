/* 
    수정
        1.[식별자] 무엇을 수정할껀지. updatefno
        2.기존데이터 호출
        3.수정처리
*/

document.addEventListener('DOMContentLoaded' , function(){ 수정정보호출(); } );

// [1] 수정할 게시물의 정보를 출력한다.
function 수정정보호출(){

    // 1.누구를
    const fno = JSON.parse(localStorage.getItem('updatefno') );
    // 2. fno에 해당하는 객체 찾기
    const feedList = JSON.parse( localStorage.getItem('feedList') );
        for(let i=0 ; i<feedList.length ; i++ ){
            if( fno == feedList[i].fno){
                // 3. 기존 데이터 대입.
                document.querySelector('textarea').value = feedList[i].fcontent.replaceAll('<br/>','\n');
                document.querySelector('#fileImg').src = feedList[i].fimg;
                return;
            }
        }
}

// [2] 이미지 등록함수 ( 1.input(file)에서 첨부파일을 등록(onchange)할때마다. )
let imgByte = '';
function 이미지등록( event ){  console.log('이미지등록()');
    // [1] 첨부파일input에 등록된 파일을 바이트 가져와서 태그에 출력 ( 첨부파일 이미지 미리보기 기능 )
        // 1. 파일 읽기 클래스[객체 설계도]. new FileReader();
    let 파일읽기객체 = new FileReader(); // 파일읽기 객체 생성
        // 2. 파일을 JS로 읽어들이기. [ 내가 등록한 파일을 ]
    파일읽기객체.readAsDataURL( event.target.files[0] );  console.log( 파일읽기객체 );
        // 3. 읽어온 바이트를 img태그에 출력 
    파일읽기객체.onload = function(){ 
        document.querySelector('#fileImg').src = 파일읽기객체.result;
        imgByte = 파일읽기객체.result; // 이미지바이트를 전역변수에 으로 대입.
    } // o end 
} // f end 