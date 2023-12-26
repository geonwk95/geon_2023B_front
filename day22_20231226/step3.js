




// 2.
document.addEventListener('DOMContentLoaded' , function(){

    console.log( document.querySelector('img'));
    // 1. class가 'rect' 인 요소를 여러개 호출
    const rects = document.querySelectorAll('.rect');
    // 2. rects/배열 하나씩 순서대로 호출 반복
    for( let index = 0 ; index < rects.length ; index++ ){
        const width = ( index + 1 ) * 100
        const src = `http://placekitten.com/${width}/250`;
        rects[index].setAttribute( 'src' , src );

    }

    const divs = document.querySelectorAll('body>div');
    for( let i = 0 ; i < divs.length ; i++ ){
        console.log( i , divs[i] );
        const val = i * 10;
        divs[i].style.height = `10px`;
        divs[i].style.backgroundColor = `rgba(${val},${val},${val})`;
    }

    

    const header = document.createElement('h1');

        header.textContent = '문서 객체 동적으로 생성하기';
        header.setAttribute('data-custom' , '사용자 정의 속성');
        header.style.color = 'white';
        header.style.backgroundColor = 'black';

    document.body.appendChild(header);
    console.log(header);




})