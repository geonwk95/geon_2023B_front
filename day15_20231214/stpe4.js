const 날짜 = [ ];
const 항목 = [ ];
const 금액 = [ ];
const 비고 = [ ];

function 등록함수(){        // f s
    console.log('등록함수()실행')

    // 입력
    const dateValue = document.querySelector('#dateValue').value; console.log(dateValue)
    const textValue = document.querySelector('#textValue').value; console.log(textValue)
    const moneyValue = document.querySelector('#moneyValue').value; console.log(moneyValue)
   
    // 처리
    날짜.push( dateValue );     console.log(날짜);
    항목.push( textValue );     console.log(항목);
    금액.push( moneyValue );    console.log(금액);
    document.querySelector('#dateValue').value = '';  console.log(dateValue)
    document.querySelector('#textValue').value = '';  console.log(textValue)
    document.querySelector('#moneyValue').value = '';  console.log(moneyValue)

    // 출력
    출력함수();
    
} // f e

function 출력함수(){     // f s

    let 등록하는div = ``;

    for(let i = 0 ; i < 날짜.length ; i++ ){
    
        등록하는div += `  <div class="wrapBot">
        <div>
            <h3>${날짜[i]}</h3>
        </div>
        <div>
            <h3>${항목[i]}</h3>
        </div>
        <div>
            <h3>${금액[i]}</h3>
        </div>
        <div>
            <h3><input onclick="삭제함수( ${ i } )" type="button" value="삭제" /></h3>
        </div>
    
    </div>
`
}   
    document.querySelector('#table').innerHTML = 등록하는div

} // f e

function 삭제함수(삭제할인덱스){         // f s
    console.log('삭제함수실행()'+삭제할인덱스);
날짜.splice(삭제할인덱스,1);
항목.splice(삭제할인덱스,1);
금액.splice(삭제할인덱스,1);

출력함수();
} // f e 

function 총합계(){
    
}