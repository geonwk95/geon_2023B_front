/*
let output = ``;

// 문제1) 입력받은 수 만큼 * 출력 
const value = Number( prompt('문제1 수 입력 ; ') );
for( let i = 1 ; i <= value ; i++){
    // - i는 1부터 입력받은 수까지 1씩 증가
    output += `*`;
}   // f e
console.log( output );

// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
output = ``;

const value2 = Number( prompt('문제2 수 입력 ') );
for( let i = 1 ; i <= value2 ; i++){
    output += `*`
    // 만약에 i가 3배수이면 줄바꿈처리.
    if( i % 3 == 0 ){ output +=`\n`; } //   \n : 제어문자 
}
console.log( output );

// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = ``;

const line3 = Number( prompt('문제3 줄수 : ') );
for( let i = 1 ; i <= line3 ; i++ ){ // f1 s [행]

    // 별찍기
    for( let s = 1 ; s <= i ; s++ ){ // f2 s [열]
         output += `*`;}    // f2 e

    // 줄바꿈
    output += `\n`   
}   // f1 e
console.log( output );

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
output = ``;

const line4 = Number( prompt('문제4 줄수 : ') );
for( let i = 1 ; i <= line4 ; i++ ){ // f1 s [행]

    // 별찍기
    for( let s = 1 ; s <= line4-i+1 ; s++ ){ // f2 s [열]
        output += `*`;} // f2 e

    // 줄바꿈    
    output += `\n`
}   // f1 e
console.log( output );

// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = ``;

const line5 = Number( prompt('문제5 줄수 : ') );
for( let i = 1 ; i <= line5 ; i++ ){ // f1 s [행]
    // [공백]
    for( let b = 1 ; b <= line5-i ; b++){ output += ` `};
    // [별]
    for( let s = 1 ; s <= i ; s++){ output += `*`}; 
     // 줄바꿈    
     output += `\n`
} // f1 e
console.log( output );

// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = ``;

const line6 = Number( prompt('문제6 줄수 : ') );
for( let i = 1 ; i <= line6 ; i++ ){ // f1 s [행]
    // [공백]
    for( let b = 1 ; b <= i-1 ; b++){ output +=` `};
    // [별]
    for( let s = 1 ; s <= line6-i+1 ; s++){ output +=`*`};

     // 줄바꿈    
     output += `\n`
} // f1 e
console.log( output );

// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = ``;
const line7 = Number( prompt('문제7 줄수 : ') );
for( let i = 1 ; i <= line7 ; i++ ){ // f1 s [행]
    // [공백]
    for( let b = 1 ; b <= line7-i ; b++){ output += ` `};
    // [별]
    for( let s = 1 ; s <= 2 * i - 1; s++){ output +=`*`}
 

         // 줄바꿈    
     output += `\n`
}
console.log( output );

// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]

output = ``;
const line8 = Number( prompt('문제8 줄수 : ') );
for( let i = 1 ; i <= line8 ; i++ ){ // f1 s [행]
  // [공백]
  for( let b = 1 ; b <= i-1 ; b++){ output +=` `};
    // [별]
    for( let s = 1 ; s <= (line8-i+1)*2-1; s++){ output +=`*`}


        // 줄바꿈    
    output += `\n`
}
console.log( output );


*/
/*
// 문제9) 입력받은 줄(짝수만) 수 만큼 * 출력  [ ex) 10 ]
let output = ``;
const line9 = Number( prompt(' 문제9 줄수 : ') );
for( let i = 1 ; i <= line9/2 ; i++ ){ // f1 s [행]
    // [공백]
    for( let b = 1 ; b <= line9/2-i ; b++){ output += ` `};
    // [별]
    for( let s = 1 ; s <= 2 * i - 1; s++){ output +=`*`}

     // 줄바꿈    
     output += `\n`
}
for( let i = 1 ; i <= line9/2 ; i++ ){ // f1 s [행]
    // [공백]
    for( let b = 1 ; b <= i-1 ; b++){ output +=` `};
      // [별]
      for( let s = 1 ; s <= (line9/2-i+1)*2-1; s++){ output +=`*`}

       // 줄바꿈    
    output += `\n`
} 
    
    console.log( output );
*/

// 문제10) 입력받은 줄(홀수만) 수 만큼 * 출력  [ ex) 7 ]
/*
output = ``;
const line10 = Number( prompt('문제10 줄수 : ') );
//[행]      <tr>
for( let r = 1 ; r<=line10 ; r++ ){
    //[열]      <td>
    for( let c = 1 ; c<=line10 ; c++  ){
        // [ 조건1  = 행과 열이 같으면 별 ] 
        if( r == c ){ output += `*`; }
        // [ 조건2 = 행과 열이 더한 값이 입력받은값+1 ]
        else if( r+c == line10+1 ){ output += `*`; }
        // 아니면 공백
        else{ output += ` `;  }
    }
    // 
    output += `\n`;
} // for end 
console.log( output );
*/
// 문제10-2
function 문제10(){ // f s
    // [1.입력]
    const line = Number( document.querySelector('#line10').value );
    // [2.처리]
    let html = ``; 
        // [행]
        for( let r = 1 ; r<=line ; r++ ){
            html += `<tr>`; // 행 시작 
            // [열]
            for( let c = 1 ; c<=line; c++ ){
                if( c == r ){ html += `<td>★</td>` }
                else if( c+r == line+1 ){ html += `<td>★</td>` }
                else{ html += `<td> </td>`}
            }
            html += `</tr>`;  // 행 끝
        }
    // [3.출력]
    const tableObj = document.querySelector('#resultTable');
    tableObj.innerHTML = html;
} // f end 

// 문제9-2
function 문제9_2(){ 
    // 입력
    const line9 = Number( document.querySelector('#line9').value );
    // 처리
    let html = ``;
        //[행]
        if(line9%2 == 0){let html = `<tr>`;
        for( let i = 1 ; i <= line9/2 ; i++ ){ // f1 s [행]
            // [공백]
            for( let b = 1 ; b <= line9/2-i ; b++){ html += `<td> </td> `};
            // [별]
            for( let s = 1 ; s <= 2 * i - 1; s++){ html +=`<td>★</td>`}
            
            // 줄바꿈    
             html += `</tr>`
            }
            for( let i = 1 ; i <= line9/2 ; i++ ){ // f1 s [행]
            // [공백]
            for( let b = 1 ; b <= i-1 ; b++){ html +=`<td> </td> `};
            // [별]
            for( let s = 1 ; s <= (line9/2-i+1)*2-1; s++){ html +=`<td>★</td>`}
            
            // 줄바꿈    
            html += `</tr>`
            
        }
            // 출력
        const tableObj = document.querySelector('#resultTable');
        tableObj.innerHTML = html;
           


        }else{ 
        for( let i = 1 ; i <= line9/2 ; i++ ){
            html += `<tr>`; // 행 시작 
            // [공백]
            for( let b = 1 ; b <= line9/2-i ; b++){ html += `<td> </td>`};
            // [별]
            for( let s = 1 ; s <= 2 * i - 1; s++){ html +=`<td>★</td>`}

            // 줄바꿈    
            html += `</tr>`
        } // 행 끝

        for( let i = 1 ; i <= parseInt(line9/2) ; i++ ){ // f1 s [행]
            // [공백]
            for( let b = 1 ; b <= i ; b++){ html +=`<td> </td>`};
              // [별]
              for( let s = 1 ; s <= (line9/2-i)*2-2; s++){ html +=`<td>★</td>`}
        
               // 줄바꿈    
            html += `</tr>`
        }
        // 출력
        const tableObj = document.querySelector('#resultTable');
        tableObj.innerHTML = html;
        }
}
/*


// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*
**         
***      
****   
*****
// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
*****
****
***
**
*
// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   **
  ***
 ****
*****
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*****
 ****
  ***
   **
    *
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   ***
  *****
 *******
*********
// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*********
 *******
  *****
   ***
    *
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
// 문제10) 입력받은 줄(홀수만) 수 만큼 * 출력  [ ex) 7 ]
*     *
 *   *
  * *
   *
  * *
 *   *
*     *
*/