/* 
    설계
        1. 경험
        2. 기능 실행순서
            [키오스크 = 사용자입장]
                - 카테고리선택 -> 제품 선택 -> 장바구니 담기 -> 결제
            [포스기 = 관리자입장]
                - 결제 내역 ( 주문상태 )
                - 카테고리 추가/삭제 기능
                - 제품 추가/삭제 기능
        3. 기능에 필요한 메모리(저장-DB설계) 설계
            카테고리 = [ 
                { cno : 1 , cname : '신제품(NEW)'} ,
                { cno : 1 , cname : '프리미엄'} ,
                { cno : 1 , cname : '와퍼&주니어'} ,
                { cno : 1 , cname : '치킨&슈림프버거'} ,
                { cno : 1 , cname : '올데이킹&킹모닝'}
            ]
                - 관리자가 해당 배열을 추가/삭제

        4. 배열 안에 있는 데이터를 식별할때 기준점.
            사람 = { 이름 : '유재석' , 나이 : 40세 , 직업 : 강사 } - 이름으로 식별시 동명이인 존재 하면 문제점 발생. [ 중복이 절대로 없어야함.]
            사람 = { 주민등록번호 : '951002-1 이름 : '유재석' , 나이 : 40세 , 직업 : 강사 } - 주민등록은 절대로 중복이 없다.

            - 인덱스 VS 식별코드생성 VS 이름    !!! 중복이 없어야 한다.
                '신제품(NEW)' ---> { cno : 1 , cname : '신제품(NEW)'} 
 */          

/* 백엔드로부터 데이터를 받았다고 치고 */
/* 전역변수 */
/* 1. 카테고리 */
let categoryArray = [ 
    { cno : 1 , cname : '신제품(NEW)'} ,
    { cno : 2 , cname : '프리미엄'} ,
    { cno : 3 , cname : '와퍼&주니어'} ,
    { cno : 4 , cname : '치킨&슈림프버거'} ,
    { cno : 5 , cname : '올데이킹&킹모닝'} ,
]
/* 2. 제품목록  *( 제품이미지명은 사진파일명이랑 동일하게 ) */
let productArray = [
    { pno : 1 , pname : '큐브 스테이크 와퍼' , pprice : 19000 , pimg : '큐브스테이크와퍼.png' , cno : 1  } ,
    { pno : 2 , pname : '더블비프불고기버거' , pprice : 25000 , pimg : '더블비프불고기버거.png' , cno : 1  } ,
    { pno : 3 , pname : '불양양 맥시멈3' , pprice : 170000 , pimg : '불양양맥시멈3.png' , cno : 5  } ,
]
/* 3. 카트목록 */
let cartArray = [ ] // 카트목록. ( 인덱스 vs 식별번호 )


// - [함수1] : 카테고리 출력하는 함수 ( 실행조건 : js 열렸을때 , 카테고리 클릭했을때. )
printCategory( 1 ); // 함수 실행. // 최초로 실행시 선택카테고리 con = 1 가정

function printCategory( selectCno ){ // 함수 선언  // 매개변수 : (내가 선택한 카테고리번호)함수안으로 들어온 변수.
    console.log('printCategory()함수')
    // 1. 어디에
    const categoryUl = document.querySelector('#header>ul');
    // 2. 무엇을
    let html = '';
        // 2-1 카테고리배열에 존재하는 카테고리객체들을 모두 li형식으로 변환해서 
        for( let i = 0 ; i < categoryArray.length ; i++ ){
            html += `<li onclick="printCategory(${ categoryArray[i].cno })"
                        class="${ categoryArray[i].cno == selectCno ? 'selectMenu' : '' }" >
                        ${ categoryArray[i].cname }
                     </li>`
            console.log(categoryArray.length);
        }// f e
    // 3. 출력
    categoryUl.innerHTML = html;
    // 4. 제품 출력
    printProduct( selectCno ); // 카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    // 왜?? 제품출력시 모든제품 출력이 아니고. 선택된 카테고리번호의 일치한 제품만 출력해야 되니까.

    

    // - [함수2] : 제품 출력하는 함수. ( 실행조건 : 카테고리출력 되었을때 )
    function printProduct ( selectCno ){ // 함수 선언 // 전체출력X // 내가 선택한 카테고리[부모]의 제품[자식]만.
        console.log(selectCno);

        // 1. 어디에
        const productBox = document.querySelector('#productBox');
        // 2. 무엇을
        let html = '';
            // 지식요소에서 내가 선택한 카테고리번호 와 일치한 제품을 찾아서 div화
            for( let i = 0 ; i < productArray.length ; i++ ){
                // 만약에 i번째 제품의 cno와 내가선택한 cno와 같으면.
                // 천단위쉼표 함수 : 데이터.toLocaleString()
                if( productArray[i].cno == selectCno ){
                    html += `<div onclick="setCart( ${ productArray[i].pno } )" class="product">
                                <img src="img/${ productArray[i].pimg}" />
                                <div class="pinfo">
                                    <div class="pname"> ${productArray[i].pname} </div>
                                    <div class="pprice"> ${productArray[i].pprice.toLocaleString() }원 </div>
                                </div>    
                             </div>`
                } // if e
            }   // f e
        // 3. 출력
        productBox.innerHTML = html;
    } // f e
}


// - [함수 3] 제품 선택/클릭 시 장바구니에 담아(제품담아[pno])주는 함수. ( 실행조건 : 제품을 클릭했을때. )
function setCart( selectPno ){ // - 함수 선언
    console.log("setCart()" + selectPno);
    // 1. 입력
    // 2. 처리
    cartArray.push(selectPno);
    // 3. 출력
    printCart();
}


// - [함수4] 카트에서 x버튼을 클릭시 카트에서 삭제 ( 실행조건 : x버튼을 클릭했을때. )
function cartDelete( deleteIndex ){
    // 1. 입력 --> 매개변수로 선택된 삭제인덱스.
    // 2. 처리 --> 배열에서 해당 인덱스 삭제
    cartArray.splice( deleteIndex , 1 );
    // 3. 출력 --> 카트상태 새로고침..
    printCart();
} // f e

// - [함수5] 카트의 현재 상태를 출력하는 함수 ( 실행조건 : 1.제품을 선택했을때. 2.제품을 삭제했을때. )

function printCart(){
      // 1. 어디에
      const cartBottom = document.querySelector('#cartBottom');
      // 2. 무엇을
      let html = '';

          let totalPrice = 0 ; // 카트내 제품의 총 금액.
          let cartCount = cartArray.length; // 카트내 pno 개수.

          // 카트목록에 있는 모든 제품번호 출력
          for( let i = 0 ; i < cartArray.length ; i++ ){
              // 0번 인덱스부터 마지막인덱스까지 하나씩 증가하면서 출력
              // - 해당 i번째 pno 제품의 정보찾기.
              for( let j = 0 ; j < productArray.length ; j++ ){
                  if( cartArray[i] == productArray[j].pno ){
                      // - html div 누적
                      html += `<div class="citem">
                                  <div>${ productArray[j].pname }</div>
                                  <div>${ productArray[j].pprice.toLocaleString() }원</div>
                                  <span onclick="cartDelete( ${i} )">X</span>
                              </div>`
                          // 총합계 누적
                          totalPrice += productArray[j].pprice; // j번째의 제품 가격을 총합계 에 더하기
                  } // if e
              } // f e
              
          } // f e
          
      // 3. 출력
      cartBottom.innerHTML = html;
      // 3. 개수 , 총가격
      document.querySelector('#count').innerHTML = cartCount;
      document.querySelector('#total').innerHTML = totalPrice.toLocaleString()+"원";
}

